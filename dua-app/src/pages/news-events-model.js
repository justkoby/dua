import { newsItems } from './news-content.js';

export const newsCategories = [
  'All news',
  'Statements',
  'Publications',
  'Press Releases',
  'News',
  'Opinion',
  'Programme Updates',
];

const normalise = value =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

export function filterNews({ query = '', category = 'All news', items = newsItems } = {}) {
  const words = normalise(query).trim().split(/\s+/).filter(Boolean);
  return items
    .filter(
      item =>
        (category === 'All news' || item.category === category) &&
        words.every(word => normalise(`${item.title} ${item.summary} ${item.location || item.dateline || ''}`).includes(word))
    )
    .sort((a, b) => String(b.publishedOn).localeCompare(String(a.publishedOn)));
}

export const displayDate = date => {
  if (!date) return 'Date TBA · 2026';
  const iso = String(date).slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return String(date);
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T12:00:00Z`));
};

export function eventState(item) {
  if (item.cancelled) return 'cancelled';
  if (item.timing === 'date-tba') return 'unannounced';
  if (item.timing === 'past') return 'past';
  const date = item.date || item.startDate || item.eventDate || null;
  if (!date) return 'unannounced';
  return 'past';
}

export function listEvents(items, view = 'upcoming') {
  return items.filter(item => {
    const state = eventState(item);
    if (view === 'all') return true;
    if (view === 'upcoming') return state === 'upcoming' || state === 'ongoing';
    if (view === 'past') return state === 'past';
    return false;
  });
}
