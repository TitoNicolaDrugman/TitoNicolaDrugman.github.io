import { experiences } from '../data/experiences.js';

const CATEGORY_LABEL = {
  education: 'Education',
  work: 'Work',
  exchange: 'Exchange',
  project: 'Project'
};

// Group A — formal career & education; Group B — everything else (projects/research).
const CAREER_CATEGORIES = ['work', 'education', 'exchange'];
const isCareerItem = (item) => CAREER_CATEGORIES.includes(item.category.toLowerCase());

// Cap the stagger cycle so a long list never queues up a sluggish cascade.
const STAGGER_CYCLE = 8;

const LOGO_STOPWORDS = new Set(['di', 'the', 'of', 'and', 'e', '×']);

// Until real artwork lands in assets/logos/, cards fall back to a monogram
// derived from the organization name rather than a broken-image icon.
function getInitials(name) {
  const words = name
    .replace(/[×().]/g, ' ')
    .split(/\s+/)
    .filter((w) => w && !LOGO_STOPWORDS.has(w.toLowerCase()));
  const letters = words.slice(0, 2).map((w) => w[0].toUpperCase());
  return letters.join('') || name.slice(0, 2).toUpperCase();
}

function createLogo(item) {
  const wrap = document.createElement('div');
  wrap.className = 'tl-card__logo material';

  const fallback = document.createElement('span');
  fallback.className = 'tl-card__logo-fallback';
  fallback.textContent = getInitials(item.organization);
  fallback.hidden = true;

  if (item.logo) {
    const img = document.createElement('img');
    img.src = item.logo;
    img.alt = `${item.organization} logo`;
    img.loading = 'lazy';
    img.addEventListener('error', () => {
      img.remove();
      fallback.hidden = false;
    }, { once: true });
    wrap.append(img, fallback);
  } else {
    fallback.hidden = false;
    wrap.append(fallback);
  }

  return wrap;
}

function createTagList(tags) {
  const ul = document.createElement('ul');
  ul.className = 'tl-card__tags';
  tags.forEach((tag) => {
    const li = document.createElement('li');
    li.textContent = tag;
    ul.appendChild(li);
  });
  return ul;
}

function createCard(item, index) {
  const li = document.createElement('li');
  li.className = 'tl-card material reveal';
  li.setAttribute('role', 'listitem');
  li.dataset.category = item.category;
  li.style.setProperty('--i', index % STAGGER_CYCLE);

  const body = document.createElement('div');
  body.className = 'tl-card__body';

  const row = document.createElement('div');
  row.className = 'tl-card__row';

  const date = document.createElement('span');
  date.className = 'tl-card__date';
  date.textContent = item.dateLabel;
  row.appendChild(date);

  if (item.upcoming) {
    const badge = document.createElement('span');
    badge.className = 'tl-card__badge tl-card__badge--upcoming';
    badge.textContent = 'Incoming';
    row.appendChild(badge);
  } else if (item.ongoing) {
    const badge = document.createElement('span');
    badge.className = 'tl-card__badge';
    badge.textContent = 'Ongoing';
    row.appendChild(badge);
  }

  const title = document.createElement('h3');
  title.className = 'tl-card__title';
  title.textContent = item.title;

  const org = document.createElement('p');
  org.className = 'tl-card__org';
  const orgBits = [item.organization, item.location].filter(Boolean).join(' · ');
  org.textContent = `${CATEGORY_LABEL[item.category] || item.category} — ${orgBits}`;

  const summary = document.createElement('p');
  summary.className = 'tl-card__summary';
  summary.textContent = item.summary;

  body.append(row, title, org, summary);

  if (item.tags && item.tags.length) {
    body.appendChild(createTagList(item.tags));
  }

  if (item.link) {
    const link = document.createElement('a');
    link.className = 'tl-card__link';
    link.href = item.link;
    link.target = '_blank';
    link.rel = 'noopener';
    link.innerHTML = 'View on GitHub <span aria-hidden="true">→</span>';
    body.appendChild(link);
  }

  li.append(createLogo(item), body);

  return li;
}

function renderList(containerId, items) {
  const list = document.getElementById(containerId);
  if (!list) return;

  const fragment = document.createDocumentFragment();
  items.forEach((item, index) => fragment.appendChild(createCard(item, index)));
  list.appendChild(fragment);
}

function renderTimelines() {
  const career = experiences.filter(isCareerItem);
  const projects = experiences.filter((item) => !isCareerItem(item));

  renderList('career-list', career);
  renderList('projects-list', projects);
}

renderTimelines();
