import { useState } from 'react'

export default function RegisterLocal() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@democratunionofafrica.org', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="registration-section">
      <div className="container">
        {submitted ? (
          <div className="registration-form-container text-center">
            <h3 className="text-white">Registration Successful!</h3>
            <p className="text-white">Thank you for registering for the DUA Forum 2025. We have received your information and look forward to seeing you there.</p>
          </div>
        ) : (
          <div className="registration-form-container">
            <h2 className="text-center text-white mb-4">Local Registration - DUA Forum 2025</h2>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="DUA Forum 2025 Registration" />

              <div className="mb-3">
                <label className="form-label">Title*</label>
                <div className="d-flex flex-wrap">
                  {['Mr.', 'Mrs.', 'Miss.', 'Dr.', 'Prof.'].map((t) => (
                    <div className="form-check me-3" key={t}>
                      <input className="form-check-input" type="radio" name="Title" id={`title${t}`} value={t} required />
                      <label className="form-check-label" htmlFor={`title${t}`}>{t}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name*</label>
                <input type="text" name="First Name" className="form-control" id="firstName" placeholder="First Name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name*</label>
                <input type="text" name="Last Name" className="form-control" id="lastName" placeholder="Last Name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="emailAddress" className="form-label">Email Address*</label>
                <input type="email" name="Email Address" className="form-control" id="emailAddress" placeholder="E-mail id" required />
              </div>

              <div className="mb-3">
                <label htmlFor="mobileNumber" className="form-label">Mobile Number (+254) *</label>
                <input type="tel" name="Mobile Number" className="form-control" id="mobileNumber" placeholder="e.g., 722123456" pattern="[0-9]{9}" required />
                <small className="form-text text-muted">Format: 722123456 (excluding country code)</small>
              </div>

              <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender*</label>
                <select name="Gender" className="form-select" id="gender" required>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="country" className="form-label">Country*</label>
                <select name="Country" className="form-select" id="country" required defaultValue="Kenya">
                  <option value="Kenya">Kenya</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="organisation" className="form-label">Organisation:</label>
                <input type="text" name="Organisation" className="form-control" id="organisation" placeholder="Organisation" />
              </div>

              <div className="mb-4">
                <label htmlFor="position" className="form-label">Position:</label>
                <input type="text" name="Position" className="form-control" id="position" placeholder="Position" />
              </div>

              {error && <div className="alert alert-danger">There was an error submitting the form. Please check your connection and try again.</div>}

              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
