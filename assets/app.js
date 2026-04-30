let siteConfig;

const STORAGE_KEYS = {
  lang: 'snacks-lang',
  category: 'snacks-cat',
  theme: 'snacks-theme'
};

const THEMES = {
  soft: { label: 'Soft' },
  sharp: { label: 'Sharp' },
  night: { label: 'Night' }
};

const DOM = {
  themeSwitch: document.getElementById('theme-switch'),
  langSwitch: document.getElementById('lang-switch'),
  feedNav: document.getElementById('feed-nav'),
  content: document.getElementById('content')
};

const feedCache = new Map();
const archiveLoadState = new Map();

let currentLang;
let currentCategory;
let currentTheme;
let activeLoadToken = 0;

marked.setOptions({ breaks: true, gfm: true });

function validateLanguage(value) {
  return siteConfig.languages[value] ? value : 'fr';
}

function validateCategory(value) {
  return siteConfig.categories[value] ? value : Object.keys(siteConfig.categories)[0];
}

function validateTheme(value) {
  return THEMES[value] ? value : 'soft';
}

function dataFile(lang, slug, index) {
  return `data/news.${lang}.${slug}.${index}`;
}

function getLanguageConfig() {
  return siteConfig.languages[currentLang] || siteConfig.languages.fr;
}

function getCategoryConfig(slug = currentCategory) {
  return siteConfig.categories[slug] || siteConfig.categories[Object.keys(siteConfig.categories)[0]];
}

function getLocalizedCategoryTitle(slug = currentCategory) {
  const category = getCategoryConfig(slug);
  return category.title[currentLang] || category.title.eng || slug;
}

function getLocalizedCategorySubtitle(slug = currentCategory) {
  const category = getCategoryConfig(slug);
  return category.subtitle[currentLang] || category.subtitle.eng || '';
}

function getArchiveLabels() {
  return currentLang === 'eng'
    ? {
        show: 'View archive',
        hide: 'Hide archive'
      }
    : {
        show: 'Voir les archives',
        hide: 'Masquer les archives'
      };
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

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function applyTheme() {
  document.body.dataset.theme = currentTheme;
}

function buildThemeSwitch() {
  DOM.themeSwitch.replaceChildren();

  Object.entries(THEMES).forEach(([themeKey, theme]) => {
    const button = createElement(
      'button',
      themeKey === currentTheme ? 'active' : '',
      theme.label
    );
    button.type = 'button';
    button.setAttribute('aria-pressed', String(themeKey === currentTheme));
    button.addEventListener('click', () => {
      if (themeKey === currentTheme) return;
      currentTheme = themeKey;
      localStorage.setItem(STORAGE_KEYS.theme, currentTheme);
      applyTheme();
      buildThemeSwitch();
    });
    DOM.themeSwitch.appendChild(button);
  });
}

function buildLangSwitch() {
  DOM.langSwitch.replaceChildren();

  Object.entries(siteConfig.languages).forEach(([code, lang]) => {
    const button = createElement('button', code === currentLang ? 'active' : '', lang.label);
    button.type = 'button';
    button.setAttribute('aria-pressed', String(code === currentLang));
    button.addEventListener('click', () => {
      if (code === currentLang) return;
      currentLang = code;
      localStorage.setItem(STORAGE_KEYS.lang, currentLang);
      buildLangSwitch();
      buildNav();
      loadFeed(currentCategory);
      scrollToTop();
    });
    DOM.langSwitch.appendChild(button);
  });
}

function buildNav() {
  DOM.feedNav.replaceChildren();

  Object.entries(siteConfig.categories).forEach(([slug, category]) => {
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

function getRecentDateSet(articles) {
  const distinctDates = [...new Set(articles.map((article) => article.date))]
    .sort((a, b) => new Date(b) - new Date(a))
    .slice(0, 3);

  return new Set(distinctDates);
}

function splitArticlesByRecency(articles) {
  const recentDateSet = getRecentDateSet(articles);
  const recent = [];
  const archive = [];

  articles.forEach((article) => {
    if (recentDateSet.has(article.date)) {
      recent.push(article);
    } else {
      archive.push(article);
    }
  });

  return { recent, archive };
}

function renderArticleList(articles, lang) {
  const list = createElement('div', 'articles');
  const today = todayISO();

  articles.forEach((article, index) => {
    const isFresh = article.date === today;
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

  return list;
}

function createFeedStateKey(lang = currentLang, slug = currentCategory) {
  return `${lang}:${slug}`;
}

function buildArchiveSection(archiveArticles, slug, lang) {
  const archiveStateKey = createFeedStateKey();
  const archiveSection = createElement('section', 'archive-panel');
  const archiveActions = createElement('div', 'archive-actions');
  const archiveContent = createElement('div', 'archive-content');
  const archiveState = archiveLoadState.get(archiveStateKey) || { loaded: false, loading: false };
  const archiveLabels = getArchiveLabels();

  const buttonLabel = archiveState.loaded ? archiveLabels.hide : archiveLabels.show;
  const archiveButton = createElement('button', 'archive-toggle', buttonLabel);
  archiveButton.type = 'button';

  const loadArchive = async () => {
    archiveLoadState.set(archiveStateKey, { loaded: false, loading: true });
    renderArticles(feedCache.get(archiveStateKey)?.recent || [], slug);

    try {
      const feedState = await loadArchiveFeed(currentLang, currentCategory);
      archiveLoadState.set(archiveStateKey, { loaded: true, loading: false });
      renderArticles(feedState.recent, slug);
    } catch (error) {
      console.error(error);
      archiveLoadState.set(archiveStateKey, { loaded: false, loading: false });
      renderArticles(feedCache.get(archiveStateKey)?.recent || [], slug);
    }
  };

  archiveButton.addEventListener('click', async () => {
    const currentState = archiveLoadState.get(archiveStateKey) || { loaded: false, loading: false };

    if (currentState.loading) return;

    if (!currentState.loaded) {
      await loadArchive();
      return;
    }

    archiveLoadState.set(archiveStateKey, { loaded: false, loading: false });
    renderArticles(feedCache.get(archiveStateKey)?.recent || [], slug);
  });

  archiveActions.appendChild(archiveButton);

  if (archiveState.loading) {
    archiveContent.appendChild(createElement('div', 'loading archive-loading', lang.loading));
  } else if (archiveState.loaded) {
    archiveContent.appendChild(renderArticleList(archiveArticles, lang));
  }

  archiveSection.append(archiveActions, archiveContent);
  return archiveSection;
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
    return;
  }

  const archiveStateKey = createFeedStateKey();
  const cachedState = feedCache.get(archiveStateKey);
  const archiveArticles = cachedState?.archive || [];
  const { recent } = splitArticlesByRecency(sortedArticles);
  wrapper.appendChild(renderArticleList(recent, lang));

  if ((cachedState && cachedState.nextArchivePage >= 1) || archiveArticles.length) {
    wrapper.appendChild(buildArchiveSection(archiveArticles, slug, lang));
  }

  DOM.content.replaceChildren(wrapper);
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

async function hasFeedPage(lang, slug, index) {
  const response = await fetch(dataFile(lang, slug, index), { cache: 'no-store', method: 'HEAD' });
  if (response.status === 404) {
    return false;
  }

  if (!response.ok) {
    throw new Error(`Feed probe failed with status ${response.status}`);
  }

  return true;
}

async function findLatestFeedPage(lang, slug) {
  if (!(await hasFeedPage(lang, slug, 1))) {
    throw new Error(`No feed files found for ${lang}:${slug}`);
  }

  let low = 1;
  let high = 1;

  while (await hasFeedPage(lang, slug, high)) {
    low = high;
    high *= 2;
  }

  while (low < high) {
    const mid = Math.floor((low + high + 1) / 2);
    if (await hasFeedPage(lang, slug, mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  return low;
}

async function fetchRecentFeed(lang, slug) {
  const latestPage = await findLatestFeedPage(lang, slug);
  const recent = [];
  const recentDates = new Set();
  let page = latestPage;

  while (page >= 1 && recentDates.size < 3) {
    const chunk = await fetchFeedPage(lang, slug, page);
    const entries = Array.isArray(chunk) ? chunk : [];

    entries.forEach((article) => {
      recent.push(article);
      if (article.date) {
        recentDates.add(article.date);
      }
    });
    page -= 1;
  }

  return {
    latestPage,
    nextArchivePage: page,
    recent
  };
}

async function loadArchiveFeed(lang, slug) {
  const cacheKey = createFeedStateKey(lang, slug);
  const cached = feedCache.get(cacheKey);

  if (!cached) {
    throw new Error(`Missing cached recent feed for ${cacheKey}`);
  }

  if (cached.archiveLoaded) {
    return cached;
  }

  const archive = [...cached.archive];

  for (let page = cached.nextArchivePage; page >= 1; page -= 1) {
    const chunk = await fetchFeedPage(lang, slug, page);
    archive.push(...chunk);
  }

  const nextState = {
    ...cached,
    archive,
    archiveLoaded: true
  };

  feedCache.set(cacheKey, nextState);
  return nextState;
}

async function loadSiteConfig() {
  const response = await fetch('data/site-config.json', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Config request failed with status ${response.status}`);
  }

  const nextConfig = await response.json();
  if (!nextConfig.languages || !nextConfig.categories) {
    throw new Error('Invalid site config payload');
  }

  siteConfig = nextConfig;
  currentLang = validateLanguage(localStorage.getItem(STORAGE_KEYS.lang));
  currentCategory = validateCategory(localStorage.getItem(STORAGE_KEYS.category));
}

async function fetchFeed(lang, slug) {
  const cacheKey = createFeedStateKey(lang, slug);
  if (feedCache.has(cacheKey)) {
    return feedCache.get(cacheKey);
  }

  const recentState = await fetchRecentFeed(lang, slug);
  const splitState = splitArticlesByRecency(recentState.recent);
  const nextState = {
    latestPage: recentState.latestPage,
    nextArchivePage: recentState.nextArchivePage,
    recent: splitState.recent,
    archive: splitState.archive,
    archiveLoaded: recentState.nextArchivePage < 1
  };

  feedCache.set(cacheKey, nextState);
  return nextState;
}

async function loadFeed(slug) {
  const requestedLang = currentLang;
  const loadToken = ++activeLoadToken;
  const lang = getLanguageConfig();
  renderLoadingState(slug);

  try {
    const feedState = await fetchFeed(requestedLang, slug);
    if (loadToken !== activeLoadToken) return;
    renderArticles(feedState.recent, slug);
  } catch (error) {
    if (loadToken !== activeLoadToken) return;
    console.error(error);
    renderEmptyState(lang.error, slug);
  }
}

function switchFeed(slug) {
  if (slug === currentCategory) return;
  currentCategory = validateCategory(slug);
  localStorage.setItem(STORAGE_KEYS.category, currentCategory);
  buildNav();
  loadFeed(currentCategory);
  scrollToTop();
}

async function bootstrap() {
  try {
    await loadSiteConfig();
    currentTheme = validateTheme(localStorage.getItem(STORAGE_KEYS.theme));
    applyTheme();
    buildThemeSwitch();
    buildLangSwitch();
    buildNav();
    loadFeed(currentCategory);
  } catch (error) {
    console.error(error);
    DOM.content.replaceChildren(createElement('div', 'empty', 'Configuration error.'));
  }
}

bootstrap();
