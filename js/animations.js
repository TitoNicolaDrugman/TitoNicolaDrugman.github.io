const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function reveal(el) {
  el.classList.add('is-visible');
}

function observeReveals() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  // Reduced motion skips scroll-gating entirely rather than just softening
  // the transition: with `scroll-behavior: auto` a jump (an anchor click, a
  // scrollbar drag, End/Home) is instantaneous, so a card skipped over in a
  // single jump would never intersect and would stay permanently invisible.
  // A "static layout" means content is just there, not hidden-until-scrolled.
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    elements.forEach(reveal);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      reveal(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  elements.forEach((el) => observer.observe(el));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

// Each timeline's rail fill tracks how far the viewport's midline has
// travelled through that rail's own vertical span — read straight off
// getBoundingClientRect() every frame, no eased/lerped lag chasing the
// real scroll position (Direct manipulation — 1:1 tracking).
function setupTimelineProgress() {
  const timelines = Array.from(document.querySelectorAll('.timeline'));
  if (!timelines.length) return null;

  return function update() {
    const anchor = window.innerHeight * 0.5;
    timelines.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const pct = rect.height > 0 ? clamp((anchor - rect.top) / rect.height, 0, 1) : 0;
      el.style.setProperty('--progress', `${(pct * 100).toFixed(1)}%`);
    });
  };
}

// Cards approaching the top/bottom edge of the viewport recede — a little
// blur, a little shrink — instead of snapping out of existence, so the
// timeline reads as a continuous space rather than a hard-clipped list.
// Uses the standalone `transform` property (untouched by the `translate`
// reveal-slide and the `scale` hover micro-interaction) so all three
// compose instead of clobbering one another's `transition`.
function setupCardDepth() {
  const cards = Array.from(document.querySelectorAll('.tl-card'));
  if (!cards.length) return null;

  const SAFE_ZONE = 0.42;
  const FADE_ZONE = 0.32;
  const MAX_BLUR = 6;
  const MAX_SHRINK = 0.08;

  return function update() {
    const vh = window.innerHeight;
    const center = vh / 2;
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const dist = Math.abs(rect.top + rect.height / 2 - center);
      const factor = clamp((dist - vh * SAFE_ZONE) / (vh * FADE_ZONE), 0, 1);
      if (factor < 0.02) {
        card.style.filter = '';
        card.style.transform = '';
      } else {
        card.style.filter = `blur(${(factor * MAX_BLUR).toFixed(2)}px)`;
        card.style.transform = `scale(${(1 - factor * MAX_SHRINK).toFixed(3)})`;
      }
    });
  };
}

// Everything in this function is decorative scroll-linked motion, so it
// simply doesn't run under reduced motion — rails sit at their resting
// (unfilled) state and cards keep whatever transform/filter they already
// have (none), i.e. a fully static layout.
function initScrollytelling() {
  if (prefersReducedMotion) return;

  const updateProgress = setupTimelineProgress();
  const updateDepth = setupCardDepth();
  if (!updateProgress && !updateDepth) return;

  let ticking = false;
  function onFrame() {
    ticking = false;
    if (updateProgress) updateProgress();
    if (updateDepth) updateDepth();
  }
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(onFrame);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onFrame(); // set the initial state without waiting for the first scroll
}

observeReveals();
initScrollytelling();
