// Mouse-spotlight: a soft light that follows the pointer across each glass
// card, read straight off pointermove with no smoothing/throttling — direct
// 1:1 tracking, not a debounced approximation (Response — kill latency).
function attachSpotlight(card) {
  function onPointerMove(e) {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  }

  function onPointerLeave() {
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  }

  card.addEventListener('pointermove', onPointerMove);
  card.addEventListener('pointerleave', onPointerLeave);
}

function initSpotlights() {
  document.querySelectorAll('.tl-card').forEach(attachSpotlight);
}

initSpotlights();
