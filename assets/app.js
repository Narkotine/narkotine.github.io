const LANGUAGES = {
  fr: {
    label: 'FR',
    loading: 'Chargement',
    empty: 'Aucun article pour le moment.',
    error: 'Impossible de charger les articles.',
    freshBadge: 'Fresh drop',
    dateFmt: { day: 'numeric', month: 'long', year: 'numeric' },
    dateLocale: 'fr-FR',
    heroTitle: 'Deux flux nets. Une archive compacte.',
    heroCopy:
      "Briefings quotidiens sur l'IA, la robotique et la géopolitique technologique, avec bascule de langue et lecture d'archives.",
    heroStats: {
      language: 'Langue active',
      category: 'Flux actif',
      latest: 'Dernière date'
    }
  },
  eng: {
    label: 'EN',
    loading: 'Loading',
    empty: 'No articles yet.',
    error: 'Could not load articles.',
    freshBadge: 'Fresh drop',
    dateFmt: { day: 'numeric', month: 'long', year: 'numeric' },
    dateLocale: 'en-US',
    heroTitle: 'Two sharp feeds. One compact archive.',
    heroCopy:
      'Daily briefings on AI, robotics, and tech geopolitics, with language switching and archive browsing.',
    heroStats: {
      language: 'Active language',
      category: 'Active feed',
      latest: 'Latest date'
    }
  }
};

const CATEGORIES = {
  AIz: {
    title: { fr: 'AI & Robotics Snacks', eng: 'AI & Robotics Snacks' },
    subtitle: {
      fr: 'Intelligence artificielle, robots et hype technologique',
      eng: 'Artificial intelligence, robotics, and tech hype'
    }
  },
  Geopolitikz: {
    title: { fr: 'Geopolitiks Snacks', eng: 'Geopolitiks Snacks' },
    subtitle: {
      fr: 'Geopolitique, conflits, diplomatie et tech comme force stratégique',
      eng: 'Geopolitics, conflicts, diplomacy, and tech as strategic force'
    }
  }
};

const STORAGE_KEYS = {
  lang: 'snacks-lang',
  category: 'snacks-cat'
};

const DOM = {
  langSwitch: document.getElementById('lang-switch'),
  feedNav: document.getElementById('feed-nav'),
  content: document.getElementById('content'),
  heroTitle: document.getElementById('hero-title'),
  heroMeta: document.getElementById('hero-meta'),
  heroCopy: document.querySelector('.hero-copy')
};

const feedCache = new Map();

let currentLang = validateLanguage(localStorage.getItem(STORAGE_KEYS.lang));
let currentCategory = validateCategory(localStorage.getItem(STORAGE_KEYS.category));
let activeLoadToken = 0;

marked.setOptions({ breaks: true, gfm: true });

function validateLanguage(value) {
  return LANGUAGES[value] ? value : 'fr';
}

function validateCategory(value) {
  return CATEGORIES[value] ? value : Object.keys(CATEGORIES)[0];
}

function dataFile(lang, slug, index) {
  return `data/news.${lang}.${slug}.${index}`;
}

function getLanguageConfig() {
  return LANGUAGES[currentLang] || LANGUAGES.fr;
}

function getCategoryConfig(slug = currentCategory) {
  return CATEGORIES[slug] || CATEGORIES[Object.keys(CATEGORIES)[0]];
}

function getLocalizedCategoryTitle(slug = currentCategory) {
  const category = getCategoryConfig(slug);
  return category.title[currentLang] || category.title.eng || slug;
}

function getLocalizedCategorySubtitle(slug = currentCategory) {
  const category = getCategoryConfig(slug);
  return category.subtitle[currentLang] || category.subtitle.eng || '';
}

function formatDate(iso) {
  const lang = getLanguageConfig();
  const date = new Date(`${iso}T12:00:00`);
  return date.toLocaleDateString(lang.dateLocale, lang.dateFmt);
}

function todayISO() {
  const now = new Date();
  const offsetMs = now.getTimezoneOffset() * 60 * 1000;
  return new Date(now.getTime() - offsetMs).toISOString().slice(0, 10);
}

function createElement(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function buildLangSwitch() {
  DOM.langSwitch.replaceChildren();

  Object.entries(LANGUAGES).forEach(([code, lang]) => {
    const button = createElement('button', code === currentLang ? 'active' : '', lang.label);
    button.type = 'button';
    button.setAttribute('aria-pressed', String(code === currentLang));
    button.addEventListener('click', () => {
      if (code === currentLang) return;
      currentLang = code;
      localStorage.setItem(STORAGE_KEYS.lang, currentLang);
      buildLangSwitch();
      buildNav();
      updateHero();
      loadFeed(currentCategory);
    });
    DOM.langSwitch.appendChild(button);
  });
}

function buildNav() {
  DOM.feedNav.replaceChildren();

  Object.entries(CATEGORIES).forEach(([slug, category]) => {
    const button = createElement(
      'button',
      slug === currentCategory ? 'active' : '',
      category.title[currentLang] || category.title.eng || slug
    );
    button.type = 'button';
    button.setAttribute('aria-pressed', String(slug === currentCategory));
    button.addEventListener('click', () => switchFeed(slug));
    DOM.feedNav.appendChild(button);
  });
}

function renderHeroStat(label, value) {
  const wrapper = createElement('div', 'hero-stat');
  const labelNode = createElement('span', 'hero-stat-label', label);
  const valueNode = createElement('span', 'hero-stat-value', value);
  wrapper.append(labelNode, valueNode);
  return wrapper;
}

function updateHero(articles = []) {
  const lang = getLanguageConfig();
  DOM.heroTitle.textContent = lang.heroTitle;
  DOM.heroCopy.textContent = lang.heroCopy;

  const latestArticle = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  const latestDate = latestArticle ? formatDate(latestArticle.date) : '—';

  DOM.heroMeta.replaceChildren(
    renderHeroStat(lang.heroStats.language, lang.label),
    renderHeroStat(lang.heroStats.category, getLocalizedCategoryTitle()),
    renderHeroStat(lang.heroStats.latest, latestDate)
  );
}

function renderFeedHeader(slug) {
  const header = createElement('div', 'feed-header');
  const title = createElement('h2', 'feed-title', getLocalizedCategoryTitle(slug));
  const subtitle = createElement('p', 'feed-subtitle', getLocalizedCategorySubtitle(slug));
  header.append(title, subtitle);
  return header;
}

function renderEmptyState(message, slug) {
  DOM.content.replaceChildren(renderFeedHeader(slug), createElement('div', 'empty', message));
}

function renderLoadingState(slug) {
  const lang = getLanguageConfig();
  DOM.content.replaceChildren(renderFeedHeader(slug), createElement('div', 'loading', lang.loading));
}

function renderArticles(articles, slug) {
  const lang = getLanguageConfig();
  const wrapper = document.createDocumentFragment();
  const sortedArticles = [...articles].sort((a, b) => {
    const dateDiff = new Date(b.date) - new Date(a.date);
    if (dateDiff !== 0) return dateDiff;
    return (b.id || 0) - (a.id || 0);
  });

  wrapper.appendChild(renderFeedHeader(slug));

  if (!sortedArticles.length) {
    wrapper.appendChild(createElement('div', 'empty', lang.empty));
    DOM.content.replaceChildren(wrapper);
    updateHero([]);
    return;
  }

  const list = createElement('div', 'articles');
  const today = todayISO();

  sortedArticles.forEach((article, index) => {
    const isFresh = article.date === today || article.fresh === true;
    const card = createElement('article', `article${isFresh ? ' fresh' : ''}`);
    card.style.animationDelay = `${index * 0.06}s`;

    if (isFresh) {
      card.appendChild(createElement('div', 'fresh-badge', lang.freshBadge));
    }

    const meta = createElement('div', 'article-meta');
    meta.appendChild(createElement('span', 'article-date', formatDate(article.date)));

    const tagList = createElement('div', 'article-tags');
    (article.tags || []).forEach((tag) => {
      tagList.appendChild(createElement('span', 'tag', tag));
    });
    meta.appendChild(tagList);

    const title = createElement('h3', 'article-title', article.title || '');
    const body = createElement('div', 'article-body');
    body.innerHTML = marked.parse(article.content || '');

    card.append(meta, title, body);
    list.appendChild(card);
  });

  wrapper.appendChild(list);
  DOM.content.replaceChildren(wrapper);
  updateHero(sortedArticles);
}

async function fetchFeedPage(lang, slug, index) {
  const response = await fetch(dataFile(lang, slug, index), { cache: 'no-store' });
  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Feed request failed with status ${response.status}`);
  }

  return response.json();
}

async function fetchFeed(lang, slug) {
  const cacheKey = `${lang}:${slug}`;
  if (feedCache.has(cacheKey)) {
    return feedCache.get(cacheKey);
  }

  const articles = [];
  let page = 1;

  while (true) {
    const chunk = await fetchFeedPage(lang, slug, page);
    if (!chunk) break;
    articles.push(...chunk);
    page += 1;
  }

  if (page === 1) {
    throw new Error(`No feed files found for ${cacheKey}`);
  }

  feedCache.set(cacheKey, articles);
  return articles;
}

async function loadFeed(slug) {
  const requestedLang = currentLang;
  const loadToken = ++activeLoadToken;
  const lang = getLanguageConfig();
  renderLoadingState(slug);

  try {
    const articles = await fetchFeed(requestedLang, slug);
    if (loadToken !== activeLoadToken) return;
    renderArticles(articles, slug);
  } catch (error) {
    if (loadToken !== activeLoadToken) return;
    console.error(error);
    renderEmptyState(lang.error, slug);
    updateHero([]);
  }
}

function switchFeed(slug) {
  if (slug === currentCategory) return;
  currentCategory = validateCategory(slug);
  localStorage.setItem(STORAGE_KEYS.category, currentCategory);
  buildNav();
  updateHero();
  loadFeed(currentCategory);
}

buildLangSwitch();
buildNav();
updateHero();
loadFeed(currentCategory);
