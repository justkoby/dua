import { duaLeaders } from '../dua-data.js';

export const teamMembers = duaLeaders.map(leader => ({
  id: leader.id,
  name: leader.name,
  role: `${leader.role} · ${leader.party} (${leader.country})`,
  group: leader.group === 'Executive Officers' ? 'executive' : 'council',
  location: `${leader.country} · ${leader.party}`,
  email: 'info@democratunionofafrica.org',
  phone: '+233 24 196 7709',
  contactUrl: '/contact/',
  image: leader.image,
  intro: leader.summary,
  bio: leader.bio,
}));

export const additionalTeamMembers = [
  {
    name: 'DUA Secretariat — Accra, Ghana',
    role: 'Continental Headquarters, Inter-Party Coordination & Communications',
    group: 'secretariat',
  },
  {
    name: 'Youth Democrat Union of Africa (YDUA)',
    role: 'Official Continental Youth Wing of the Democracy Union of Africa',
    group: 'secretariat',
  },
  {
    name: 'DUA Election Observation & Masterclass Desk',
    role: 'Campaign & Electioneering Masterclass Series (DUA × CT Group)',
    group: 'secretariat',
  },
];

export const getMember = id => {
  const clean = String(id || '').replace(/^\/+|\/+$/g, '');
  return teamMembers.find(member => member.id === clean) || null;
};
