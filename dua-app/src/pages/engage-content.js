export const engageServices = [
  {
    id: 'partnership',
    path: '/partner-with-us/',
    label: 'INSTITUTIONAL PARTNERSHIPS',
    title: 'Partner with DUA',
    summary:
      'Collaborate with the Democracy Union of Africa on democratic governance, election observation, inter-party dialogue, and policy research across Africa.',
    cta: 'Start a partnership enquiry',
    heading: ['Strengthening democracy', 'through strategic alliance.'],
    body:
      'DUA partners with international political foundations, sister regional unions within the International Democracy Union (IDU), policy institutes, and diplomatic missions to advance constitutionalism, electoral integrity, and free enterprise across Africa.',
    related: { label: 'View our Global Network & Partners', href: '/partners/' },
    focus: [
      {
        title: 'Continental Forums & Policy Roundtables',
        text: 'Co-convening high-level dialogues bringing together party leaders, parliamentarians, and policy experts.',
      },
      {
        title: 'Democratic Capacity & Election Readiness',
        text: 'Supporting training academies for member party secretariats, youth wings (YDUA), and women’s networks.',
      },
      {
        title: 'Joint Research & Resolutions',
        text: 'Collaborating on policy publications, electoral assessments, and democratic governance briefings.',
      },
    ],
    brief: [
      'Your organisation or political foundation and primary contact',
      'The country, region, or thematic priority of interest',
      'Proposed format and timeline for collaboration',
    ],
  },
  {
    id: 'sponsorship',
    path: '/sponsor-a-programme/',
    label: 'FORUM & PROGRAMME SUPPORT',
    title: 'Support a Forum or Programme',
    summary:
      'Support flagship initiatives such as DUA Forum 2026, regional leadership academies, or the Campaign & Electioneering Masterclass Series.',
    cta: 'Enquire about programme support',
    heading: ['Investing in resilient', 'democratic institutions.'],
    body:
      'From the flagship DUA Annual Forum to regional youth and women’s leadership academies, programme partnerships enable delegates from over 25 African countries to convene, exchange best practices, and build accountable political institutions.',
    related: { label: 'Explore DUA Forum 2026', href: '/events/dua-forum-2026/' },
    focus: [
      {
        title: 'DUA Forum 2026 Sessions & Delegations',
        text: 'Supporting thematic plenaries, country roundtables, and delegate participation at the Annual Forum.',
      },
      {
        title: 'Youth & Women Leadership Academies',
        text: 'Backing continental training workshops for emerging political leaders and women candidates.',
      },
      {
        title: 'Policy Publications & Translation',
        text: 'Supporting the publication and English/French/Portuguese dissemination of DUA resolutions and reports.',
      },
    ],
    brief: [
      'The programme or forum of interest (e.g., DUA Forum 2026)',
      'Your institutional objectives and geographic focus',
      'Preferred timeline for a discussion with the DUA Secretariat',
    ],
  },
  {
    id: 'speaker',
    path: '/invite-a-speaker/',
    label: 'DIPLOMATIC & MEDIA ENGAGEMENT',
    title: 'Invite a DUA Leader or Speaker',
    summary:
      'Invite Chairperson Md Louisa Atta-Agyemang, Secretary General Mr Joy Reuben, or DUA Executive Officers to address conferences, parliamentary hearings, or media briefings.',
    cta: 'Submit a speaker request',
    heading: ['Principled African centre-right', 'perspectives on the global stage.'],
    body:
      'DUA’s Executive Officers and Regional Vice-Chairs regularly contribute to international conferences, IDU forums, parliamentary briefings, and media discussions on African elections, constitutional governance, youth leadership, and economic freedom.',
    related: { label: 'Meet DUA Executive Leadership', href: '/leadership/' },
    focus: [
      {
        title: 'Multiparty Democracy & Electoral Integrity',
        text: 'First-hand insights on election observation, opposition rights, and constitutional governance in Africa.',
      },
      {
        title: 'Youth & Women in African Politics',
        text: 'Perspectives on generational renewal and inclusive leadership across African political parties.',
      },
      {
        title: 'Free Enterprise & Geopolitics',
        text: 'Centre-right approaches to AfCFTA trade integration, investment security, and international partnerships.',
      },
    ],
    brief: [
      'Event name, host organisation, date, and location (or virtual format)',
      'Requested speaker (or thematic area) and audience profile',
      'Format (keynote, panel, diplomatic briefing, or media interview)',
    ],
  },
];

export const engageTopics = [
  { id: 'general', label: 'General Secretariat Enquiry', subject: 'DUA Secretariat Enquiry' },
  { id: 'forum-2026', label: 'DUA Forum 2026 Accreditation / Interest', subject: 'DUA Forum 2026 — Expression of Interest' },
  { id: 'partnership', label: 'Institutional Partnership', subject: 'DUA Institutional Partnership Proposal' },
  { id: 'sponsorship', label: 'Programme or Forum Support', subject: 'DUA Programme & Forum Support Enquiry' },
  { id: 'speaker', label: 'Speaker or Media Request', subject: 'DUA Speaker / Media Invitation' },
  { id: 'membership', label: 'Member Party Affiliation', subject: 'DUA Member Party Affiliation Enquiry' },
];

export const contactDepartments = [
  {
    title: 'DUA Secretariat (Headquarters)',
    description: 'Official correspondence, Executive Committee communications, and inter-party coordination in Accra, Ghana.',
    emails: ['info@democratunionofafrica.org'],
    phone: '+233 24 196 7709',
    address: 'DUA Secretariat, Accra, Ghana',
  },
  {
    title: 'DUA Forum 2026 & Events Desk',
    description: 'Delegation expressions of interest, observer accreditation, and forum partnership enquiries.',
    emails: ['info@democratunionofafrica.org'],
    phone: '+233 24 196 7709',
    address: 'Accra, Ghana · Continental Convenings',
  },
  {
    title: 'Press, Statements & Publications',
    description: 'Media interviews, official statements from the Chairperson, and requests for Windhoek/Accra resolutions.',
    emails: ['info@democratunionofafrica.org'],
    phone: '+233 24 196 7709',
    address: 'Communications Desk · DUA Secretariat',
  },
];

export const archivedVacancies = [];

export function getEngageService(id) {
  return engageServices.find(item => item.id === id);
}

export function draftErrors(values) {
  const errors = {};
  if (!values.name?.trim()) errors.name = 'Enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email?.trim() ?? '')) errors.email = 'Enter a valid email address.';
  if (!values.message?.trim()) errors.message = 'Add a short message.';
  return errors;
}

export function createEnquiryDraft(topicId, values = {}) {
  const topic = engageTopics.find(item => item.id === topicId) ?? engageTopics[0];
  const oneLine = value => String(value ?? '').trim().replace(/[\r\n]+/g, ' ');
  const body = `Name: ${oneLine(values.name)}\nEmail: ${oneLine(values.email)}\nOrganisation / Party: ${oneLine(values.organisation)}\n\n${String(values.message ?? '').trim()}`;
  return {
    subject: topic.subject,
    body,
    href: `mailto:info@democratunionofafrica.org?subject=${encodeURIComponent(topic.subject)}&body=${encodeURIComponent(body)}`,
  };
}

