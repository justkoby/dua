import { newsItems as rawNewsItems } from './data/news.ts';

export const duaContact = {
  organisation: 'Democracy Union of Africa (DUA)',
  shortName: 'DUA',
  tagline: 'Advancing democracy, freedom and prosperity across Africa.',
  subtitle: 'The African regional union of the International Democracy Union (IDU).',
  address: 'DUA Secretariat, Accra, Ghana',
  phone: '+233 24 196 7709',
  whatsappNumber: '233241967709',
  whatsappHref: 'https://wa.me/233241967709',
  email: 'info@democratunionofafrica.org',
  socials: {
    x: 'https://x.com/dua_africa',
    facebook: 'https://web.facebook.com/profile.php?id=100069232508908',
    instagram: 'https://www.instagram.com/democracyunionofafrica/',
  },
};

export const duaPriorities = [
  {
    id: 'democracy-electoral-integrity',
    number: '01',
    title: 'Democracy & Electoral Integrity',
    shortTitle: 'Electoral Integrity',
    tag: 'CONSTITUTIONALISM & FREE ELECTIONS',
    image: '/images/3.webp',
    summary:
      'Championing free, fair and transparent elections, independent electoral commissions, and the protection of constitutional term limits across Africa.',
    description:
      'DUA stands firmly for multiparty constitutional democracy, the rule of law, and credible electoral processes. Through joint observation missions, inter-party solidarity, and international advocacy alongside the International Democracy Union, we defend political pluralism and oppose unconstitutional changes of government.',
    pillars: [
      'Independent and transparent electoral management bodies',
      'Protection of constitutional order and presidential term limits',
      'Defense of opposition rights, freedom of assembly, and due process',
      'Peer-to-peer electioneering and campaign training for member parties',
    ],
  },
  {
    id: 'economic-freedom',
    number: '02',
    title: 'Economic Freedom & Enterprise',
    shortTitle: 'Economic Freedom',
    tag: 'FREE ENTERPRISE & INTRA-AFRICAN TRADE',
    image: '/images/8.webp',
    summary:
      'Promoting market-driven growth, private sector entrepreneurship, sound fiscal management, and the African Continental Free Trade Area (AfCFTA).',
    description:
      'Sustainable prosperity in Africa requires economic freedom, secure property rights, and thriving private enterprise. DUA brings together centre-right parties and policymakers to advance pro-investment reforms, reduce barriers to intra-African commerce, and create dignified jobs for Africa’s growing workforce.',
    pillars: [
      'Private-sector-led job creation and SME growth',
      'Accelerated implementation of the African Continental Free Trade Area (AfCFTA)',
      'Fiscal responsibility, monetary stability, and investment security',
      'Digital and energy infrastructure that powers continental enterprise',
    ],
  },
  {
    id: 'youth-political-leadership',
    number: '03',
    title: 'Youth Political Leadership',
    shortTitle: 'Youth Leadership',
    tag: 'NEXT-GENERATION DEMOCRATIC LEADERS',
    image: '/images/7.webp',
    summary:
      'Empowering young African political leaders through training academies, mentorship, and active decision-making roles within member parties.',
    description:
      'With the world’s youngest population, Africa’s democratic future rests on the shoulders of its youth. Working closely with the Youth Democrat Union of Africa (YDUA) and the International Young Democrat Union (IYDU), DUA equips emerging leaders with policy skills, campaign strategy, and continental networks.',
    pillars: [
      'YDUA continental youth leadership academies and policy fellowships',
      'Meaningful youth representation in party executives and parliament',
      'Campaign and strategic communication masterclasses for young candidates',
      'Cross-border exchange with global centre-right youth movements',
    ],
  },
  {
    id: 'women-in-governance',
    number: '04',
    title: 'Women in Governance',
    shortTitle: 'Women in Governance',
    tag: 'INCLUSIVE LEADERSHIP & REPRESENTATION',
    image: '/images/Pic 2.webp',
    summary:
      'Advancing women’s leadership in party structures, parliaments, and executive office across the African continent.',
    description:
      'Strong democracies require the full participation of women at every level of political and economic life. In partnership with the International Women’s Democracy Union (IWDU), DUA supports women candidates, party leaders, and officeholders across its member parties.',
    pillars: [
      'Pathways for women into senior party leadership and parliamentary office',
      'Mentorship and campaign readiness networks with IWDU',
      'Policies expanding women’s economic entrepreneurship and legal rights',
      'Visible female leadership across DUA’s continental executive',
    ],
  },
  {
    id: 'regional-cooperation',
    number: '05',
    title: 'Regional Cooperation & Global Partnerships',
    shortTitle: 'Regional Cooperation',
    tag: 'CONTINENTAL & INTERNATIONAL ALLIANCE',
    image: '/images/coorperation.png',
    summary:
      'Strengthening solidarity among African centre-right parties and connecting African voices to global democratic alliances.',
    description:
      'Founded in 1997 as the African regional union of the International Democracy Union, DUA bridges national political parties across West, East, Southern, Central, and North Africa with global partners including KAS, IDU, and sister regional unions.',
    pillars: [
      'Regular statutory forums, roundtables, and regional working groups',
      'Unified African centre-right voice within the International Democracy Union',
      'Strategic policy dialogue with international foundations and democratic allies',
      'Rapid diplomatic solidarity when member parties face political persecution',
    ],
  },
  {
    id: 'peace-accountable-governance',
    number: '06',
    title: 'Peace, Security & Accountable Governance',
    shortTitle: 'Peace & Accountability',
    tag: 'STABILITY, RULE OF LAW & ANTI-CORRUPTION',
    image: '/images/4.webp',
    summary:
      'Fostering political stability, anti-corruption institutions, judicial independence, and peaceful conflict resolution across Africa.',
    description:
      'Lasting peace and security depend on accountable institutions that serve citizens transparently. DUA works with member parties—both in government and in opposition—to strengthen parliamentary oversight, judicial independence, and democratic resilience against extremism and authoritarianism.',
    pillars: [
      'Judicial independence, parliamentary oversight, and anti-corruption frameworks',
      'Democratic resilience against coups, conflict, and external destabilisation',
      'Protection of civil liberties, press freedom, and human rights',
      'Constructive government-opposition dialogue grounded in constitutionalism',
    ],
  },
];

export const duaMemberParties = [
  { id: 'angola-unita', country: 'Angola', party: 'UNITA', fullName: 'The National Union for the Total Independence of Angola (UNITA)', region: 'Southern Africa', flag: 'https://flagcdn.com/w160/ao.png' },
  { id: 'equatorial-guinea-ucd', country: 'Equatorial Guinea', party: 'UCD', fullName: 'Unión de Centro Derecha (UCD)', region: 'Central Africa', flag: 'https://flagcdn.com/w160/gq.png' },
  { id: 'cote-divoire-pdci-rda', country: 'Ivory Coast', party: 'PDCI-RDA', fullName: 'Democratic Party of Ivory Coast – African Democratic Rally (PDCI-RDA)', region: 'West Africa', flag: 'https://flagcdn.com/w160/ci.png' },
  { id: 'ghana-npp', country: 'Ghana', party: 'New Patriotic Party (NPP)', fullName: 'New Patriotic Party (NPP)', region: 'West Africa', flag: 'https://flagcdn.com/w160/gh.png' },
  { id: 'kenya-dp', country: 'Kenya', party: 'Democratic Party (DP)', fullName: 'Democratic Party of Kenya (DP)', region: 'East Africa', flag: 'https://flagcdn.com/w160/ke.png' },
  { id: 'kenya-kanu', country: 'Kenya', party: 'KANU', fullName: 'Kenya African National Union (KANU)', region: 'East Africa', flag: 'https://flagcdn.com/w160/ke.png' },
  { id: 'liberia-up', country: 'Liberia', party: 'Unity Party (UP)', fullName: 'Unity Party (UP)', region: 'West Africa', flag: 'https://flagcdn.com/w160/lr.png' },
  { id: 'malawi-mcp', country: 'Malawi', party: 'Malawi Congress Party (MCP)', fullName: 'Malawi Congress Party (MCP)', region: 'Southern Africa', flag: 'https://flagcdn.com/w160/mw.png' },
  { id: 'morocco-istiqlal', country: 'Morocco', party: 'Istiqlal Party', fullName: 'Istiqlal Party', region: 'North Africa', flag: 'https://flagcdn.com/w160/ma.png' },
  { id: 'mozambique-renamo', country: 'Mozambique', party: 'RENAMO', fullName: 'Mozambican National Resistance (RENAMO)', region: 'Southern Africa', flag: 'https://flagcdn.com/w160/mz.png' },
  { id: 'mozambique-mdm', country: 'Mozambique', party: 'MDM', fullName: 'Movimento Democrático de Moçambique (MDM)', region: 'Southern Africa', flag: 'https://flagcdn.com/w160/mz.png' },
  { id: 'namibia-pdm', country: 'Namibia', party: 'Popular Democratic Movement (PDM)', fullName: 'Popular Democratic Movement (PDM)', region: 'Southern Africa', flag: 'https://flagcdn.com/w160/na.png' },
  { id: 'nigeria-pdp', country: 'Nigeria', party: 'Peoples Democratic Party (PDP)', fullName: 'Peoples Democratic Party (PDP)', region: 'West Africa', flag: 'https://flagcdn.com/w160/ng.png' },
  { id: 'south-africa-acdp', country: 'South Africa', party: 'ACDP', fullName: 'African Christian Democratic Party (ACDP)', region: 'Southern Africa', flag: 'https://flagcdn.com/w160/za.png' },
  { id: 'south-africa-ifp', country: 'South Africa', party: 'Inkatha Freedom Party (IFP)', fullName: 'Inkatha Freedom Party (IFP)', region: 'Southern Africa', flag: 'https://flagcdn.com/w160/za.png' },
  { id: 'tanzania-chadema', country: 'Tanzania', party: 'CHADEMA', fullName: 'Chama Cha Demokrasia na Maendeleo (CHADEMA)', region: 'East Africa', flag: 'https://flagcdn.com/w160/tz.png' },
  { id: 'uganda-dp', country: 'Uganda', party: 'Democratic Party (DP)', fullName: 'Democratic Party (DP)', region: 'East Africa', flag: 'https://flagcdn.com/w160/ug.png' },
  { id: 'uganda-fdc', country: 'Uganda', party: 'Forum for Democratic Change (FDC)', fullName: 'Forum for Democratic Change (FDC)', region: 'East Africa', flag: 'https://flagcdn.com/w160/ug.png' },
];

export const duaLeaders = [
  {
    id: 'louisa-atta-agyemang',
    name: 'Md Louisa Atta-Agyemang',
    role: 'Chairperson',
    group: 'Executive Officers',
    party: 'New Patriotic Party, Ghana',
    country: 'Ghana',
    image: '/images/Pic 2.webp',
    photo: '/images/Pic 2.webp',
    headshot: '/headshots/Louisa.png',
    summary:
      'Chairperson of the Democracy Union of Africa and the youngest leader elected to head the continental alliance, championing democratic resilience, youth empowerment, and centre-right cooperation across Africa.',
    bio: [
      'Md Louisa Atta-Agyemang serves as the Chairperson of the Democracy Union of Africa (DUA), the continental alliance of centre-right political parties and the African regional union of the International Democracy Union (IDU). Elected at the 2024 DUA Annual Forum in Accra, she made history as the youngest person ever elected to lead the Union.',
      'Before her election as DUA Chairperson, she served as President of the Youth Democrat Union of Africa (YDUA) and Deputy National Youth Organizer of Ghana’s New Patriotic Party (NPP), where she spearheaded continental leadership training and youth political engagement across African democracies.',
      'As Chairperson, she leads DUA’s diplomatic engagement, election observation initiatives, the 2026 Campaign and Electioneering Masterclass Series, and continental solidarity in defense of multiparty democracy, human rights, and economic freedom.',
    ],
  },
  {
    id: 'joy-reuben',
    name: 'Mr Joy Reuben',
    role: 'Secretary General',
    group: 'Executive Officers',
    party: 'Inkatha Freedom Party, South Africa',
    country: 'South Africa',
    image: '/headshots/Joy Reuben-01.png',
    photo: '/headshots/Joy Reuben-01.png',
    headshot: '/headshots/Joy Reuben-01.png',
    summary:
      'Secretary General of the Democracy Union of Africa, overseeing the DUA Secretariat, inter-party coordination, statutory forums, and programme execution across the continent.',
    bio: [
      'Mr Joy Reuben serves as the Secretary General of the Democracy Union of Africa (DUA), affiliated with the Inkatha Freedom Party (IFP) of South Africa, heading the operational coordination of the DUA Secretariat and its engagement with over 25 member and sister political parties across Africa.',
      'In this role, he coordinates DUA’s statutory meetings, annual forums, regional capacity-building programmes, and joint initiatives with the International Democracy Union (IDU), Konrad-Adenauer-Stiftung (KAS), and international democratic partners.',
    ],
  },
  {
    id: 'rafael-savimbi-massanga',
    name: 'Hon Rafael Savimbi Massanga',
    role: 'Deputy Chairman',
    group: 'Executive Officers',
    party: 'UNITA, Angola',
    country: 'Angola',
    image: '/images/Rafael Savimbi Massanga-01.webp',
    photo: '/images/Rafael Savimbi Massanga-01.webp',
    headshot: '/headshots/rafael.png',
    summary:
      'Deputy Chairman of the Democracy Union of Africa and senior leader within Angola’s National Union for the Total Independence of Angola (UNITA).',
    bio: [
      'Hon Rafael Savimbi Massanga serves as Deputy Chairman of the Democracy Union of Africa (DUA) and is a prominent parliamentarian and senior leader of the National Union for the Total Independence of Angola (UNITA).',
      'He brings extensive parliamentary and diplomatic experience to DUA’s Executive Committee, strengthening ties between Lusophone, Southern, and Central African centre-right movements and advocating for constitutional governance and electoral transparency.',
    ],
  },
  {
    id: 'leonor-elisa-lopes-de-sousa',
    name: 'Md Leonor Elisa Lopes De Sousa',
    role: 'Treasurer',
    group: 'Executive Officers',
    party: 'Democratic Movement of Mozambique',
    country: 'Mozambique',
    image: '/images/Leonor Elisa Lopes De Sousa-01.webp',
    photo: '/images/Leonor Elisa Lopes De Sousa-01.webp',
    headshot: '/headshots/Elisa.png',
    summary:
      'Treasurer of the Democracy Union of Africa, representing the Democratic Movement of Mozambique on the DUA Executive Committee.',
    bio: [
      'Md Leonor Elisa Lopes De Sousa serves as Treasurer of the Democracy Union of Africa (DUA), overseeing institutional stewardship and governance accountability within the Union’s Executive Committee.',
      'Representing the Democratic Movement of Mozambique, she contributes to DUA’s work on democratic governance, women’s political participation, and Lusophone African political cooperation.',
    ],
  },
  {
    id: 'rahhal-el-makkaoui',
    name: 'Mr. Rahhal El Makkaoui',
    role: 'Vice-Chair for North Africa',
    group: 'Regional Vice-Chairs',
    party: 'Istiqlal Party, Morocco',
    country: 'Morocco',
    image: '/images/Rahhal El Makkaoui-01.webp',
    photo: '/images/Rahhal El Makkaoui-01.webp',
    headshot: '/headshots/rahhal.png',
    summary:
      'Vice-Chair for North Africa of the Democracy Union of Africa representing Morocco’s historic Istiqlal Party and advancing North African and continental diplomatic cooperation.',
    bio: [
      'Mr. Rahhal El Makkaoui serves as Vice-Chair for North Africa of the Democracy Union of Africa (DUA) and is a senior international relations leader within Morocco’s Istiqlal Party.',
      'He plays a key role in connecting North African centre-right perspectives with sub-Saharan sister parties, fostering dialogue on regional stability, economic integration, and parliamentary diplomacy.',
    ],
  },
  {
    id: 'deogratias-munishi',
    name: 'Mr. Deogratias Munishi',
    role: 'Vice-Chair for East Africa',
    group: 'Regional Vice-Chairs',
    party: 'CHADEMA, Tanzania',
    country: 'Tanzania',
    image: '/images/Deogratias Munishi-01.webp',
    photo: '/images/Deogratias Munishi-01.webp',
    headshot: '/headshots/Deogratias-01.png',
    summary:
      'Vice-Chair for East Africa of the Democracy Union of Africa and international secretary within Tanzania’s CHADEMA, advocating for electoral reforms and civil liberties in East Africa.',
    bio: [
      'Mr. Deogratias Munishi serves as Vice-Chair for East Africa of the Democracy Union of Africa (DUA), representing Tanzania’s Chama Cha Demokrasia na Maendeleo (CHADEMA).',
      'An experienced advocate for multiparty democracy and constitutional reform in East Africa, he works closely with DUA and international partners to defend political freedoms, independent electoral institutions, and human rights.',
    ],
  },
  {
    id: 'samuel-anyanwu',
    name: 'Sen. Samuel Anyanwu',
    role: 'Vice Chair for West Africa',
    group: 'Regional Vice-Chairs',
    party: 'Peoples Democratic Party, Nigeria',
    country: 'Nigeria',
    image: '/images/Samuel Anyanwu-01.webp',
    photo: '/images/Samuel Anyanwu-01.webp',
    headshot: '/headshots/Samuel Anyanwu-01.png',
    summary:
      'Vice Chair for West Africa of the Democracy Union of Africa and Nigerian Senator contributing legislative and party-building experience across West Africa.',
    bio: [
      'Sen. Samuel Anyanwu serves as Vice Chair for West Africa of the Democracy Union of Africa (DUA), representing the Peoples Democratic Party (PDP) of Nigeria and bringing senior legislative and party organisation experience to DUA’s continental leadership.',
      'Within DUA, he supports West African inter-party dialogue, democratic institution-building, and regional cooperation.',
    ],
  },
  {
    id: 'linette-olofsson',
    name: 'Md. Linette Olofsson',
    role: 'Vice Chair for Southern Africa',
    group: 'Regional Vice-Chairs',
    party: 'Democratic Movement, Mozambique',
    country: 'Southern Africa',
    image: '/images/Linette Olofsson-01.webp',
    photo: '/images/Linette Olofsson-01.webp',
    headshot: '/headshots/linette-01.png',
    summary:
      'Vice Chair for Southern Africa of the Democracy Union of Africa advancing inclusive governance and institutional strengthening across the region.',
    bio: [
      'Md. Linette Olofsson serves as Vice Chair for Southern Africa of the Democracy Union of Africa (DUA), contributing to the Union’s regional coordination in Southern Africa and championing women’s political empowerment and democratic accountability.',
    ],
  },
  {
    id: 'avelino-mocache-mehenga',
    name: 'Md. Avelino Mocache Mehenga',
    role: 'Vice Chair for Central Africa',
    group: 'Regional Vice-Chairs',
    party: 'Unión de Centro Derecha (UCD), Equatorial Guinea',
    country: 'Equatorial Guinea',
    image: '/images/Avelino Mocache Mehenga-01.webp',
    photo: '/images/Avelino Mocache Mehenga-01.webp',
    headshot: '/headshots/Avelino-01.png',
    summary:
      'Vice Chair for Central Africa of the Democracy Union of Africa, representing Unión de Centro Derecha (UCD) of Equatorial Guinea and advocating for political pluralism.',
    bio: [
      'Md. Avelino Mocache Mehenga serves as Vice Chair for Central Africa of the Democracy Union of Africa (DUA), representing Unión de Centro Derecha (UCD) in Equatorial Guinea and working to advance political openness, human rights, and multiparty dialogue.',
    ],
  },
];

export const duaPartners = [
  {
    id: 'idu',
    name: 'International Democracy Union (IDU)',
    logo: '/images/idu.webp',
    url: 'https://www.idu.org/',
    caption:
      'The global alliance of over 80 centre-right political parties. DUA serves as the official African regional union of the IDU.',
  },
  {
    id: 'kas',
    name: 'Konrad-Adenauer-Stiftung (KAS)',
    logo: '/images/konrad.png',
    url: 'https://www.kas.de/',
    caption:
      'Strategic German political foundation partner supporting DUA forums, policy publications, and democratic capacity building across Africa.',
  },
  {
    id: 'ydua',
    name: 'Youth Democrat Union of Africa (YDUA)',
    logo: '/images/ydua.png',
    url: 'https://www.idu.org/',
    caption:
      'The official youth wing of DUA, uniting and training the next generation of young centre-right political leaders across the continent.',
  },
  {
    id: 'iydu',
    name: 'International Young Democrat Union (IYDU)',
    logo: '/images/iydu.png',
    url: 'https://www.iydu.org/',
    caption:
      'Global alliance of centre-right political youth organisations working closely with YDUA and DUA member party youth wings.',
  },
  {
    id: 'iwdu',
    name: 'International Women’s Democracy Union (IWDU)',
    logo: '/images/iwdu.jpg',
    url: 'https://www.idu.org/',
    caption:
      'Global network advancing women’s leadership, representation, and policy voice across centre-right parties worldwide.',
  },
];

// Normalize dates and structure from DUA's existing news.ts
const monthMap = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
};

function parseDuaDate(dateStr) {
  const s = String(dateStr || '').trim();
  // Format 1: "April 10, 2025"
  const m1 = s.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  if (m1) {
    const month = monthMap[m1[1]] || '01';
    const day = String(m1[2]).padStart(2, '0');
    return `${m1[3]}-${month}-${day}`;
  }
  // Format 2: "12 August 2026"
  const m2 = s.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
  if (m2) {
    const month = monthMap[m2[2]] || '01';
    const day = String(m2[1]).padStart(2, '0');
    return `${m2[3]}-${month}-${day}`;
  }
  return '2026-01-31';
}

function blocksToParagraphs(body, fallbackSummary = '') {
  if (typeof body === 'string') {
    return body
      .split(/\n\s*\n/)
      .map(p => p.trim())
      .filter(Boolean);
  }
  if (Array.isArray(body) && body.length > 0) {
    const out = [];
    for (const block of body) {
      if (!block) continue;
      if (typeof block === 'string') {
        out.push(block);
      } else if (block.type === 'ul' && Array.isArray(block.items)) {
        for (const li of block.items) {
          out.push(`• ${li}`);
        }
      } else if (block.text) {
        out.push(block.text);
      }
    }
    return out;
  }
  return fallbackSummary ? [fallbackSummary] : [];
}

function blocksToHtml(body, fallbackSummary = '') {
  if (typeof body === 'string') {
    return body
      .split(/\n\s*\n/)
      .map(p => p.trim())
      .filter(Boolean)
      .map(p => `<p>${p.replace(/\n/g, '<br/>')}</p>`)
      .join('\n');
  }
  if (Array.isArray(body) && body.length > 0) {
    return body
      .map(block => {
        if (!block) return '';
        if (typeof block === 'string') return `<p>${block}</p>`;
        if (block.type === 'h2') return `<h2>${block.text || ''}</h2>`;
        if (block.type === 'quote') return `<blockquote>${block.text || ''}</blockquote>`;
        if (block.type === 'ul' && Array.isArray(block.items)) {
          return `<ul>${block.items.map(li => `<li>${li}</li>`).join('')}</ul>`;
        }
        return `<p>${block.text || ''}</p>`;
      })
      .filter(Boolean)
      .join('\n');
  }
  return fallbackSummary ? `<p>${fallbackSummary}</p>` : '';
}

const fallbackImageBySlug = {
  'angola-political-violence': '/images/3.webp',
  'npp-flagbearer-election': '/images/5-01.webp',
  'youth-leadership-program': '/images/7.webp',
};

export const duaNewsItems = rawNewsItems.map(item => {
  const isoDate = parseDuaDate(item.date);
  const summaryText = item.summary || item.excerpt || '';
  const paragraphs = blocksToParagraphs(item.body, summaryText);
  const html = blocksToHtml(item.body, summaryText);
  const plainWords = paragraphs.join(' ').split(/\s+/).filter(Boolean).length;
  const localImage =
    !item.image || item.image.startsWith('https://placehold.co')
      ? fallbackImageBySlug[item.slug] || '/images/dua-conference-01.jpg'
      : item.image;

  return {
    id: item.slug,
    slug: item.slug,
    title: item.title,
    summary: summaryText,
    excerpt: summaryText,
    category: item.category,
    country: item.country || 'Africa',
    publishedOn: isoDate,
    publishedAt: `${isoDate}T12:00:00Z`,
    dateLabel: item.date,
    dateline: item.datelineLocation || item.dateline || `${(item.country || 'Accra, Ghana').toUpperCase()}`,
    spokesperson: item.spokesperson || 'Md Louisa Atta-Agyemang, Chairperson, DUA',
    authorName: item.spokesperson || 'Democracy Union of Africa Secretariat',
    image: localImage,
    imageAlt: item.title,
    featured: Boolean(item.featured),
    documentUrl: item.documentUrl || null,
    link: item.link || null,
    readMinutes: Math.max(2, Math.round(plainWords / 180)),
    body: paragraphs,
    rawBody: paragraphs.join('\n\n'),
    html: item.documentUrl
      ? `${html}<p><strong>Official Document:</strong> <a href="${item.documentUrl}" download>Download original resolution (.docx)</a></p>`
      : html,
  };
});

export const duaPublications = [
  {
    id: 'resolution-tanzania-r6',
    issue: 'RES-2026-01',
    slug: 'resolution-tanzania-tundu-lissu-2026',
    date: '28 October 2026',
    datetime: '2026-10-28',
    pages: 2,
    topic: 'Democratic Governance & Human Rights · Tanzania',
    title: 'Resolution on Tundu Lissu’s Politically Motivated Treason Case and Political Persecution in Tanzania',
    summary:
      'Endorsed by DUA Vice Chairman Deogratias Munishi on October 28, 2026 in Windhoek, Namibia, demanding the immediate and unconditional release of Tundu Lissu and over 65 CHADEMA leaders and members.',
    takeaways: [
      'Strongly condemns the unjustified prolonged arbitrary detention of CHADEMA leader Hon. Tundu Lissu.',
      'Demands the immediate and unconditional release of Tundu Lissu and full respect for his legal and medical rights.',
      'Calls upon authorities in Tanzania to drop all terrorism and treason charges against more than 65 CHADEMA leaders and members.',
    ],
    note: 'Endorsed by DUA Vice Chairman Deogratias Munishi on 28 October 2026 in Windhoek, Namibia.',
    documentUrl: '/publications/Tanzania R6.docx',
    fileUrl: '/publications/Tanzania R6.docx',
    downloadName: 'Tanzania R6.docx',
    coverImage: '/images/free-tundu-lissu.jpeg',
    fullText:
      duaNewsItems.find(n => n.slug === 'resolution-tanzania-tundu-lissu-2026')?.body || [],
  },
  {
    id: 'resolution-ivory-coast-2026',
    issue: 'RES-2026-02',
    slug: 'resolution-ivory-coast-2026',
    date: '25 October 2026',
    datetime: '2026-10-25',
    pages: 2,
    topic: 'Political Pluralism & Electoral Reform · Ivory Coast',
    title: 'Resolution on Political Persecution and the Deterioration of Democracy in Ivory Coast',
    summary:
      'Endorsed by the DUA Board on October 25, 2026 in Windhoek, Namibia, calling for verifiable safety guarantees for PDCI-RDA leader Hon. Tidjane Thiam, the release of detained opposition members, and comprehensive electoral reforms.',
    takeaways: [
      'Calls for specific and verifiable safety guarantees enabling PDCI-RDA leader Hon. Tidjane Thiam and exiled members to return and operate freely.',
      'Demands the immediate and unconditional release of more than 750 PDCI-RDA leaders and members detained on politically motivated grounds.',
      'Supports comprehensive electoral reforms to guarantee free, fair, transparent, and inclusive elections in Ivory Coast.',
    ],
    note: 'Endorsed by the DUA Board on 25 October 2026 in Windhoek, Namibia.',
    documentUrl: '/publications/[v2] Ivory Coast 26.docx',
    fileUrl: '/publications/[v2] Ivory Coast 26.docx',
    downloadName: '[v2] Ivory Coast 26.docx',
    coverImage: '/images/dua-conference-01.jpg',
    fullText:
      duaNewsItems.find(n => n.slug === 'resolution-ivory-coast-2026')?.body || [],
  },
  {
    id: 'resolution-uganda-2026',
    issue: 'RES-2026-03',
    slug: 'resolution-uganda-besigye-2026',
    date: '25 October 2026',
    datetime: '2026-10-25',
    pages: 2,
    topic: 'Rule of Law & Fundamental Freedoms · Uganda',
    title: 'Resolution on the Continued Detention of Dr Kizza Besigye and the Deterioration of Democracy in Uganda',
    summary:
      'Endorsed by the DUA Board on October 25, 2026 in Windhoek, Namibia, calling upon Ugandan authorities to drop politically motivated charges against former DUA Chairman Dr Kizza Besigye, release him unconditionally, and end political persecution.',
    takeaways: [
      'Calls upon Ugandan authorities to drop politically motivated terrorism charges against former DUA Chairman Dr Kizza Besigye and release him immediately.',
      'Demands immediate access to adequate and safe medical care for Dr Kizza Besigye in detention.',
      'Strongly condemns abductions, enforced disappearances, and persecution of opposition leaders, members, and media in Uganda.',
    ],
    note: 'Endorsed by the DUA Board on 25 October 2026 in Windhoek, Namibia.',
    documentUrl: '/publications/[v2] Uganda.docx',
    fileUrl: '/publications/[v2] Uganda.docx',
    downloadName: '[v2] Uganda.docx',
    coverImage: '/images/4.webp',
    fullText:
      duaNewsItems.find(n => n.slug === 'resolution-uganda-besigye-2026')?.body || [],
  },
];

export const duaCommentaries = [
  {
    id: 'milestone',
    slug: 'milestone',
    title: 'Historic Milestone: Louisa Atta-Agyemang Elected Youngest Chairperson of the Democracy Union of Africa',
    summary:
      'At the 2024 DUA Forum in Accra, Louisa Atta-Agyemang made history as the youngest Chairperson ever elected to lead the continental centre-right alliance, ushering in a new era of youth-inclusive leadership.',
    topic: 'Leadership & Governance',
    category: 'Leadership & Governance',
    tags: ['Leadership', 'Youth in Politics', 'Women in Governance', 'Accra Forum'],
    authors: ['DUA Editorial Desk'],
    authorName: 'DUA Editorial Desk',
    date: '2024-08-12',
    publishedAt: '2024-08-12T12:00:00Z',
    image: '/images/louisa-atta-agyemang-dua-chairperson-01.webp',
    imageAlt: 'Md Louisa Atta-Agyemang elected Chairperson of the Democracy Union of Africa',
    readMinutes: 4,
    html: `
      <p>The Democracy Union of Africa (DUA) achieved a historic milestone during its 2024 Annual Forum in Accra, Ghana, with the election of <strong>Md Louisa Atta-Agyemang</strong> as Chairperson — making her the youngest leader ever elected to head the continental alliance of centre-right political parties.</p>
      <h2>A Generational Shift in African Political Leadership</h2>
      <p>Representing Ghana’s New Patriotic Party (NPP) and having previously served with distinction as President of the Youth Democrat Union of Africa (YDUA), Louisa Atta-Agyemang’s election signals a bold commitment by African centre-right parties to place young leaders and women at the forefront of continental decision-making.</p>
      <p>Delegates from across West, East, Southern, Central, and North Africa gathered in Accra alongside international partners from the International Democracy Union (IDU) and Konrad-Adenauer-Stiftung (KAS) to chart a renewed strategic vision for democratic resilience and economic opportunity.</p>
      <blockquote>“Our generation cannot merely be observers or foot soldiers in African politics. We must build strong, accountable political parties that defend constitutionalism, champion free enterprise, and deliver real opportunity for Africa’s citizens.” — Md Louisa Atta-Agyemang, Chairperson of DUA</blockquote>
      <h2>Priorities for the New Mandate</h2>
      <p>Under Chairperson Atta-Agyemang’s leadership, the DUA Executive Committee has outlined six strategic priorities:</p>
      <ul>
        <li><strong>Defending Electoral Integrity & Constitutionalism:</strong> Standing with member parties to protect multiparty democracy, independent electoral bodies, and civil liberties.</li>
        <li><strong>Professionalising Party Campaigns:</strong> Launching continental training initiatives such as the Campaign and Electioneering Masterclass Series to strengthen policy communication and voter engagement.</li>
        <li><strong>Empowering Youth & Women:</strong> Expanding pathways for young people and women into parliamentary and executive leadership across all 25+ member parties.</li>
        <li><strong>Championing Economic Freedom:</strong> Advancing private-sector growth, property rights, and intra-African trade under the AfCFTA framework.</li>
      </ul>
      <p>Her election was welcomed across the global IDU network as an inspiring testament to the vitality of centre-right democracy on the African continent.</p>
    `,
  },
  {
    id: 'driving-democracy',
    slug: 'driving-democracy',
    title: 'Democracy Union of Africa: Driving Democracy, Stability and Free Enterprise Across the Continent',
    summary:
      'Founded in 1997, the Democracy Union of Africa unites over 25 centre-right political parties committed to constitutional rule, individual liberty, and market-led prosperity.',
    topic: 'Democracy & Institutions',
    category: 'Democracy & Institutions',
    tags: ['Democracy', 'Free Enterprise', 'Continental Alliance', 'IDU'],
    authors: ['DUA Secretariat'],
    authorName: 'DUA Secretariat',
    date: '2025-02-15',
    publishedAt: '2025-02-15T12:00:00Z',
    image: '/images/dua-conference-01.jpg',
    imageAlt: 'Delegates at the Democracy Union of Africa Forum',
    readMinutes: 5,
    html: `
      <p>Across the African continent, the struggle to consolidate constitutional democracy and deliver shared economic prosperity requires strong, values-based political institutions. Since its founding in <strong>1997</strong>, the <strong>Democracy Union of Africa (DUA)</strong> has served as the premier continental platform uniting centre-right political parties dedicated to political freedom, the rule of law, and free enterprise.</p>
      <h2>The African Pillar of the Global Centre-Right</h2>
      <p>Headquartered in Accra, Ghana, DUA serves as the official African regional union of the <strong>International Democracy Union (IDU)</strong>. Bringing together more than 25 member and observer parties across Francophone, Anglophone, Lusophone, and Arabic-speaking Africa, DUA bridges national political movements into a cohesive continental network.</p>
      <p>Whether serving in government—shaping national economic and institutional reforms—or standing in opposition as guardians of constitutional accountability, DUA member parties share a foundational conviction: that sustainable development flourishes only where political liberty and economic freedom reinforce one another.</p>
      <h2>Why Inter-Party Solidarity Matters Today</h2>
      <p>At a time when democratic norms face pressure from unconstitutional changes of government, electoral manipulation, and restrictions on civic space, DUA provides three indispensable functions:</p>
      <ul>
        <li><strong>Diplomatic Solidarity & Early Warning:</strong> Through official statements, Windhoek and Accra resolutions, and joint missions, DUA elevates the voices of democratic leaders facing persecution and holds governments accountable to African Union and international human rights standards.</li>
        <li><strong>Policy Exchange & Convening:</strong> The flagship <strong>DUA Annual Forum</strong> brings together party leaders, heads of state, parliamentarians, scholars, and international partners to craft practical centre-right policy responses to security, trade, and governance challenges.</li>
        <li><strong>Capacity Building:</strong> In partnership with organisations such as the Konrad-Adenauer-Stiftung (KAS), IDU, YDUA, and CT Group, DUA equips party secretariats, youth wings, and women’s networks with modern organisational and campaign tools.</li>
      </ul>
      <p>As DUA prepares for the <strong>DUA Forum 2026</strong>, the Union remains steadfast in its founding mission: building a freer, more stable, and more prosperous Africa.</p>
    `,
  },
  ...duaNewsItems.slice(0, 4).map(item => ({
    id: item.slug,
    slug: item.slug,
    title: item.title,
    summary: item.summary,
    topic: item.category === 'Publications' ? 'Resolutions & Policy' : 'Official Statements',
    category: item.category === 'Publications' ? 'Resolutions & Policy' : 'Official Statements',
    tags: [item.category, item.dateline],
    authors: [item.spokesperson],
    authorName: item.spokesperson,
    date: item.publishedOn,
    publishedAt: item.publishedAt,
    image: item.image,
    imageAlt: item.title,
    readMinutes: item.readMinutes,
    html: item.html,
  })),
];

export const duaEvents = [
  {
    id: 'womens-conference-2026',
    slug: 'womens-conference-2026',
    status: 'published',
    timing: 'past',
    category: 'International Conference',
    format: 'In-person Continental Conference',
    title: 'DUA Women’s Conference 2026: Women Working Together for Political Power, Progress and Prosperity',
    summary:
      'Convened at the Windhoek Country Club, Namibia, bringing together centre-right women legislators, party executives, and global leaders featuring Special Guest of Honour H.E. Lady Samira Bawumia.',
    dateLabel: '25 – 28 October 2026 · Windhoek, Namibia',
    startDate: '2026-10-25',
    endDate: '2026-10-28',
    time: '4-Day Continental Assembly',
    location: 'Windhoek, Namibia',
    venue: 'Oryx 2 Hall, Windhoek Country Club and Resort, Windhoek, Namibia',
    image: '/images/events/dua-womens-conference-2026/delegates-group-wide.png',
    imageAlt: 'Delegates assembled at the DUA Women’s Conference 2026 in Windhoek, Namibia',
    registrationNote:
      'This landmark conference concluded on 28 October 2026. Explore the complete conference gallery, panel recordings, and adopted Windhoek resolutions.',
    registrationEmailSubject: 'Enquiry — DUA Women’s Conference 2026 Proceedings',
    highlights: [
      'Keynote Address by Special Guest of Honour H.E. Lady Samira R. Bawumia (Second Lady of Ghana)',
      'High-Level Panel 2: Holding the Line: Centre-Right Women on Security, Sovereignty and the Fight Against Extremism',
      'High-Level Panel 3: Women-Led Economic Development — From Commitment to Action',
      'Conferment of the DUA Woman of Courage Award 2026 on H.E. Ellen Johnson Sirleaf',
      'Adoption of three official DUA country resolutions on Tanzania, Côte d’Ivoire, and Uganda',
    ],
  },
  {
    id: 'dua-forum-2026',
    slug: 'dua-forum-2026',
    status: 'published',
    timing: 'date-tba',
    category: 'Flagship Annual Convening',
    format: 'In-person Continental Forum',
    title: 'DUA Forum 2026: Strengthening Centre-Right Cooperation and Democratic Resilience in Africa',
    summary:
      'The flagship annual gathering of the Democracy Union of Africa, uniting party leaders, parliamentarians, policymakers, youth delegates, and international partners from over 25 African countries.',
    dateLabel: '2026 · Dates & Host City to Be Announced',
    startDate: null,
    endDate: null,
    time: 'Multi-day Statutory & Policy Forum',
    location: 'Host city to be announced · Africa',
    venue: 'Official venue details will be communicated to accredited delegates upon confirmation of the host city.',
    image: '/images/dua-conference-01.jpg',
    imageAlt: 'Delegates at the Democracy Union of Africa Annual Forum',
    registrationNote:
      'Official dates and host city for DUA Forum 2026 will be announced by the DUA Secretariat. Member party delegations, international observers, and partners may register their interest with the Secretariat in Accra.',
    registrationEmailSubject: 'DUA Forum 2026 — Expression of Interest',
    highlights: [
      'High-level Leaders’ Plenary featuring Chairpersons and Secretaries-General of DUA member parties',
      'Thematic roundtables on electoral integrity, AfCFTA trade integration, and regional security',
      'Youth Democrat Union of Africa (YDUA) and Women’s Leadership caucuses',
      'Adoption of the 2026 Continental Declarations and Country Resolutions',
    ],
    agenda: [
      {
        day: 'Day 1',
        title: 'Executive Committee Meeting & Opening Plenary',
        detail: 'Statutory session of the DUA Executive Officers and Regional Vice-Chairs, followed by the Opening Ceremony and Keynote Addresses.',
      },
      {
        day: 'Day 2',
        title: 'Policy Panels, Country Reports & Strategic Roundtables',
        detail: 'Working sessions on Democracy & Electoral Integrity, Economic Freedom, Youth & Women in Governance, and adoption of official DUA Resolutions.',
      },
      {
        day: 'Day 3',
        title: 'Bilateral Diplomatic Meetings & Closing Communiqué',
        detail: 'Inter-party bilateral exchanges with IDU, KAS, and international delegations, concluding with the Joint Communiqué.',
      },
    ],
  },
  {
    id: 'ct-group-masterclass-2026',
    slug: 'ct-group-masterclass-2026',
    status: 'published',
    timing: 'past',
    category: 'Capacity Building & Training',
    format: 'Continental Training Series',
    title: '2026 Campaign & Electioneering Masterclass Series (DUA × CT Group)',
    summary:
      'A multi-session strategic training programme launched in January 2026 by DUA and CT Group to strengthen voter research, messaging discipline, and campaign management across DUA member parties.',
    dateLabel: 'Launched 31 January 2026',
    startDate: '2026-01-31',
    endDate: '2026-01-31',
    time: 'Continental Hybrid / Modular Programme',
    location: 'Accra, Ghana & Virtual Continental Sessions',
    venue: 'Coordinated by the DUA Secretariat in partnership with CT Group',
    image: '/images/ct-group.jpeg',
    imageAlt: 'DUA and CT Group 2026 Campaign and Electioneering Masterclass Series',
    registrationNote:
      'Launched in January 2026 for designated campaign directors, communications leads, and youth/women organisers nominated by DUA member parties.',
    registrationEmailSubject: 'Enquiry — DUA × CT Group Masterclass Series',
    highlights: [
      'Strategic voter research and issue-based polling methodology',
      'Disciplined campaign communications and digital mobilisation',
      'Coalition building, polling-agent coordination, and electoral results tracking',
    ],
    agenda: [
      {
        day: 'Module 1',
        title: 'Research-Driven Strategy & Voter Insights',
        detail: 'Translating demographic and constituency priorities into clear, persuasive centre-right policy platforms.',
      },
      {
        day: 'Module 2',
        title: 'Message Discipline & Crisis Communications',
        detail: 'Structuring national campaign narratives and rapid-response communications during competitive election cycles.',
      },
    ],
  },
  {
    id: 'dua-forum-2025-nairobi',
    slug: 'dua-forum-2025-nairobi',
    status: 'published',
    timing: 'past',
    category: 'Past Annual Forum',
    format: 'In-person Continental Forum',
    title: 'DUA Forum 2025: Navigating Africa’s Strategic Position in a Multipolar World',
    summary:
      'Held in Nairobi, Kenya, the 2025 DUA Annual Forum convened political leaders, parliamentarians, and international partners to examine Africa’s geopolitical agency, democratic governance, and economic sovereignty.',
    dateLabel: '2025 · Nairobi, Kenya',
    startDate: '2025-07-15',
    endDate: '2025-07-17',
    time: 'Concluded Forum',
    location: 'Nairobi, Kenya',
    venue: 'Nairobi, Kenya (Hosted in partnership with Konrad-Adenauer-Stiftung)',
    image: '/images/2.webp',
    imageAlt: 'DUA Forum 2025 in Nairobi, Kenya',
    registrationNote: 'This forum has concluded. Explore official statements and resolutions from DUA’s recent convenings.',
    registrationEmailSubject: 'Enquiry — DUA Forum 2025 Nairobi Proceedings',
    highlights: [
      'Theme: Navigating Africa’s Strategic Position in a Multipolar World',
      'High-level dialogues on African foreign policy, security partnerships, and trade alliances',
      'Strengthened coordination among East, West, Southern, Central, and North African member parties',
    ],
    agenda: [
      {
        day: 'Session I',
        title: 'Africa in a Multipolar International Order',
        detail: 'Aligning strategic partnerships with democratic values, institutional accountability, and national sovereignty.',
      },
      {
        day: 'Session II',
        title: 'Electoral Integrity & Opposition Resilience',
        detail: 'Sharing lessons from recent African election cycles and strengthening solidarity mechanisms.',
      },
    ],
  },
  {
    id: 'dua-forum-2024-accra',
    slug: 'dua-forum-2024-accra',
    status: 'published',
    timing: 'past',
    category: 'Past Annual Forum & Electoral Congress',
    format: 'In-person Continental Forum',
    title: 'DUA Forum 2024: Strengthening Democratic Institutions for Political Stability — Crafting Africa’s Response',
    summary:
      'Hosted in Accra, Ghana on August 8, 2024, where delegates adopted key democratic stability recommendations and elected Md Louisa Atta-Agyemang as Chairperson of DUA.',
    dateLabel: '8 August 2024 · Accra, Ghana',
    startDate: '2024-08-08',
    endDate: '2024-08-09',
    time: 'Concluded Forum',
    location: 'Accra, Ghana',
    venue: 'Accra, Ghana',
    image: '/images/3.webp',
    imageAlt: 'DUA Forum 2024 in Accra, Ghana',
    registrationNote: 'This forum has concluded. Read our milestone article on the 2024 Accra Forum and Executive elections.',
    registrationEmailSubject: 'Enquiry — DUA Forum 2024 Accra Report',
    highlights: [
      'Theme: Strengthening Democratic Institutions for Political Stability: Crafting Africa’s Response',
      'Historic election of Md Louisa Atta-Agyemang as the youngest Chairperson of DUA',
      'Election of the current DUA Executive Officers and Regional Vice-Chairs',
    ],
    agenda: [
      {
        day: 'Plenary',
        title: 'Strengthening Democratic Institutions for Political Stability',
        detail: 'Addressing unconstitutional changes of government, judicial independence, and citizen trust in governance.',
      },
      {
        day: 'Congress',
        title: 'Statutory General Assembly & Executive Elections',
        detail: 'Election and swearing-in of DUA Chairperson, Secretary General, Deputy Chairperson, Treasurer, and Vice-Chairs.',
      },
    ],
  },
];
