import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import useScrollAnimation from '../hooks/useScrollAnimation'

export default function Contact() {
  const scrollRef = useScrollAnimation()
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div ref={scrollRef}>
      <PageHeader
        title="Contact Us"
        subtitle="We welcome your inquiries. Please get in touch with us using the form or details below."
      />

      <section className="contact-section fade-in-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="contact-form-container">
                <h3 className="mb-4">Send us a Message</h3>
                <form action="https://formsubmit.co/info@democratunionofafrica.org" method="POST">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" name="subject" value={form.subject} onChange={handleChange} required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" rows={5} value={form.message} onChange={handleChange} required></textarea>
                  </div>
                  <div className="text-start">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-details">
                <h3 className="mb-4">Contact Information</h3>
                <div className="d-flex mb-4">
                  <div className="icon me-3"><i className="bi bi-geo-alt-fill"></i></div>
                  <div>
                    <h5>Our Address</h5>
                    <p className="mb-0">Accra, Ghana</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div className="icon me-3"><i className="bi bi-telephone-fill"></i></div>
                  <div>
                    <h5>Phone</h5>
                    <p className="mb-0">+233 24 196 7709</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div className="icon me-3"><i className="bi bi-envelope-fill"></i></div>
                  <div>
                    <h5>Email</h5>
                    <p className="mb-0">info@democratunionofafrica.org</p>
                  </div>
                </div>
                <div className="map-container mt-5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254103.0536481173!2d-0.3708803135569409!3d5.62336532827113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b1a72d%3A0x23f69a42e5246c21!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1723229642878!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map of Accra, Ghana"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
