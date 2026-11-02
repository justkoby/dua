import { duaLeaders } from './dua-data.js';

export const interns = duaLeaders.map((leader, order) => ({
  id: leader.id,
  name: leader.name,
  country: `${leader.country} · ${leader.party}`,
  order,
  role: `${leader.role} (${leader.group})`,
  href: `/people/${leader.id}/`,
  portrait: {
    src: leader.image,
    singleImage: true,
  },
  published: true,
}));
