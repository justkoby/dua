import { innerPageDirectory } from './pages/page-directory.js';
import { resources } from './content.js';

const stop = new Set(
  'a an and are as at be by can could do does for dua democracy union of africa from give have help how i im in interested is it like looking me my of on or our please related say show some tell that the their them there these this to want we what whats when where which who with would you your'.split(
    ' '
  )
);

export const catalogue = [
  ...innerPageDirectory,
  ...resources.map((r, i) => ({
    ...r,
    id: `dua-res-${i + 1}`,
    topics: ['democracy', 'policy'],
    status: 'published',
  })),
];

export const categories = ['All', 'Research', 'Programme', 'Opportunity', 'Update', 'About', 'People'];

export const suggestions = [
  'Tundu Lissu statement (Tanzania)',
  'Windhoek 2026 Resolutions (.docx)',
  'Chairperson Louisa Atta-Agyemang',
  'Member parties directory',
  'DUA Forum 2026',
];

const words = text =>
  String(text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w && !stop.has(w));

export function discover(query, category = 'All') {
  const tokens = words(query);
  const matches = catalogue
    .filter(r => category === 'All' || r.type === category)
    .map(r => {
      const title = words(r.title);
      const body = words(r.description);
      const score = tokens.reduce(
        (n, w) => n + (title.some(t => t.includes(w)) ? 5 : body.some(b => b.includes(w)) ? 1.5 : 0),
        0
      );
      return { ...r, score };
    })
    .filter(r => !tokens.length || r.score > 0)
    .sort((a, b) => b.score - a.score);

  const message = matches.length
    ? 'Matching pages, statements, resolutions, and profiles across the Democracy Union of Africa.'
    : 'No matching page was found for that term. Try searching for a country, leader, resolution, or priority.';

  return {
    results: matches,
    message,
    notice: null,
    canAnswer: tokens.length > 0 && matches.length > 0,
  };
}
