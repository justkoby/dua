import { page, resources } from './content.js';
import { partners } from './partners.js';

export const homepageDefaults = {
  discovery: {
    eyebrow: 'EXPLORE THE DEMOCRACY UNION OF AFRICA',
    text: 'Search official statements, Windhoek resolutions, member parties, leadership and DUA Forum 2026.',
    button: 'What would you like to explore?',
  },
  about: {
    eyebrow: '01 / WHO WE ARE',
    heading: ['Advancing democracy.', 'Building prosperity.'],
    lead: 'Founded in 1997, the Democracy Union of Africa is the premier continental alliance of centre-right parties.',
    paragraphs: [
      'Headquartered in Accra and affiliated with the IDU, DUA connects over 25 political parties to advance constitutional democracy, free enterprise, and good governance across Africa.',
    ],
    cta: { label: 'About DUA', href: '/who-we-are/' },
  },
  convening: {
    image: { src: '/images/Pic 2.webp' },
    alt: 'Md Louisa Atta-Agyemang, Chairperson of the Democracy Union of Africa',
    caption: 'Md Louisa Atta-Agyemang · Elected Youngest Chairperson of DUA at the Accra Forum',
    eyebrow: 'CHAIRPERSON’S MESSAGE',
    heading: ['A new generation of', 'centre-right leadership.'],
    text: 'Under Chairperson Md Louisa Atta-Agyemang, DUA strengthens electoral integrity, stands with persecuted democrats, and expands youth and women’s leadership across Africa.',
    cta: { label: 'Read Chairperson’s Profile', href: '/who-we-are/#chairperson-message' },
  },
  activity: {
    eyebrow: 'LATEST FROM DUA / STATEMENTS & RESOLUTIONS',
    heading: ['Principled voices.', 'Across the continent.'],
    intro: ['Official statements from the Chairperson, Windhoek resolutions', 'and continental programme updates.'],
    lead: 'resolution-tanzania-tundu-lissu-2026',
    cards: ['angola-political-violence', 'ct-masterclass-2026', 'npp-flagbearer-election'],
  },
  people: {
    eyebrow: 'EXECUTIVE LEADERSHIP',
    heading: ['Elected leaders.', 'One shared'],
    emphasis: 'mandate.',
    text: 'Meet the executive leadership elected to steer the Democracy Union of Africa across all five sub-regions.',
    cta: { label: 'Meet All Leaders', href: '/leadership/' },
    scrollHint: 'Scroll to meet DUA’s executive leadership',
  },
  focus: {
    eyebrow: '02 / OUR PRIORITIES',
    heading: ['Six strategic pillars.', 'One democratic union.'],
    intro: ['From constitutionalism and electoral integrity', 'to free enterprise and youth empowerment.'],
    cards: [
      {
        title: 'Democracy & Electoral Integrity',
        line: 'Defend free & fair elections.',
        text: 'Championing multiparty constitutionalism, independent electoral commissions, term limits, and opposition rights across Africa.',
        href: '/priorities/#democracy-electoral-integrity',
      },
      {
        title: 'Economic Freedom & Enterprise',
        line: 'Unlock market-led growth.',
        text: 'Promoting private sector entrepreneurship, secure property rights, fiscal discipline, and intra-African trade under the AfCFTA.',
        href: '/priorities/#economic-freedom',
      },
      {
        title: 'Youth & Women in Governance',
        line: 'Empower the next generation.',
        text: 'Training young political leaders and advancing women’s representation in party structures, parliaments, and executive office.',
        href: '/priorities/#youth-political-leadership',
      },
    ],
  },
  engagement: {
    image: { src: '/images/dua-conference-01.jpg' },
    alt: 'Delegates at the Democracy Union of Africa Annual Forum',
    eyebrow: 'FLAGSHIP CONVENING · DUA FORUM 2026',
    heading: ['Where Africa’s centre-right', 'leaders shape the future.'],
    text: 'The DUA Annual Forum brings together party chairpersons, heads of delegation, parliamentarians, scholars, and global partners from over 25 countries to coordinate continental strategy and adopt official resolutions.',
    cta: { label: 'Explore DUA Forum 2026', href: '/events/dua-forum-2026/' },
  },
  research: {
    eyebrow: '03 / PUBLICATIONS & RESOLUTIONS',
    heading: ['Adopted resolutions', 'and policy perspectives.'],
    cta: { label: 'Browse all publications (.docx)', href: '/policy-briefs/' },
    items: [
      {
        eyebrow: 'WINDHOEK 2026 RESOLUTIONS (.DOCX)',
        heading: ['Official country resolutions:', 'Tanzania, Côte d’Ivoire & Uganda.'],
        text: 'Read and download the official Word (.docx) resolutions adopted at the DUA Windhoek Meeting on democratic rights, economic growth, and regional security.',
        cta: 'Open Publications & Resolutions',
        href: '/policy-briefs/',
      },
      {
        eyebrow: 'COMMENTARIES & FEATURES',
        heading: ['Driving democracy and', 'stability across Africa.'],
        text: 'Read our feature articles on Chairperson Louisa Atta-Agyemang’s historic election and DUA’s continental mission.',
        cta: 'Read commentaries',
        href: '/blog/',
      },
    ],
  },
  programmes: {
    eyebrow: '04 / CONTINENTAL INITIATIVES',
    heading: ['Principles into action.', 'Parties into'],
    emphasis: 'government.',
    text: 'Discover the flagship forums, campaign masterclasses, and youth leadership academies strengthening centre-right political parties across Africa.',
    cta: { label: 'Explore events & initiatives', href: '/events/' },
    items: resources
      .filter(r => r.type === 'Programme')
      .map(({ title, description, url }) => ({ title, description, url })),
  },
  opportunities: {
    eyebrow: '05 / MEMBER PARTIES & PATHWAYS',
    heading: ['Connect with the', 'continental network.'],
    cta: { label: 'View Member Parties Directory', href: '/member-parties/' },
    intro: 'Explore how sister political parties, youth wings (YDUA), women’s networks (IWDU), and international partners collaborate with DUA.',
    note: 'DUA Secretariat · Accra, Ghana · Official African regional union of the International Democracy Union (IDU).',
    noteLink: { label: 'Explore YDUA Youth Leadership', href: '/remote-internship-programme-rip/' },
  },
  partners: {
    eyebrow: 'GLOBAL NETWORK & STRATEGIC ALLIES',
    heading: 'Our international network.',
    cta: { label: 'Explore our global network', href: '/partners/' },
    items: partners.map(p => ({ id: p.id, visible: true })),
  },
  connect: {
    eyebrow: 'BUILDING A BRIGHTER FUTURE FOR AFRICA TOGETHER',
    heading: ['Defending democracy.'],
    emphasis: 'Advancing freedom.',
    arrowHref: page('contact'),
    arrowLabel: 'Contact the Democracy Union of Africa Secretariat',
    text: ['Connect with the DUA Secretariat in Accra, Ghana', 'for inter-party cooperation, forums and partnerships.'],
    cta: { label: 'Contact the Secretariat', href: page('contact') },
  },
};
