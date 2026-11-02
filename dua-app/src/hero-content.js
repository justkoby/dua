export const storyVideo = '/images/Comp 1.webm';

export const heroSlides = [
  {
    id: 'womens-conference-2026-plenary',
    published: true,
    order: 0,
    kind: 'story',
    photoLayout: true,
    label: 'DUA Women’s Conference 2026',
    title: 'Women. Power. Progress.',
    lines: ['Women. Power.'],
    emphasis: 'Progress.',
    description:
      'A landmark gathering of centre-right women leaders from across Africa and beyond.',
    desktopMedia: {
      type: 'image',
      src: '/images/events/dua-womens-conference-2026/delegates-group-wide.png',
      position: 'center 35%',
      alt: 'Delegates and leaders assembled at the DUA Women’s Conference 2026 in Windhoek, Namibia.',
    },
    mobileMedia: {
      type: 'image',
      src: '/images/events/dua-womens-conference-2026/delegates-group-wide.png',
      position: 'center',
      alt: 'Delegates and leaders assembled at the DUA Women’s Conference 2026 in Windhoek, Namibia.',
    },
    cta: { label: 'View Highlights', href: '/events/womens-conference-2026/' },
    duration: 11000,
  },
  {
    id: 'womens-conference-2026-samira',
    published: true,
    order: 0.2,
    kind: 'story',
    photoLayout: true,
    label: 'Keynote Address',
    title: 'Strengthening Democratic Leadership',
    lines: ['Democratic leadership'],
    emphasis: 'In action.',
    description:
      'H.E. Lady Samira Bawumia addresses continental women delegates in Windhoek.',
    desktopMedia: {
      type: 'image',
      src: '/images/events/dua-womens-conference-2026/samira-bawumia-keynote-podium.png',
      position: 'center 20%',
      alt: 'H.E. Lady Samira R. Bawumia addressing the DUA Women’s Conference 2026.',
    },
    mobileMedia: {
      type: 'image',
      src: '/images/events/dua-womens-conference-2026/samira-bawumia-keynote-podium.png',
      position: 'center 20%',
      alt: 'H.E. Lady Samira R. Bawumia addressing the DUA Women’s Conference 2026.',
    },
    cta: { label: 'View Highlights', href: '/events/womens-conference-2026/' },
    duration: 11000,
  },
  {
    id: 'womens-conference-2026-hall',
    published: true,
    order: 0.4,
    kind: 'story',
    photoLayout: true,
    label: 'Plenary Sessions',
    title: 'Security, Sovereignty, Freedom',
    lines: ['Sovereignty &'],
    emphasis: 'Freedom.',
    description:
      'Over 25 member parties uniting for constitutional governance across Africa.',
    desktopMedia: {
      type: 'image',
      src: '/images/events/dua-womens-conference-2026/conference-hall-audience-plenary.png',
      position: 'center 40%',
      alt: 'Conference hall audience and delegates at DUA Women’s Conference 2026.',
    },
    mobileMedia: {
      type: 'image',
      src: '/images/events/dua-womens-conference-2026/conference-hall-audience-plenary.png',
      position: 'center 40%',
      alt: 'Conference hall audience and delegates at DUA Women’s Conference 2026.',
    },
    cta: { label: 'View Highlights', href: '/events/womens-conference-2026/' },
    duration: 11000,
  },
  {
    id: 'womens-conference-2026-leadership',
    published: true,
    order: 0.6,
    kind: 'story',
    photoLayout: true,
    label: 'Continental Solidarity',
    title: 'A United Continental Voice',
    lines: ['A united continental'],
    emphasis: 'Voice.',
    description:
      'DUA Chairperson Louisa Atta-Agyemang and delegates advance democratic partnerships.',
    desktopMedia: {
      type: 'image',
      src: '/images/events/dua-womens-conference-2026/samira-bawumia-and-louisa-atta-agyemang.png',
      position: 'center 25%',
      alt: 'DUA Chairperson Louisa Atta-Agyemang with H.E. Lady Samira Bawumia at Windhoek.',
    },
    mobileMedia: {
      type: 'image',
      src: '/images/events/dua-womens-conference-2026/samira-bawumia-and-louisa-atta-agyemang.png',
      position: 'center 25%',
      alt: 'DUA Chairperson Louisa Atta-Agyemang with H.E. Lady Samira Bawumia at Windhoek.',
    },
    cta: { label: 'View Highlights', href: '/events/womens-conference-2026/' },
    duration: 11000,
  },
  {
    id: 'dua-berlin-retreat-2026',
    published: true,
    order: 0.8,
    kind: 'story',
    photoLayout: true,
    label: 'Berlin Strategic Retreat',
    title: 'Defending Democracy',
    lines: ['Global alliances for'],
    emphasis: 'Democracy.',
    description:
      'DUA Board strategic consultations with Germany’s CDU and Konrad-Adenauer-Stiftung.',
    desktopMedia: {
      type: 'image',
      src: '/images/events/dua-berlin-retreat-2026/dua-board-cdu-headquarters.webp',
      position: 'center 30%',
      alt: 'DUA Board delegation at CDU Headquarters in Berlin, Germany.',
    },
    mobileMedia: {
      type: 'image',
      src: '/images/events/dua-berlin-retreat-2026/dua-board-cdu-headquarters.webp',
      position: 'center 30%',
      alt: 'DUA Board delegation at CDU Headquarters in Berlin, Germany.',
    },
    cta: { label: 'Read Retreat Report', href: '/news/dua-berlin-board-retreat-2026/' },
    duration: 11000,
  },
  {
    id: 'dua-forum-2026',
    published: true,
    order: 1.0,
    kind: 'story',
    photoLayout: true,
    label: 'DUA Forum 2026',
    title: 'Advancing Centre-Right Cooperation',
    lines: ['Centre-right cooperation across'],
    emphasis: 'Africa.',
    description:
      'The premier continental gathering of democratic political leaders.',
    desktopMedia: {
      type: 'image',
      src: '/images/2.webp',
      position: 'center',
      alt: 'Delegates at the Democracy Union of Africa Annual Forum.',
    },
    mobileMedia: {
      type: 'image',
      src: '/images/2.webp',
      position: 'center',
      alt: 'Delegates at the Democracy Union of Africa Annual Forum.',
    },
    cta: { label: 'Explore Forum 2026', href: '/events/dua-forum-2026/' },
    duration: 11000,
  },
];

export function publishedSlides(slides = heroSlides) {
  return slides
    .filter(s => s.published)
    .slice()
    .sort((a, b) => a.order - b.order);
}

export function mediaForViewport(slide, mobile = false) {
  return mobile && slide.mobileMedia?.src ? slide.mobileMedia : slide.desktopMedia;
}

export function nextSlideIndex(index, delta, count) {
  return count > 0 ? (((index + delta) % count) + count) % count : 0;
}

export function youtubeEmbedUrl(raw) {
  try {
    const u = new URL(raw);
    let id;
    if (['youtube.com', 'www.youtube.com'].includes(u.hostname)) {
      id = u.pathname === '/watch' ? u.searchParams.get('v') : u.pathname.startsWith('/embed/') ? u.pathname.split('/')[2] : null;
    } else if (u.hostname === 'youtu.be') {
      id = u.pathname.slice(1);
    }
    return /^[a-zA-Z0-9_-]{11}$/.test(id ?? '') ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0` : null;
  } catch {
    return null;
  }
}
