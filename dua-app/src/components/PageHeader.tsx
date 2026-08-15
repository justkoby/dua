interface PageHeaderProps {
  title: string
  subtitle: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="container">
        <h1 className="fade-in-section is-visible">{title}</h1>
        <p className="lead fade-in-section is-visible" style={{ transitionDelay: '0.1s' }}>
          {subtitle}
        </p>
      </div>
    </section>
  )
}
