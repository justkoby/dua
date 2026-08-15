import PageHeader from '../components/PageHeader'
import useScrollAnimation from '../hooks/useScrollAnimation'

const priorities = [
  {
    id: 'democracy-electoral-integrity',
    icon: 'bi-ballot',
    title: 'Democracy & Electoral Integrity',
    text: 'DUA supports free, fair and transparent elections across the continent. We deploy election observation, share best practice among member parties, and advocate for independent electoral institutions that earn public trust.',
  },
  {
    id: 'economic-freedom',
    icon: 'bi-graph-up-arrow',
    title: 'Economic Freedom',
    text: 'We champion market-driven economies, private enterprise and sound fiscal governance as the surest path to jobs, wealth creation and shared prosperity for African citizens.',
  },
  {
    id: 'youth-political-leadership',
    icon: 'bi-person-raised-hand',
    title: 'Youth Political Leadership',
    text: 'Through our youth wing, the Young Democracy Union of Africa (YDUA), we train and empower the next generation of centre-right leaders to participate meaningfully in politics and public life.',
  },
  {
    id: 'women-in-governance',
    icon: 'bi-gender-equal',
    title: 'Women in Governance',
    text: 'DUA actively promotes the participation of women in political leadership and governance, working with the International Women\u2019s Democracy Union to break barriers and amplify women\u2019s voices.',
  },
  {
    id: 'regional-cooperation',
    icon: 'bi-globe-africa',
    title: 'Regional Cooperation',
    text: 'As the African regional union of the International Democracy Union, we strengthen ties between member parties and deepen integration across Africa\u2019s sub-regions and with the wider world.',
  },
  {
    id: 'peace-accountable-governance',
    icon: 'bi-shield-check',
    title: 'Peace & Accountable Governance',
    text: 'We stand for peaceful transitions of power, the rule of law, and accountable institutions that deliver for citizens and safeguard democracy against authoritarianism.',
  },
]

export default function Priorities() {
  const scrollRef = useScrollAnimation()

  return (
    <div ref={scrollRef}>
      <PageHeader
        title="Our Priorities"
        subtitle="The public-facing commitments that guide DUA's work across the continent."
      />

      <section className="priorities-section fade-in-section">
        <div className="container">
          <div className="row g-4">
            {priorities.map((p) => (
              <div className="col-md-6 col-lg-4" key={p.id} id={p.id}>
                <div className="priority-card h-100">
                  <div className="priority-icon">
                    <i className={`bi ${p.icon}`}></i>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
