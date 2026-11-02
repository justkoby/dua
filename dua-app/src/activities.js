import { duaNewsItems } from './dua-data.js';

export const storyUrl = id => `/news/${encodeURIComponent(id)}/`;

export const activities = duaNewsItems.map(item => ({
  id: item.slug,
  title: item.title,
  category: item.category,
  date: item.publishedOn,
  displayDate: item.dateLabel,
  location: item.dateline || 'ACCRA, GHANA',
  topics: ['democracy', 'governance', 'leadership', 'statements'],
  photo: {
    src: item.image,
    alt: item.title,
    panel: 1,
    position: 'center 25%',
  },
  imageCaption: `${item.dateline} · Issued by ${item.spokesperson}`,
  summary: item.summary,
  paragraphs: item.body,
  documentUrl: item.documentUrl || null,
  related: item.documentUrl ? '/policy-briefs/' : '/news/',
}));

export const edwsMetrics = [
  { value: '1997', label: 'year founded' },
  { value: '25+', label: 'member & sister parties' },
  { value: '05', label: 'African sub-regions' },
  { value: '08', label: 'statements & resolutions' },
];

export const getStory = id => activities.find(s => s.id === id);
