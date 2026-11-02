// Minimal serverless Gemini API proxy for the Democracy Union of Africa (DUA) Assistant.
// Never exposes GEMINI_API_KEY to the browser.
// Environment variables:
//   GEMINI_API_KEY - Google AI Studio / Gemini API key (server-side only)
//   GEMINI_MODEL   - Optional model override (defaults to "gemini-2.5-flash")

const DUA_SYSTEM_CONTEXT = `You are the official AI Assistant for the Democracy Union of Africa (DUA) website (democratunionofafrica.org).
Always distinguish AI-generated summaries from official DUA statements, and direct users to the relevant DUA pages.

APPROVED DUA FACTS & SITE CONTENT:
1. Identity & History:
   - Full Name: Democracy Union of Africa (DUA).
   - Founded: 1997.
   - Headquarters: DUA Secretariat, Accra, Ghana.
   - Contact: info@democratunionofafrica.org | Phone & WhatsApp: +233 24 196 7709.
   - Global Affiliation: Official African regional union of the International Democracy Union (IDU), uniting over 25 centre-right and like-minded political parties across West, East, Southern, Central, and North Africa.

2. Executive Leadership (elected at the August 2024 DUA Forum in Accra):
   - Chairperson: Md Louisa Atta-Agyemang (New Patriotic Party, Ghana) — youngest Chairperson ever elected to lead DUA; former President of YDUA.
   - Secretary General: Mr Joy Reuben (DUA Secretariat).
   - Deputy Chairperson: Hon Rafael Savimbi Massanga (UNITA, Angola).
   - Treasurer: Md Leonor Elisa Lopes De Sousa (MpD, Cabo Verde).
   - Regional Vice-Chairs:
     * Mr. Rahhal El Makkaoui (Istiqlal Party, Morocco)
     * Mr. Deogratias Munishi (CHADEMA, Tanzania)
     * Sen. Samuel Anyanwu (Nigeria)
     * Md. Linette Olofsson (PDM, Namibia)
     * Md. Avelino Mocache Mehenga (Equatorial Guinea)

3. Six Core Priorities (/priorities/):
   - 01: Democracy & Electoral Integrity
   - 02: Economic Freedom & Enterprise (supporting market growth and AfCFTA)
   - 03: Youth Political Leadership (with YDUA and IYDU)
   - 04: Women in Governance (with IWDU)
   - 05: Regional Cooperation & Global Partnerships (with IDU and Konrad-Adenauer-Stiftung)
   - 06: Peace, Security & Accountable Governance

4. Member Parties (/member-parties/):
   - Over 25 sister parties across Africa, including UNITA (Angola), MpD (Cabo Verde), RHDP (Ivory Coast), UDPS (DR Congo), PPGE (Equatorial Guinea), New Patriotic Party - NPP (Ghana), UDA & Democratic Party (Kenya), Basotho National Party (Lesotho), Malawi Congress Party (Malawi), Istiqlal Party (Morocco), RENAMO (Mozambique), PDM (Namibia), Nigerian centre-right affiliates, ADI (São Tomé and Príncipe), LDS (Seychelles), Inkatha Freedom Party - IFP (South Africa), CHADEMA (Tanzania), and Forum for Democratic Change - FDC (Uganda).

5. Official Statements, Publications & Windhoek Resolutions (/news/ and /policy-briefs/):
   - Statement on Tanzania (10 April 2025): DUA calls for the immediate and unconditional release of CHADEMA Chairperson Hon. Tundu Lissu (/news/tundu-lissu/).
   - Windhoek Resolution on Tanzania R6 (18 October 2026): Condemns political repression, abductions, and treason charges against Tundu Lissu (/news/resolution-tanzania-r6/, downloadable .docx at /publications/Tanzania R6.docx).
   - Windhoek Resolution on Côte d’Ivoire (18 October 2026): Commends President Alassane Ouattara and the RHDP on macroeconomic growth (~7% GDP growth), infrastructure, and counter-terrorism leadership (/news/resolution-ivory-coast-2026/, downloadable .docx at /publications/[v2] Ivory Coast 26.docx).
   - Windhoek Resolution on Uganda (18 October 2026): Condemns military court trials of civilians and detention of Dr. Kizza Besigye, standing with the FDC (/news/resolution-uganda-2026/, downloadable .docx at /publications/[v2] Uganda.docx).
   - Angola Statement (12 November 2025): On Angola's 50th independence anniversary, DUA calls for protection of freedom of assembly (/news/angola-50-years/).
   - Ghana NPP Statement (31 January 2026): DUA congratulates Ghana's NPP on its peaceful presidential primaries electing Dr. Mahamudu Bawumia as flagbearer (/news/ghana-npp-primaries/).
   - Programme Update (31 January 2026): DUA and CT Group launch the 2026 Campaign and Electioneering Masterclass Series (/news/ct-masterclass-2026/).

6. Forums & Events (/events/):
   - DUA Forum 2026 (/events/dua-forum-2026/): Flagship annual convening; host city and dates to be announced; delegations can register interest with the Secretariat.
   - Past Forums: DUA Forum 2025 in Nairobi, Kenya ("Navigating Africa's Strategic Position in a Multipolar World") and DUA Forum 2024 in Accra, Ghana (August 8, 2024, "Strengthening Democratic Institutions for Political Stability: Crafting Africa's Response").
`;

const DEMO_KNOWLEDGE = [
  {
    match: ['what is dua', 'who we are', 'about dua', 'founded', 'history', 'idu', 'mission', 'vision'],
    reply:
      'The Democracy Union of Africa (DUA) was founded in 1997 as the continental alliance of centre-right and like-minded political parties in Africa, and serves as the official African regional union of the International Democracy Union (IDU). Headquartered in Accra, Ghana, DUA unites over 25 political parties dedicated to multiparty democracy, the rule of law, human rights, and free-market enterprise.',
    sources: [
      { label: 'Who We Are', href: '/who-we-are/' },
      { label: 'Mission & Vision', href: '/our-mission-vision/' },
      { label: 'Global Network & Partners', href: '/partners/' },
    ],
  },
  {
    match: ['leader', 'chairperson', 'louisa', 'joy reuben', 'savimbi', 'executive', 'vice-chair', 'treasurer'],
    reply:
      'DUA is led by Chairperson Md Louisa Atta-Agyemang (NPP, Ghana)—the youngest Chairperson ever elected to head the Union—alongside Secretary General Mr Joy Reuben, Deputy Chairperson Hon Rafael Savimbi Massanga (UNITA, Angola), and Treasurer Md Leonor Elisa Lopes De Sousa (MpD, Cabo Verde). Five Regional Vice-Chairs represent North, East, West, Southern, and Central Africa: Mr. Rahhal El Makkaoui (Morocco), Mr. Deogratias Munishi (Tanzania), Sen. Samuel Anyanwu (Nigeria), Md. Linette Olofsson (Namibia), and Md. Avelino Mocache Mehenga (Equatorial Guinea).',
    sources: [
      { label: 'Executive Leadership Directory', href: '/leadership/' },
      { label: 'Chairperson Md Louisa Atta-Agyemang', href: '/people/louisa-atta-agyemang/' },
      { label: 'Milestone Feature Article', href: '/blog/milestone/' },
    ],
  },
  {
    match: ['member', 'parties', 'countries', 'ghana', 'kenya', 'angola', 'namibia', 'morocco', 'south africa', 'ivory coast'],
    reply:
      'DUA unites over 25 centre-right and like-minded sister parties across five African regions, including NPP (Ghana), UNITA (Angola), RHDP (Ivory Coast), CHADEMA (Tanzania), UDA & DP (Kenya), FDC (Uganda), MpD (Cabo Verde), Istiqlal Party (Morocco), PDM (Namibia), IFP (South Africa), RENAMO (Mozambique), MCP (Malawi), LDS (Seychelles), UDPS (DR Congo), ADI (São Tomé and Príncipe), BNP (Lesotho), and PPGE (Equatorial Guinea).',
    sources: [
      { label: 'Member Parties Directory', href: '/member-parties/' },
      { label: 'Global Network (IDU, KAS, YDUA)', href: '/partners/' },
    ],
  },
  {
    match: ['statement', 'resolution', 'windhoek', 'tanzania', 'tundu lissu', 'uganda', 'besigye', 'angola', 'publications', 'docx'],
    reply:
      'DUA’s recent official releases include the Statement calling for the immediate release of CHADEMA Chairperson Hon. Tundu Lissu in Tanzania, statements on Angola’s 50th Independence Anniversary and Ghana’s NPP Primaries, and three official Windhoek 2026 Resolutions (on Tanzania R6, Côte d’Ivoire, and Uganda), all available to read online and download as official .docx documents.',
    sources: [
      { label: 'Publications & Windhoek Resolutions (.docx)', href: '/policy-briefs/' },
      { label: 'Statement on Tundu Lissu (Tanzania)', href: '/news/tundu-lissu/' },
      { label: 'All News & Official Statements', href: '/news/' },
    ],
  },
  {
    match: ['forum', 'event', '2026', 'nairobi', 'accra', 'masterclass', 'ct group', 'register'],
    reply:
      'DUA Forum 2026 is the upcoming flagship annual convening of the Democracy Union of Africa (host city and official dates to be announced). Delegations and partners can register early interest with the Secretariat. DUA also launched the 2026 Campaign & Electioneering Masterclass Series with CT Group in January 2026, following past Annual Forums in Nairobi (2025) and Accra (2024).',
    sources: [
      { label: 'DUA Forum 2026 Overview', href: '/events/dua-forum-2026/' },
      { label: '2026 CT Group Masterclass Series', href: '/news/ct-masterclass-2026/' },
      { label: 'All Events & Past Forums', href: '/events/' },
    ],
  },
  {
    match: ['priority', 'priorities', 'pillar', 'economic', 'youth', 'women', 'peace', 'electoral'],
    reply:
      'DUA’s work is organised around six core strategic priorities: (01) Democracy & Electoral Integrity, (02) Economic Freedom & Enterprise, (03) Youth Political Leadership, (04) Women in Governance, (05) Regional Cooperation & Global Partnerships, and (06) Peace, Security & Accountable Governance.',
    sources: [
      { label: 'Our 6 Priorities', href: '/priorities/' },
      { label: 'Driving Democracy in Africa', href: '/blog/driving-democracy/' },
    ],
  },
  {
    match: ['contact', 'email', 'phone', 'whatsapp', 'secretariat', 'partner', 'location'],
    reply:
      'You can reach the DUA Secretariat in Accra, Ghana via email at info@democratunionofafrica.org or by phone/WhatsApp at +233 24 196 7709. You can also use the enquiry composer on our Contact page.',
    sources: [
      { label: 'Contact the DUA Secretariat', href: '/contact/' },
      { label: 'Engage & Partner with DUA', href: '/engage/' },
    ],
  },
];

export function buildDemoAnswer(question = '') {
  const q = String(question || '').toLowerCase();
  for (const item of DEMO_KNOWLEDGE) {
    if (item.match.some(keyword => q.includes(keyword))) {
      return {
        mode: 'demo',
        reply: item.reply,
        sources: item.sources,
        disclaimer:
          'Demo Mode (Official DUA Site Knowledge): GEMINI_API_KEY is not configured in this environment. This summary is generated from approved DUA website content and is distinct from formal DUA Executive statements.',
      };
    }
  }
  return {
    mode: 'demo',
    reply:
      'The Democracy Union of Africa (DUA), founded in 1997 and headquartered in Accra, Ghana, is the continental alliance of over 25 centre-right political parties and the African regional union of the International Democracy Union (IDU). You can explore our leadership, member parties, six strategic priorities, Windhoek 2026 resolutions, and DUA Forum 2026 using the links below.',
    sources: [
      { label: 'Who We Are', href: '/who-we-are/' },
      { label: 'Our Priorities', href: '/priorities/' },
      { label: 'News & Official Statements', href: '/news/' },
      { label: 'Publications & Resolutions', href: '/policy-briefs/' },
      { label: 'Contact the Secretariat', href: '/contact/' },
    ],
    disclaimer:
      'Demo Mode (Official DUA Site Knowledge): GEMINI_API_KEY is not configured in this environment. This summary is generated from approved DUA website content and is distinct from formal DUA Executive statements.',
  };
}

export async function handleChatRequest(body = {}, env = process.env) {
  const question = String(body?.question || body?.message || body?.messages?.at?.(-1)?.content || '').trim();
  if (!question) {
    return {
      status: 400,
      payload: { error: 'Please enter a question about the Democracy Union of Africa.' },
    };
  }

  const apiKey = env?.GEMINI_API_KEY;
  const model = env?.GEMINI_MODEL || 'gemini-2.5-flash';

  if (!apiKey) {
    return {
      status: 200,
      payload: buildDemoAnswer(question),
    };
  }

  try {
    const history = Array.isArray(body?.messages) ? body.messages.slice(-8) : [];
    const contents = history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: String(msg.content || '').slice(0, 2000) }],
    }));
    if (!contents.length || contents.at(-1).role !== 'user') {
      contents.push({ role: 'user', parts: [{ text: question.slice(0, 2000) }] });
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: DUA_SYSTEM_CONTEXT }],
        },
        contents,
        generationConfig: {
          temperature: 0.25,
          maxOutputTokens: 700,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API returned status ${response.status}`);
    }

    const data = await response.json();
    const text =
      data?.candidates?.[0]?.content?.parts
        ?.map(part => part.text)
        .filter(Boolean)
        .join('\n')
        .trim() || '';

    if (!text) {
      throw new Error('Gemini returned an empty response.');
    }

    const fallbackSources = buildDemoAnswer(question).sources;
    return {
      status: 200,
      payload: {
        mode: 'live',
        reply: text,
        sources: fallbackSources,
        disclaimer:
          'AI-generated response grounded on DUA site content. For formal positions, always refer to official DUA statements and adopted resolutions.',
      },
    };
  } catch (error) {
    return {
      status: 502,
      payload: {
        error: 'The live Gemini service could not be reached right now. You can retry or browse our official pages.',
      },
    };
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  let parsedBody = req.body;
  if (!parsedBody || typeof parsedBody === 'string') {
    try {
      parsedBody = JSON.parse(parsedBody || '{}');
    } catch {
      parsedBody = {};
    }
  }

  const result = await handleChatRequest(parsedBody, process.env);
  res.statusCode = result.status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(result.payload));
}
