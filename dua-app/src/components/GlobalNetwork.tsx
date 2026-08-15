const partners = [
  {
    name: 'International Democracy Union',
    short: 'IDU',
    logo: '/images/idu.webp',
    url: 'https://www.idu.org',
    description: "DUA's global parent network",
  },
  {
    name: 'International Young Democrat Union',
    short: 'IYDU',
    logo: '/images/iydu.png',
    url: 'https://www.iydu.org',
    description: 'IDU youth organisation',
  },
  {
    name: 'International Women\'s Democracy Union',
    short: 'IWDU',
    logo: '/images/iwdu.jpg',
    url: 'https://www.iwdu.org',
    description: 'IDU women\'s organisation',
  },
  {
    name: 'Young Democracy Union of Africa',
    short: 'YDUA',
    logo: '/images/ydua.png',
    url: 'https://ydua.org',
    description: "DUA's African youth wing",
  },
  {
    name: 'Konrad-Adenauer-Stiftung',
    short: 'KAS',
    logo: '/images/konrad.png',
    url: 'https://www.kas.de/en/political-dialogue-sub-saharan-africa',
    description: 'Strategic institutional partner',
  },
]

export default function GlobalNetwork() {
  return (
    <section className="global-network-section">
      <div className="container">
        <h2 className="section-title-dark text-center mb-5">Our Global Network & Partners</h2>

        <div className="network-logos">
          {partners.map((partner) => (
            <a
              key={partner.short}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="network-logo-link"
              title={`${partner.name} — ${partner.description}`}
            >
              <div className="network-logo-wrapper">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="network-logo"
                  />
                ) : (
                  <span className="network-logo-text">{partner.short}</span>
                )}
                <i className="bi bi-box-arrow-up-right network-external-icon"></i>
              </div>
              <span className="network-logo-name">{partner.short}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
