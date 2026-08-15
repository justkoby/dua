import PageHeader from '../components/PageHeader'
import useScrollAnimation from '../hooks/useScrollAnimation'

const timelineItems = [
  {
    year: 'Our Vision',
    title: 'Building a Prosperous Africa',
    text: 'The Democracy Union of Africa (DUA) is a vibrant alliance of center-right political parties, united by a shared vision of a democratic, free, and prosperous Africa. Our core mission is to champion the principles of good governance, individual liberty, and market-based economies as the key drivers of sustainable development and stability across the continent. We believe that empowering citizens and fostering transparent, accountable institutions are crucial for building nations where every individual has the opportunity to thrive.',
  },
  {
    year: '1997',
    title: 'A Legacy of Unity and Purpose',
    text: 'Founded in 1997, the DUA was established with the specific goal of bringing together like-minded political forces from across Africa. Our affiliation with the International Democrat Union (IDU) has provided a valuable platform for global collaboration, allowing us to share best practices and strengthen democratic movements. Over the years, we have grown to become a leading voice for democratic values, advocating for peaceful political transitions and the protection of human rights.',
  },
  {
    year: 'Today',
    title: 'Driving Change and Collaboration',
    text: 'Through our annual forums, policy workshops, and observer missions, the DUA facilitates a critical exchange of ideas among member parties. We provide a space for leaders to discuss strategies for addressing Africa\'s most pressing challenges, from economic reforms to regional security. Our efforts are focused on strengthening party structures, promoting youth and women\'s participation in politics, and ensuring that our members are well-equipped to lead their nations toward a brighter, more stable future. Our headquarters in Accra, Ghana, serves as a hub for these vital activities.',
  },
]

export default function About() {
  const scrollRef = useScrollAnimation()

  return (
    <div ref={scrollRef}>
      <PageHeader
        title="About The DUA"
        subtitle="An alliance of centre-right political parties, united by a shared commitment to democracy, freedom, and prosperity in Africa."
      />

      <section className="about-history-section fade-in-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="timeline">
                {timelineItems.map((item, i) => (
                  <div className="timeline-item" key={i}>
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-content">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <img src="/images/7.webp" className="img-fluid rounded shadow-lg" alt="Image of African leaders in a meeting" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
