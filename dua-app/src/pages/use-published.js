import { duaNewsItems, duaCommentaries, duaEvents, duaLeaders } from '../dua-data.js';

const collections = {
  news: duaNewsItems,
  commentary: duaCommentaries,
  events: duaEvents,
  people: duaLeaders,
};

export function usePublished(type) {
  const items = collections[type] || [];
  return {
    status: 'ready',
    items,
    error: '',
    retry: () => {},
  };
}

const slugAliases = {
  'resolution-tanzania-r6': 'resolution-tanzania-tundu-lissu-2026',
  'resolution-uganda-2026': 'resolution-uganda-besigye-2026',
  'angola-50-years': 'angola-political-violence',
  'ghana-npp-primaries': 'npp-flagbearer-election',
};

export function useArticle(type, slug) {
  const rawSlug = String(slug || '').replace(/^\/+|\/+$/g, '');
  const cleanSlug = slugAliases[rawSlug] || rawSlug;
  const list = collections[type] || [];
  const item = list.find(entry => entry.slug === cleanSlug || entry.id === cleanSlug || entry.slug === rawSlug) || null;
  return {
    status: item ? 'ready' : 'error',
    item,
    error: item ? '' : 'This item could not be found.',
    retry: () => {},
  };
}

export function usePublishedEvents() {
  return {
    status: 'ready',
    items: duaEvents,
    suppressedSlugs: [],
    error: '',
    retry: () => {},
  };
}

export function useEvent(id) {
  const cleanId = String(id || '').replace(/^\/+|\/+$/g, '');
  const item = duaEvents.find(ev => ev.id === cleanId || ev.slug === cleanId) || null;
  return {
    status: item ? 'ready' : 'error',
    item,
    error: item ? '' : 'Event not found.',
  };
}
