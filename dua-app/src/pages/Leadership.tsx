import PageHeader from '../components/PageHeader'
import useScrollAnimation from '../hooks/useScrollAnimation'

const leaders = [
  { name: 'Md Louisa Atta-Agyemang', title: 'Chairperson', affiliation: 'New Patriotic Party, Ghana', img: '/images/Pic 2.webp' },
  { name: 'Mr Joy Reuben', title: 'Secretary General', affiliation: 'Inkatha Freedom Party, South Africa', img: 'https://placehold.co/600x700/232b38/ffffff?text=J.+Reuben' },
  { name: 'Hon Rafael Savimbi Massanga', title: 'Deputy Chairman', affiliation: 'UNITA, Angola', img: '/images/Rafael Savimbi Massanga-01.webp' },
  { name: 'Md Leonor Elisa Lopes De Sousa', title: 'Treasurer', affiliation: 'Democratic Movement of Mozambique', img: '/images/Leonor Elisa Lopes De Sousa-01.webp' },
  { name: 'Mr. Rahhal El Makkaoui', title: 'Vice-Chair for North Africa', affiliation: 'Istiqlal Party, Morocco', img: '/images/Rahhal El Makkaoui-01.webp' },
  { name: 'Mr. Deogratias Munishi', title: 'Vice-Chair for East Africa', affiliation: 'CHADEMA, Tanzania', img: '/images/Deogratias Munishi-01.webp' },
  { name: 'Sen. Samuel Anyanwu', title: 'Vice Chair for West Africa', affiliation: 'Peoples Democratic Party, Nigeria', img: '/images/Samuel Anyanwu-01.webp' },
  { name: 'Md. Linette Olofsson', title: 'Vice Chair for Southern Africa', affiliation: 'Democratic Movement, Mozambique', img: '/images/Linette Olofsson-01.webp' },
  { name: 'Md. Avelino Mocache Mehenga', title: 'Vice Chair for Central Africa', affiliation: 'Uni\u00f3n de Centro Derecha (UCD), Equatorial Guinea', img: '/images/Avelino Mocache Mehenga-01.webp' },
]

export default function Leadership() {
  const scrollRef = useScrollAnimation()

  return (
    <div ref={scrollRef}>
      <PageHeader
        title="Our Leadership"
        subtitle="Meet the dedicated team guiding the Democracy Union of Africa towards a prosperous future."
      />

      <section className="leadership-section fade-in-section">
        <div className="container">
          <div className="row g-5">
            {leaders.map((leader, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="leader-card">
                  <img src={leader.img} className="leader-img" alt={`Portrait of ${leader.name}`} />
                  <div className="leader-info">
                    <h4 className="leader-name">{leader.name}</h4>
                    <p className="leader-title">{leader.title}</p>
                    <p className="leader-affiliation">{leader.affiliation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
