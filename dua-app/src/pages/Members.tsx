import PageHeader from '../components/PageHeader'
import useScrollAnimation from '../hooks/useScrollAnimation'

const memberParties = [
  { flag: 'ao', name: 'The National Union for the Total Independence of Angola (UNITA)', country: 'Angola' },
  { flag: 'gq', name: 'Union De Centro Derecha (UCD)', country: 'Equatorial Guinea' },
  { flag: 'ci', name: 'Democratic Party of Ivory Coast \u2013 African Democratic Rally (PDCI-RDA)', country: 'Ivory Coast' },
  { flag: 'gh', name: 'New Patriotic Party (NPP)', country: 'Ghana' },
  { flag: 'ke', name: 'Democratic Party of Kenya (DP)', country: 'Kenya' },
  { flag: 'ke', name: 'Kenya African National Union (KANU)', country: 'Kenya' },
  { flag: 'lr', name: 'Unity Party (UP)', country: 'Liberia' },
  { flag: 'mw', name: 'Malawi Congress Party (MCP)', country: 'Malawi' },
  { flag: 'ma', name: 'Istiqlal Party', country: 'Morocco' },
  { flag: 'mz', name: 'Mozambican National Resistance (RENAMO)', country: 'Mozambique' },
  { flag: 'mz', name: 'Movimento Democratico De Mozambique (MDM)', country: 'Mozambique' },
  { flag: 'na', name: 'Popular Democratic Movement (PDM)', country: 'Namibia' },
  { flag: 'ng', name: 'Peoples Democratic Party (PDP)', country: 'Nigeria' },
  { flag: 'za', name: 'African Christian Democratic Party (ACDP)', country: 'South Africa' },
  { flag: 'tz', name: 'Chama Cha Demokrasia na Maendeleo (CHADEMA)', country: 'Tanzania' },
  { flag: 'ug', name: 'Democratic Party (DP)', country: 'Uganda' },
  { flag: 'ug', name: 'Forum for Democratic Change (FDC)', country: 'Uganda' },
]

export default function Members() {
  const scrollRef = useScrollAnimation()

  return (
    <div ref={scrollRef}>
      <PageHeader
        title="Member Parties"
        subtitle="Our strength lies in our unity. The DUA is comprised of leading centre-right parties from across the African continent."
      />

      <section className="members-section fade-in-section">
        <div className="container">
          <div className="row g-4">
            {memberParties.map((party, i) => (
              <div className="col-lg-6" key={i}>
                <div className="member-card">
                  <img
                    src={`https://flagcdn.com/w160/${party.flag}.png`}
                    alt={`Flag of ${party.country}`}
                    className="country-flag"
                  />
                  <div className="party-info">
                    <h5>{party.name}</h5>
                    <p className="text-secondary mb-0">{party.country}</p>
                  </div>
                  <a href="#" className="arrow-link"><i className="bi bi-arrow-right-circle"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
