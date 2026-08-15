import useScrollAnimation from '../hooks/useScrollAnimation'

export default function MilestoneBlog() {
  const scrollRef = useScrollAnimation()

  return (
    <div ref={scrollRef}>
      <article className="post-article">
        <section className="post-header">
          <div className="container text-center">
            <p className="post-meta">January 15, 2025</p>
            <h1 className="post-title">Historic Milestone: Louisa Atta-Agyemang Elected Youngest Chairperson of Democracy Union of Africa</h1>
          </div>
        </section>

        <div className="featured-image-container">
          <img src="/images/my-boss.png" alt="Louisa Atta-Agyemang at DUA Forum" className="img-fluid" />
        </div>

        <section className="post-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h3>Louisa Atta-Agyemang Makes History as Youngest DUA Chairperson</h3>
                <p>In a groundbreaking moment for African politics, Louisa Atta-Agyemang from Ghana has been elected as the youngest Chairperson of the Democracy Union of Africa (DUA). This significant milestone highlights her exceptional leadership and the trust placed in her by 21 center-right political parties across the continent, securing her an overwhelming 90% of the votes in an uncontested election.</p>
                <p>Louisa brings a wealth of experience to her role as the Chairperson of DUA. In addition to this achievement, she serves as the Deputy Chief Executive of the National Health Insurance Authority (NHIA) in charge of Operations, showcasing her dedication to public service and operational excellence.</p>

                <h3>A Historic Forum in Accra</h3>
                <p>Louisa's election comes on the heels of the successful 2024 DUA Forum, held on August 8, 2024, in Accra, Ghana. Themed "Strengthening Democratic Institutions for Political Stability: Crafting Africa's Response," the Forum attracted center-right thought leaders and key political players from across Africa. Ghana's Vice President, Alhaji Dr. Mahamudu Bawumia, graced the event as the Guest Speaker, adding to its prominence.</p>
                <p>The Forum was a resounding success, reflecting meticulous planning under Louisa's leadership as the Convener. Distinguished participants included the Forum for Democratic Change (Uganda), Inkatha Freedom Party (South Africa), Unity Party (Liberia), PDCI-RDA (Ivory Coast), Popular Democratic Movement (Namibia), The Third Republic Party (Tunisia), RENAMO (Mozambique), and many others.</p>

                <h3>Strengthening Democratic Governance Across Africa</h3>
                <p>The discussions at the Forum were pivotal, addressing critical issues such as political stability, governance, and democratic reforms. Notable speakers included Hon. Tony Peter Clement (former Canadian Minister of Industry and President of the Treasury Board), Mr. Peter Mac Manu (former National Chairman of Ghana's New Patriotic Party), and Prof. Mohammed Haruna (Deputy General Secretary of the NPP). Their insights further enriched the dialogue on fostering sustainable democracy in Africa.</p>

                <h3>Looking Ahead: Louisa's Vision for DUA</h3>
                <p>Louisa Atta-Agyemang's election signifies a new chapter for the Democracy Union of Africa. Her leadership promises to advance DUA's mission of uniting centre-right political parties, strengthening democratic institutions, and promoting political stability across Africa. As the youngest Chairperson in DUA's history, she represents a fresh perspective and a commitment to empowering the next generation of African leaders.</p>

                <div className="comment-section mt-5 pt-5 border-top">
                  <h3>Leave a Reply</h3>
                  <p>Your email address will not be published. Required fields are marked *</p>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <label htmlFor="comment" className="form-label">Comment *</label>
                      <textarea className="form-control" id="comment" rows={5} required></textarea>
                    </div>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <label htmlFor="name" className="form-label">Name *</label>
                        <input type="text" className="form-control" id="name" required />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="email" className="form-label">Email *</label>
                        <input type="email" className="form-control" id="email" required />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="website" className="form-label">Website</label>
                        <input type="url" className="form-control" id="website" />
                      </div>
                    </div>
                    <div className="form-check mb-4">
                      <input className="form-check-input" type="checkbox" id="saveInfo1" />
                      <label className="form-check-label" htmlFor="saveInfo1">
                        Save my name, email, and website in this browser for the next time I comment.
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Post Comment</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
