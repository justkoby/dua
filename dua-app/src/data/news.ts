export type NewsCategory =
  | 'Statements'
  | 'Press Releases'
  | 'News'
  | 'Speeches'
  | 'Opinion'
  | 'Events'
  | 'Media Coverage'
  | 'Programme Updates'

export interface NewsBlock {
  type: 'p' | 'h2' | 'ul' | 'quote'
  text?: string
  items?: string[]
}

export interface NewsItem {
  slug: string
  category: NewsCategory
  country: string
  date: string
  title: string
  summary: string
  image: string
  link?: string // for items that live on a blog route
  featured?: boolean
  body?: NewsBlock[]
  spokesperson?: string
}

export const categoryColors: Record<NewsCategory, string> = {
  Statements: '#4682B4',
  'Press Releases': '#c0392b',
  News: '#d4a017',
  Speeches: '#6f42c1',
  Opinion: '#17a2b8',
  Events: '#28a745',
  'Media Coverage': '#fd7e14',
  'Programme Updates': '#0E6655',
}

export const newsItems: NewsItem[] = [
  {
    slug: 'tundu-lissu',
    category: 'Statements',
    country: 'Tanzania',
    date: '12 August 2026',
    title: 'DUA Calls for the Immediate Release of Tundu Lissu',
    summary:
      'The Democracy Union of Africa calls for the immediate release of Tanzanian opposition leader Tundu Lissu and urges authorities to uphold due process, political freedom and democratic rights.',
    image: '/images/free-tundu-lissu.jpeg',
    featured: true,
    spokesperson: 'Communications Office, Democracy Union of Africa',
    body: [
      { type: 'p', text: 'The Democracy Union of Africa calls for the immediate and unconditional release of Tanzanian opposition leader and CHADEMA Chairperson, Tundu Lissu, as his treason trial resumes before the High Court of Tanzania.' },
      { type: 'h2', text: 'DUA expresses renewed concern over Lissu\u2019s detention and prosecution' },
      { type: 'p', text: 'The Democracy Union of Africa (DUA) is deeply concerned by the continued detention and prosecution of Hon. Tundu Lissu, Chairperson of Tanzania\u2019s opposition Party for Democracy and Progress, CHADEMA.' },
      { type: 'p', text: 'Mr Lissu has remained in custody since April 2025 after being charged with treason following his calls for electoral and constitutional reforms. His trial resumed on 10 August 2026 after a prolonged interruption.' },
      { type: 'p', text: 'DUA regards the continued prosecution of a prominent opposition leader under a charge carrying the gravest possible consequences as deeply troubling for democracy, political pluralism and the protection of fundamental freedoms in Tanzania.' },
      { type: 'p', text: 'A vibrant democracy requires more than the holding of elections. It requires an environment in which opposition parties can organise freely, political leaders can express dissenting views, citizens can participate without fear, and state institutions act independently and impartially.' },
      { type: 'h2', text: 'Political disagreement must not be criminalised' },
      { type: 'p', text: 'DUA affirms that disagreement with government policy, advocacy for electoral reform and criticism of public institutions are legitimate elements of democratic political participation.' },
      { type: 'p', text: 'Political differences should be resolved through open dialogue, constitutional processes and credible democratic institutions\u2014not through intimidation, prolonged detention or the use of criminal proceedings to silence political opponents.' },
      { type: 'p', text: 'The prosecution of opposition leaders weakens public trust in democratic institutions and risks narrowing the political space required for peaceful participation.' },
      { type: 'p', text: 'DUA therefore calls upon the Government and relevant authorities of the United Republic of Tanzania to:' },
      { type: 'ul', items: [
        'Release Hon. Tundu Lissu immediately and unconditionally.',
        'Guarantee his safety, dignity and access to legal counsel.',
        'Ensure that all judicial proceedings comply fully with constitutional and international fair-trial standards.',
        'Protect the rights of opposition parties, civil society organisations, journalists and citizens to organise, assemble and express their political views peacefully.',
        'End the use of state institutions and criminal processes to intimidate political opponents.',
        'Initiate meaningful and inclusive dialogue on electoral, constitutional and democratic reforms.',
      ] },
      { type: 'h2', text: 'A call to Africa\u2019s democratic community' },
      { type: 'p', text: 'DUA further calls upon the African Union, regional institutions, international democratic organisations and partners of Tanzania to continue monitoring the case and to speak clearly in defence of political freedom, due process and democratic participation.' },
      { type: 'p', text: 'Silence in the face of shrinking political space risks normalising practices that threaten democracy across the continent.' },
      { type: 'p', text: 'Africa\u2019s democratic progress depends upon strong institutions, free political competition and the protection of citizens and leaders who exercise their constitutional rights.' },
      { type: 'p', text: 'DUA stands in solidarity with Hon. Tundu Lissu, his family, CHADEMA, its members and all Tanzanians working peacefully for a democratic, inclusive and accountable political system.' },
      { type: 'quote', text: 'Free Tundu Lissu Now. Democracy cannot flourish where opposition is treated as a crime.' },
    ],
  },
  {
    slug: 'angola-political-violence',
    category: 'Press Releases',
    country: 'Angola',
    date: '10 August 2026',
    title: 'DUA Condemns Political Violence in Angola Ahead of the 2027 General Elections',
    summary:
      'DUA calls for an impartial investigation into the violence in U\u00edge and urges authorities to protect political parties, supporters and citizens as Angola prepares for the 2027 elections.',
    image: 'https://placehold.co/800x500/1B2A4A/FFFFFF?text=Angola',
    spokesperson: 'Communications Office, Democracy Union of Africa',
    body: [
      { type: 'p', text: 'The Democracy Union of Africa (DUA) condemns the recent incidents of political violence in U\u00edge Province, Angola, and expresses solidarity with all affected parties, supporters and citizens.' },
      { type: 'p', text: 'As Angola prepares for the 2027 general elections, DUA urges the competent authorities to conduct an impartial and transparent investigation into the violence, hold those responsible to account, and take all necessary measures to protect the rights of political parties, their supporters and all citizens to campaign and participate freely and safely.' },
      { type: 'h2', text: 'DUA calls on the Angolan authorities to' },
      { type: 'ul', items: [
        'Promptly and impartially investigate the incidents of political violence in U\u00edge.',
        'Bring the perpetrators to justice through fair and transparent legal processes.',
        'Guarantee the safety of all political parties, candidates, supporters and civil society actors.',
        'Ensure a level playing field for all political contestants ahead of the 2027 general elections.',
        'Uphold the fundamental freedoms of assembly, association and expression.',
      ] },
      { type: 'p', text: 'DUA reaffirms that elections must be preceded by an environment of tolerance, in which political competition is conducted peacefully and differences are resolved through dialogue and democratic institutions rather than intimidation or violence.' },
      { type: 'p', text: 'DUA stands with the people of Angola in their pursuit of a peaceful, credible and inclusive democratic process.' },
    ],
  },
  {
    slug: 'npp-flagbearer-election',
    category: 'Press Releases',
    country: 'Ghana',
    date: '29 January 2026',
    title: 'DUA Wishes the New Patriotic Party Well Ahead of Its Flagbearer Election',
    summary:
      'DUA extends its warm and heartfelt wishes to the New Patriotic Party of Ghana as the party prepares to conduct its presidential flagbearer election on 31 January 2026.',
    image: 'https://placehold.co/800x500/006B3F/FFFFFF?text=Ghana+%C2%B7+NPP',
    spokesperson: 'Communications Office, Democracy Union of Africa',
    body: [
      { type: 'p', text: 'The Democracy Union of Africa extends its warm and heartfelt wishes to the New Patriotic Party of Ghana as the party prepares to conduct its presidential flagbearer election on 31 January 2026.' },
      { type: 'p', text: 'The election represents an important milestone on the NPP\u2019s journey towards Ghana\u2019s 2028 General Elections.' },
      { type: 'h2', text: 'Celebrating internal party democracy' },
      { type: 'p', text: 'DUA recognises the New Patriotic Party as one of Ghana\u2019s most established democratic and progressive political parties.' },
      { type: 'p', text: 'We commend the party\u2019s commitment to internal democratic processes that allow members and delegates to determine the party\u2019s leadership and future direction within the framework of its constitution, rules and traditions.' },
      { type: 'p', text: 'Strong democracies depend upon strong political parties. Internal elections provide members with the opportunity to shape their party\u2019s future while strengthening accountability, participation and institutional legitimacy.' },
      { type: 'h2', text: 'An important democratic exercise' },
      { type: 'p', text: 'The upcoming primary, featuring multiple candidates and involving thousands of delegates across Ghana, represents an important affirmation of the NPP\u2019s democratic tradition and organisational maturity.' },
      { type: 'p', text: 'The process also provides the party with an opportunity to demonstrate that robust political competition can take place in an atmosphere of dignity, fairness and mutual respect.' },
      { type: 'p', text: 'DUA encourages all stakeholders to place the unity and long-term strength of the party above individual interests.' },
      { type: 'h2', text: 'DUA welcomes the peace pact' },
      { type: 'p', text: 'The Democracy Union of Africa particularly welcomes reports that all five presidential aspirants have signed a peace pact committing themselves to unity, respect for the electoral process and support for the eventual winner.' },
      { type: 'p', text: 'This commitment reflects a shared responsibility to protect the cohesion, democratic values and collective purpose of the party.' },
      { type: 'p', text: 'DUA believes that the conduct of candidates and their supporters after the declaration of results will be as important as their conduct during the campaign. Respecting the outcome and supporting the successful candidate will strengthen the party and demonstrate political maturity.' },
      { type: 'h2', text: 'A standard for democratic participation' },
      { type: 'p', text: 'DUA hopes that this election will not only produce a leader capable of winning broad support among party members, but also one who can inspire confidence across the Ghanaian electorate, strengthen collective energy and chart a path towards shared progress and national renewal ahead of the 2028 elections.' },
      { type: 'p', text: 'We encourage all stakeholders\u2014including aspirants, delegates, party executives, electoral officials, supporters and observers\u2014to uphold the principles of:' },
      { type: 'ul', items: [
        'Fairness and transparency.',
        'Peaceful participation.',
        'Respectful political communication.',
        'Equal treatment of all aspirants.',
        'Compliance with party rules and procedures.',
        'Acceptance of credible results.',
        'Unity and reconciliation following the election.',
      ] },
      { type: 'p', text: 'Such conduct strengthens democratic culture within the party and reinforces the positive role political parties play in Ghana\u2019s representative democracy.' },
      { type: 'h2', text: 'Best wishes to the NPP family' },
      { type: 'p', text: 'As the New Patriotic Party undertakes this important exercise, the Democracy Union of Africa wishes the party, all five aspirants, delegates, officials and supporters a peaceful, transparent and successful flagbearer election.' },
      { type: 'p', text: 'DUA trusts that the process will strengthen the NPP\u2019s internal unity and reinforce its commitment to democratic values.' },
      { type: 'p', text: 'Regardless of the outcome, we encourage every member of the NPP family to come together behind the collective decisions of the party and continue working towards its shared vision for Ghana.' },
      { type: 'p', text: 'The strength of a political party is demonstrated not only by the competitiveness of its internal elections, but also by its ability to reunite after them.' },
      { type: 'p', text: 'The Democracy Union of Africa remains committed to supporting member parties as they strengthen internal democracy, develop effective leadership and contribute to credible multiparty governance across Africa.' },
      { type: 'quote', text: 'Louisa Atta-Agyemang \u2014 Chairperson, Democracy Union of Africa' },
    ],
  },
  {
    slug: 'ct-masterclass-2026',
    category: 'Programme Updates',
    country: 'Africa',
    date: '4 August 2026',
    title: 'DUA and CT Group Launch 2026 Campaign and Electioneering Masterclass Series',
    summary:
      'The Democracy Union of Africa and CT Group launch a comprehensive campaign and electioneering masterclass series to strengthen the capacity of member parties across Africa.',
    image: '/images/ct-group.jpeg',
    spokesperson: 'Communications Office, Democracy Union of Africa',
    body: [
      { type: 'h2', text: 'Strengthening campaign capacity across Africa' },
      { type: 'p', text: 'The Democracy Union of Africa (DUA), in partnership with CT Group, has launched the 2026 Campaign and Electioneering Masterclass Series\u2014a comprehensive training programme designed to strengthen the electoral capacity of member parties across the continent.' },
      { type: 'p', text: 'The series brings together campaign strategists, communications professionals and party organisers for intensive sessions on modern campaign techniques, digital mobilisation, message development, voter outreach and election-day operations.' },
      { type: 'h2', text: 'A response to Africa\u2019s evolving electoral landscape' },
      { type: 'p', text: 'As Africa\u2019s democratic landscape becomes increasingly competitive, political parties must adapt to rapidly changing campaign environments. The masterclass series addresses key challenges including digital transformation, youth engagement, data-driven campaigning and countering disinformation.' },
      { type: 'p', text: 'Participants benefit from the combined expertise of DUA\u2019s continental network and CT Group\u2019s global campaign experience, gaining practical skills that can be immediately applied in their respective national contexts.' },
      { type: 'p', text: 'The programme is open to campaign managers, communications directors, youth leaders and party officials from DUA member parties, with sessions delivered through a combination of in-person workshops and virtual modules.' },
    ],
  },
  {
    slug: 'uganda-post-election',
    category: 'Press Releases',
    country: 'Uganda',
    date: '19 January 2026',
    title: 'DUA Expresses Deep Concern Over Uganda\u2019s Post-Election Situation',
    summary:
      'DUA expresses solidarity with the people of Uganda following the country\u2019s presidential and parliamentary elections and calls for the protection of political rights, due process and democratic freedoms.',
    image: '/images/ct-group.jpeg',
    spokesperson: 'Communications Office, Democracy Union of Africa',
    body: [
      { type: 'p', text: 'The Democracy Union of Africa expresses solidarity with the people of Uganda following the country\u2019s presidential and parliamentary elections and calls for the protection of political rights, due process and democratic freedoms.' },
      { type: 'h2', text: 'Solidarity with the people of Uganda' },
      { type: 'p', text: 'The Democracy Union of Africa (DUA) expresses deep concern regarding developments following Uganda\u2019s recent presidential and parliamentary elections.' },
      { type: 'p', text: 'DUA stands in solidarity with the people of Uganda, particularly citizens who exercised their democratic rights under difficult circumstances and who continue to face insecurity, repression and uncertainty in the aftermath of the elections.' },
      { type: 'p', text: 'We extend our sympathy to families who have lost loved ones, to those who were injured and to all Ugandans whose fundamental rights and freedoms have reportedly been violated during this period.' },
      { type: 'h2', text: 'Concerns over the electoral environment' },
      { type: 'p', text: 'DUA is deeply troubled by reports of post-election violence, including the killing of opposition supporters, the widespread arrest and detention of political actors, polling agents and election volunteers, as well as the deployment of security forces in opposition-dominated communities.' },
      { type: 'p', text: 'Reports of the use of tear gas and live ammunition to disperse peaceful protesters raise serious concerns about the proportionality and legality of state action.' },
      { type: 'p', text: 'The shutdown of internet access during the electoral process restricted access to information, disrupted communication and limited the ability of citizens, journalists, political parties and election observers to document and independently assess developments.' },
      { type: 'p', text: 'DUA further notes with concern reports of significant electoral irregularities, including intimidation and alleged abductions of opposition supporters and civil-society actors.' },
      { type: 'p', text: 'The reported failure of biometric voter-verification systems, particularly in areas considered opposition strongholds, contributed to delays and public uncertainty. These developments undermined confidence in the process, contributed to low voter participation and raised legitimate questions about the credibility of the elections.' },
      { type: 'h2', text: 'Continued detention of Dr Kizza Besigye' },
      { type: 'p', text: 'Amid these troubling developments, the Democracy Union of Africa remains concerned that the case of Dr Kizza Besigye remains unresolved.' },
      { type: 'p', text: 'DUA reiterates its longstanding call for his immediate release and for the full restoration of his fundamental rights.' },
      { type: 'p', text: 'The continued detention and prosecution of opposition leaders deepens political tensions, weakens trust in democratic institutions and undermines prospects for national dialogue and reconciliation in Uganda.' },
      { type: 'p', text: 'Political disagreement must be addressed through constitutional processes, open dialogue and independent institutions\u2014not through prolonged detention or intimidation.' },
      { type: 'h2', text: 'Solidarity with DUA member parties' },
      { type: 'p', text: 'Within this broader national context, DUA expresses solidarity with its member parties in Uganda, including the Forum for Democratic Change and the Democratic Party.' },
      { type: 'p', text: 'We also stand with all democratic political forces, candidates, election officials, civil-society organisations, journalists and citizens who have raised principled concerns regarding the conduct and outcome of the elections.' },
      { type: 'p', text: 'Their rights to participate, organise, communicate and seek lawful redress must be fully protected.' },
      { type: 'h2', text: 'DUA calls for immediate action' },
      { type: 'p', text: 'The Democracy Union of Africa calls for:' },
      { type: 'ul', items: [
        'The immediate protection of all political actors, supporters and citizens, regardless of political affiliation.',
        'The release or fair, transparent and timely legal processing of all individuals arbitrarily detained in connection with the elections.',
        'Respect for fundamental rights, including freedom of expression, assembly, association, movement and access to information.',
        'An end to intimidation, politically motivated arrests and violence against opposition members, journalists and civil-society actors.',
        'Accountability for all acts of violence and abuse committed during and after the electoral process.',
        'Independent and credible investigations into reported deaths, injuries, disappearances and violations of political rights.',
        'The restoration and protection of unrestricted internet and communication services during future electoral processes.',
        'Transparent examination of reported failures involving election technology and voter verification.',
        'Genuine dialogue among political parties, state institutions and civil society to reduce tensions and support democratic reconciliation.',
      ] },
      { type: 'h2', text: 'Democracy requires accountability' },
      { type: 'p', text: 'Elections alone do not constitute democracy.' },
      { type: 'p', text: 'A credible democratic system requires equal political participation, respect for fundamental freedoms, independent institutions, transparent electoral administration and genuine accountability.' },
      { type: 'p', text: 'The state has a responsibility to protect every citizen, regardless of political affiliation, and to ensure that public institutions are not used to intimidate or disadvantage political opponents.' },
      { type: 'p', text: 'DUA urges all parties and citizens to pursue their concerns peacefully and through lawful constitutional processes. At the same time, those processes must be accessible, impartial and capable of providing meaningful redress.' },
      { type: 'h2', text: 'DUA reaffirms its commitment' },
      { type: 'p', text: 'The Democracy Union of Africa reaffirms its commitment to democratic governance, constitutionalism and peaceful political competition across Africa.' },
      { type: 'p', text: 'We will continue to engage with our partners, member parties and relevant regional and international stakeholders in support of the Ugandan people\u2019s democratic aspirations.' },
    ],
  },
  {
    slug: 'louisa-chairperson',
    category: 'News',
    country: 'Ghana',
    date: 'January 12, 2025',
    title: 'Historic Milestone: Louisa Atta-Agyemang Elected Youngest Chairperson of Democracy Union of Africa',
    summary:
      'In a historic vote, Louisa Atta-Agyemang becomes the youngest Chairperson in the history of the Democracy Union of Africa, pledging a new era of youth and women\u2019s leadership.',
    image: '/images/louisa-atta-agyemang-dua-chairperson-01.webp',
    link: '/blog/milestone',
  },
  {
    slug: 'youth-leadership-program',
    category: 'News',
    country: 'Continental',
    date: 'July 15, 2025',
    title: 'DUA Youth Wing Launches Leadership Development Program',
    summary:
      'The Young Democracy Union of Africa (YDUA) unveils a continental programme to train the next generation of centre-right leaders in governance and public policy.',
    image: 'https://placehold.co/600x400/232b38/ffffff?text=Youth+Leadership',
  },
  {
    slug: 'driving-democracy',
    category: 'Opinion',
    country: 'Continental',
    date: 'January 18, 2025',
    title: 'Democracy Union of Africa: Driving Democracy and Stability in Africa',
    summary:
      'An overview of DUA\u2019s mission to strengthen democratic institutions, promote accountable governance and advance stability across the African continent.',
    image: '/images/dua-image-01.webp',
    link: '/blog/driving-democracy',
  },
]

export const filterCategories: ('All' | NewsCategory)[] = [
  'All',
  'Statements',
  'Press Releases',
  'News',
  'Speeches',
  'Opinion',
  'Events',
  'Media Coverage',
  'Programme Updates',
]
