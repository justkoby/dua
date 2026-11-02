export const page = slug => `/${String(slug).replace(/^\/+|\/+$/g, '')}/`;

export const resources = [
  {
    title: 'Publications & Windhoek Resolutions',
    type: 'Research',
    description: 'Official downloadable Windhoek 2026 Country Resolutions (.docx) on Tanzania, Côte d’Ivoire, and Uganda.',
    url: '/policy-briefs/',
  },
  {
    title: 'Commentaries & Features',
    type: 'Research',
    description: 'Articles on DUA leadership, democratic resilience, and centre-right governance across Africa.',
    url: '/blog/',
  },
  {
    title: 'DUA Annual Forum (DUA Forum 2026)',
    type: 'Programme',
    description: 'DUA’s flagship annual gathering of party chairpersons, parliamentarians, policymakers, and international partners across Africa.',
    url: '/events/dua-forum-2026/',
  },
  {
    title: '2026 Campaign & Electioneering Masterclass Series',
    type: 'Programme',
    description: 'Continental training programme delivered with CT Group to strengthen voter research, strategic communications, and campaign management.',
    url: '/news/ct-masterclass-2026/',
  },
  {
    title: 'Youth Democrat Union of Africa (YDUA) Leadership Academy',
    type: 'Programme',
    description: 'Empowering emerging African political leaders through training academies, policy fellowships, and global exchange with IYDU.',
    url: '/priorities/#youth-political-leadership',
  },
  {
    title: 'Continental Member Parties & Election Solidarity Network',
    type: 'Programme',
    description: 'Uniting over 25 African centre-right political parties for peer learning, election observation, and diplomatic solidarity.',
    url: '/member-parties/',
  },
  {
    title: 'YDUA Youth Leadership & Fellowships',
    type: 'Opportunity',
    description: 'Explore youth political leadership pathways and fellowships with YDUA and IYDU.',
    url: '/remote-internship-programme-rip/',
  },
  {
    title: 'Member Parties Network',
    type: 'Opportunity',
    description: 'Browse our directory of over 25 sister political parties across five African regions.',
    url: '/member-parties/',
  },
  {
    title: 'Campaign Masterclass Series',
    type: 'Opportunity',
    description: 'Discover the 2026 Campaign & Electioneering Masterclass Series with CT Group.',
    url: '/calls-for-papers/',
  },
  {
    title: 'Women in Governance Network',
    type: 'Opportunity',
    description: 'Advancing women’s political representation in partnership with IWDU.',
    url: '/volunteer-opportunities/',
  },
  {
    title: 'DUA Forum 2026 Delegation Interest',
    type: 'Opportunity',
    description: 'Register delegation or partner interest for DUA Forum 2026 (host city to be announced).',
    url: '/events/dua-forum-2026/',
  },
];

export const navigation = [
  { label: 'Who we are', href: '#about' },
  { label: 'Our priorities', href: '#focus' },
  { label: 'Publications', href: '#research' },
  { label: 'Initiatives', href: '#programmes' },
  { label: 'Network', href: '#opportunities' },
];

export function searchResources(query, category = 'All') {
  const words = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return resources.filter(
    r =>
      (category === 'All' || r.type === category) &&
      words.every(w => `${r.title} ${r.type} ${r.description}`.toLocaleLowerCase().includes(w))
  );
}
