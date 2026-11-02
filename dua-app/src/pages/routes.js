import { commentaries } from './commentaries-content.js';
import { engageServices } from './engage-content.js';
import { events } from './events-content.js';
import { opportunityPathways, internshipProgramme } from './opportunities-content.js';

export const personUrl = id => `/people/${encodeURIComponent(id)}/`;

export const teamGroups = [
  {
    id: 'executive',
    path: '/leadership/',
    label: 'Executive Officers',
    description:
      'Chairperson Md Louisa Atta-Agyemang, Secretary General Mr Joy Reuben, Deputy Chairperson Hon Rafael Savimbi Massanga, and Treasurer Md Leonor Elisa Lopes De Sousa.',
  },
  {
    id: 'council',
    path: '/advisory-council/',
    label: 'Regional Vice-Chairs',
    description:
      'Elected Regional Vice-Chairs representing North, West, East, Central, and Southern African member parties on the DUA Executive Committee.',
  },
  {
    id: 'secretariat',
    path: '/secretariat/',
    label: 'Secretariat & Organs',
    description:
      'Headquartered in Accra, Ghana, coordinating DUA forums, official communications, resolutions, and youth/women networks.',
  },
];

export function resolvePage(pathname) {
  const clean = String(pathname || '/').split('/').filter(Boolean).join('/');
  if (!clean) return null;
  const path = `/${clean}/`;

  if (['/about/', '/about-us/', '/who-we-are/', '/our-mission-vision/'].includes(path)) {
    return { type: 'about' };
  }
  if (['/priorities/', '/research/', '/governance-diplomacy/', '/trade-industrial-policy/', '/technology-energy-climate/'].includes(path)) {
    return { type: 'priorities' };
  }
  if (['/member-parties/', '/members/'].includes(path)) {
    return { type: 'members' };
  }
  if (['/blog/', '/commentaries/', '/category/blog/'].includes(path)) {
    return { type: 'commentaries' };
  }
  const article = commentaries.find(item => path === `/${item.slug}/` || path === `/blog/${item.slug}/`);
  if (article) return { type: 'commentary', id: article.id, slug: article.slug };

  if (path === '/remote-internship-programme-rip/' || path === '/junior-associates/') {
    return { type: 'opportunity', id: internshipProgramme.id };
  }
  if (path === '/engage/') return { type: 'engage' };
  if (path === '/contact/') return { type: 'contact' };
  if (path === '/careers/') return { type: 'careers' };

  const service = engageServices.find(item => item.path === path);
  if (service) return { type: 'engage-service', id: service.id };

  if (['/news/', '/media/', '/news-events/', '/media-press/'].includes(path)) {
    return { type: 'news' };
  }
  const newsArticle = path.match(/^\/(?:news|article)\/([a-z0-9-]+)\/$/);
  if (newsArticle) return { type: 'news-article', slug: newsArticle[1] };

  const blogArticle = path.match(/^\/blog\/([a-z0-9-]+)\/$/);
  if (blogArticle) return { type: 'commentary', slug: blogArticle[1] };

  if (path === '/events/') return { type: 'events' };
  if (path.startsWith('/register/')) return { type: 'event', id: 'dua-forum-2026' };

  const event = events.find(item => path === `/events/${item.id}/`);
  if (event) return { type: 'event', id: event.id };
  const eventMatch = path.match(/^\/events\/([a-z0-9-]+)\/$/);
  if (eventMatch) return { type: 'event', id: eventMatch[1] };

  if (path === '/opportunities/') return { type: 'opportunities' };
  if (path === '/fellowships/') return { type: 'opportunity', id: 'fellowships' };
  if (path === '/calls-for-papers/') return { type: 'opportunity', id: 'calls-for-papers' };
  if (path === '/volunteer-opportunities/') return { type: 'opportunity', id: 'volunteer-opportunities' };
  if (path === '/foreign-africa-enterprise-week-few-2/' || path === '/foreign-africa-enterprise-week-few/') {
    return { type: 'opportunity', id: 'enterprise-week' };
  }
  const pathway = opportunityPathways.find(item => item.path === path);
  if (pathway) return { type: 'opportunity', id: pathway.id };

  if (['/partners/', '/global-network/'].includes(path)) return { type: 'partners' };
  if (['/policy-briefs/', '/publications/'].includes(path)) return { type: 'policy' };

  if (['/leadership/', '/our-people/', '/executive-leadership/'].includes(path)) {
    return { type: 'team', group: 'all' };
  }
  if (path === '/advisory-council/') return { type: 'team', group: 'council' };
  if (path === '/secretariat/') return { type: 'team', group: 'secretariat' };

  const profile = path.match(/^\/people\/([a-z0-9-]+)\/$/);
  if (profile) return { type: 'profile', id: profile[1] };

  return { type: 'about' };
}
