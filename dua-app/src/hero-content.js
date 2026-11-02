export const storyVideo = '/images/Comp 1.webm';

export const heroSlides = [
  {
    id: 'dua-alliance',
    published: true,
    order: 0,
    kind: 'story',
    label: 'DEMOCRACY UNION OF AFRICA · ACCRA, GHANA',
    title: 'Advancing democracy, freedom and prosperity across Africa.',
    lines: ['Advancing democracy, freedom', 'and prosperity across'],
    emphasis: 'Africa.',
    description:
      'Founded in 1997, the Democracy Union of Africa (DUA) is the continental alliance of over 25 centre-right political parties and the official African regional union of the International Democracy Union (IDU).',
    desktopMedia: {
      type: 'video',
      src: storyVideo,
      poster: '/images/dua-conference-01.jpg',
      position: 'center',
    },
    mobileMedia: null,
    cta: { label: 'Explore Our Priorities', href: '/priorities/' },
    duration: 12000,
    featuredMedia: {
      label: 'DUA FORUM HIGHLIGHTS',
      title: 'Democracy Union of Africa in Motion',
      type: 'video',
      src: storyVideo,
      thumbnail: '/images/dua-conference-01.jpg',
    },
  },
  {
    id: 'dua-forum-2026',
    published: true,
    order: 0.5,
    kind: 'story',
    photoLayout: true,
    label: 'FLAGSHIP CONVENING / DUA FORUM 2026',
    title: 'Charting Africa’s democratic future at DUA Forum 2026',
    lines: ['Strengthening centre-right', 'cooperation across'],
    emphasis: 'Africa.',
    description:
      'Building on the landmark Accra (2024) and Nairobi (2025) forums, DUA Forum 2026 brings together party chairpersons, parliamentarians, youth delegates, and international partners across the continent.',
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
    cta: { label: 'Explore DUA Forum 2026', href: '/events/dua-forum-2026/' },
    duration: 12000,
  },
  {
    id: 'tundu-lissu-statement',
    published: true,
    order: 0.75,
    kind: 'story',
    photoLayout: true,
    label: 'OFFICIAL STATEMENT / RULE OF LAW IN TANZANIA',
    title: 'DUA calls for the immediate release of Tundu Lissu',
    lines: ['Defending political freedom', 'and constitutional'],
    emphasis: 'due process.',
    description:
      'The Democracy Union of Africa strongly condemns the arrest and politically motivated treason charges against Tanzanian opposition leader and CHADEMA Chairperson Hon. Tundu Lissu.',
    desktopMedia: {
      type: 'image',
      src: '/images/free-tundu-lissu.jpeg',
      position: 'center 25%',
      alt: 'DUA official statement calling for the release of Hon. Tundu Lissu in Tanzania.',
    },
    mobileMedia: {
      type: 'image',
      src: '/images/free-tundu-lissu.jpeg',
      position: 'center 25%',
      alt: 'DUA official statement calling for the release of Hon. Tundu Lissu in Tanzania.',
    },
    cta: { label: 'Read Full Statement', href: '/news/tundu-lissu/' },
    duration: 12000,
  },
  {
    id: 'windhoek-resolutions',
    published: true,
    order: 1,
    kind: 'story',
    photoLayout: true,
    label: 'PUBLICATIONS · WINDHOEK 2026 RESOLUTIONS',
    title: 'Adopted Country Resolutions on Tanzania, Côte d’Ivoire and Uganda',
    lines: ['Principled advocacy.', 'Official country'],
    emphasis: 'resolutions.',
    description:
      'Read and download the official resolutions adopted at the DUA Windhoek Meeting addressing democratic governance, human rights, and regional security in Tanzania, Côte d’Ivoire, and Uganda.',
    desktopMedia: {
      type: 'image',
      src: '/images/3.webp',
      position: 'center',
      alt: 'Democracy Union of Africa Windhoek Resolutions session.',
    },
    mobileMedia: {
      type: 'image',
      src: '/images/3.webp',
      position: 'center',
      alt: 'Democracy Union of Africa Windhoek Resolutions session.',
    },
    cta: { label: 'Browse Publications & Resolutions', href: '/policy-briefs/' },
    duration: 12000,
  },
  {
    id: 'ct-masterclass-2026',
    published: true,
    order: 2,
    kind: 'story',
    photoLayout: true,
    label: 'PROGRAMME UPDATE · DUA × CT GROUP',
    title: '2026 Campaign & Electioneering Masterclass Series',
    lines: ['Building strong,', 'election-ready'],
    emphasis: 'parties.',
    description:
      'DUA and CT Group launch a comprehensive continental training programme to strengthen voter research, strategic communications, and campaign management across member parties.',
    desktopMedia: {
      type: 'image',
      src: '/images/ct-group.jpeg',
      position: 'center',
      alt: 'DUA and CT Group 2026 Campaign and Electioneering Masterclass Series.',
    },
    mobileMedia: {
      type: 'image',
      src: '/images/ct-group.jpeg',
      position: 'center',
      alt: 'DUA and CT Group 2026 Campaign and Electioneering Masterclass Series.',
    },
    cta: { label: 'Read Programme Update', href: '/news/ct-masterclass-2026/' },
    duration: 12000,
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
