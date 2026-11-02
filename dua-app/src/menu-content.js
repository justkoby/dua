import { page } from './content.js';

export const megaGroups = [
  {
    id: 'about',
    label: 'About DUA',
    intro: 'Africa’s centre-right alliance since 1997.',
    description:
      'Founded in 1997 and headquartered in Accra, Ghana, DUA is the official African regional union of the International Democracy Union (IDU).',
    feature: {
      image: '/images/dua-conference-01.jpg',
      alt: 'Delegates at the Democracy Union of Africa Annual Forum',
      label: 'About the Democracy Union of Africa',
      href: '/who-we-are/',
    },
    columns: [
      {
        label: 'THE UNION',
        links: [
          ['Who we are', '/who-we-are/'],
          ['Mission & vision', '/who-we-are/#mission'],
          ['Chairperson’s message', '/who-we-are/#chairperson-message'],
          ['Our values', '/who-we-are/#values'],
          ['Global Network & Partners', '/partners/'],
        ],
      },
      {
        label: 'LEADERSHIP & PARTIES',
        links: [
          ['All Leadership (9)', '/leadership/'],
          ['Executive Officers', '/executive-leadership/'],
          ['Regional Vice-Chairs', '/advisory-council/'],
          ['Member Parties Directory', '/member-parties/'],
        ],
      },
    ],
  },
  {
    id: 'priorities',
    label: 'Our Priorities',
    intro: 'Six pillars for a freer, stronger Africa.',
    description:
      'Explore the six foundational centre-right priorities guiding DUA’s policy dialogue, election observation, and inter-party solidarity.',
    feature: {
      image: '/images/3.webp',
      alt: 'Democracy Union of Africa policy session',
      label: 'Explore all 6 DUA priorities',
      href: '/priorities/',
    },
    columns: [
      {
        label: 'CORE DEMOCRATIC PILLARS',
        links: [
          ['All 6 Priorities', '/priorities/'],
          ['01 · Democracy & Electoral Integrity', '/priorities/#democracy-electoral-integrity'],
          ['02 · Economic Freedom & Enterprise', '/priorities/#economic-freedom'],
          ['06 · Peace & Accountable Governance', '/priorities/#peace-accountable-governance'],
        ],
      },
      {
        label: 'INCLUSION & COOPERATION',
        links: [
          ['03 · Youth Political Leadership', '/priorities/#youth-political-leadership'],
          ['04 · Women in Governance', '/priorities/#women-in-governance'],
          ['05 · Regional Cooperation & IDU', '/priorities/#regional-cooperation'],
        ],
      },
    ],
  },
  {
    id: 'members',
    label: 'Member Parties',
    intro: 'Over 25 sister parties across Africa.',
    description:
      'Connecting governing and opposition centre-right political parties across West, East, Southern, Central, and North Africa.',
    feature: {
      image: '/images/coorperation.png',
      alt: 'DUA continental member party cooperation',
      label: 'Browse Member Parties Directory',
      href: '/member-parties/',
    },
    columns: [
      {
        label: 'CONTINENTAL DIRECTORY',
        links: [
          ['All Member Parties (18+ Countries)', '/member-parties/'],
          ['West & North Africa (Ghana, Ivory Coast, Cabo Verde, Morocco)', '/member-parties/'],
          ['East & Central Africa (Kenya, Tanzania, Uganda, DRC)', '/member-parties/'],
          ['Southern Africa (Angola, Namibia, South Africa, Mozambique)', '/member-parties/'],
        ],
      },
      {
        label: 'GLOBAL NETWORK',
        links: [
          ['International Democracy Union (IDU)', '/partners/#idu'],
          ['Konrad-Adenauer-Stiftung (KAS)', '/partners/#kas'],
          ['Youth Democrat Union of Africa (YDUA)', '/partners/#ydua'],
          ['IYDU & IWDU Networks', '/partners/'],
        ],
      },
    ],
  },
  {
    id: 'leadership',
    label: 'Leadership',
    intro: 'Elected leaders across five regions.',
    description:
      'Led by Chairperson Md Louisa Atta-Agyemang and Secretary General Mr Joy Reuben alongside Executive Officers and Regional Vice-Chairs.',
    feature: {
      image: '/images/Pic 2.webp',
      alt: 'Md Louisa Atta-Agyemang, Chairperson of DUA',
      label: 'Chairperson Md Louisa Atta-Agyemang',
      href: '/people/louisa-atta-agyemang/',
    },
    columns: [
      {
        label: 'EXECUTIVE OFFICERS',
        links: [
          ['Md Louisa Atta-Agyemang · Chairperson', '/people/louisa-atta-agyemang/'],
          ['Mr Joy Reuben · Secretary General', '/people/joy-reuben/'],
          ['Hon Rafael Savimbi Massanga · Deputy Chair', '/people/rafael-savimbi-massanga/'],
          ['Md Leonor Elisa Lopes De Sousa · Treasurer', '/people/leonor-elisa-lopes-de-sousa/'],
        ],
      },
      {
        label: 'REGIONAL VICE-CHAIRS',
        links: [
          ['Mr. Rahhal El Makkaoui (Morocco)', '/people/rahhal-el-makkaoui/'],
          ['Mr. Deogratias Munishi (Tanzania)', '/people/deogratias-munishi/'],
          ['Sen. Samuel Anyanwu (Nigeria)', '/people/samuel-anyanwu/'],
          ['Md. Linette Olofsson & Md. Avelino Mocache', '/advisory-council/'],
        ],
      },
    ],
  },
  {
    id: 'news',
    label: 'News & Publications',
    intro: 'Statements, resolutions and forums.',
    description:
      'Official statements from the DUA Chairperson, downloadable Windhoek 2026 Country Resolutions (.docx), commentaries, and DUA Forum updates.',
    feature: {
      image: '/images/free-tundu-lissu.jpeg',
      alt: 'DUA statement on Tundu Lissu',
      label: 'Statement on Tundu Lissu (Tanzania)',
      href: '/news/tundu-lissu/',
    },
    columns: [
      {
        label: 'STATEMENTS & PUBLICATIONS',
        links: [
          ['All News & Official Statements', '/news/'],
          ['Publications & Windhoek Resolutions (.docx)', '/policy-briefs/'],
          ['Commentaries & Articles', '/blog/'],
          ['Tundu Lissu Release Statement', '/news/tundu-lissu/'],
        ],
      },
      {
        label: 'FORUMS & PROGRAMMES',
        links: [
          ['DUA Forum 2026 (Flagship Convening)', '/events/dua-forum-2026/'],
          ['2026 CT Group Campaign Masterclass', '/news/ct-masterclass-2026/'],
          ['All Events & Past Forums (Nairobi & Accra)', '/events/'],
        ],
      },
    ],
  },
  {
    id: 'engage',
    label: 'Engage & Contact',
    intro: 'Connect with the Accra Secretariat.',
    description:
      'Collaborate with the Democracy Union of Africa on forums, institutional partnerships, speaker invitations, and delegation accreditation.',
    columns: [
      {
        label: 'COLLABORATE WITH DUA',
        links: [
          ['Partner with DUA', page('partner-with-us')],
          ['Support a Forum or Programme', page('sponsor-a-programme')],
          ['Invite a DUA Speaker', '/invite-a-speaker/'],
          ['Pathways & Network Overview', '/opportunities/'],
        ],
      },
      {
        label: 'SECRETARIAT CONTACT',
        links: [
          ['All ways to engage', '/engage/'],
          ['Contact DUA Secretariat (Accra)', page('contact')],
          ['Register DUA Forum 2026 Interest', '/events/dua-forum-2026/'],
          ['Email: info@democratunionofafrica.org', 'mailto:info@democratunionofafrica.org'],
        ],
      },
    ],
  },
];
