import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <section className="participant-selection-section d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="selection-container">
          <div className="text-center mb-5">
            <h2 className="section-subtitle">ANNUAL CONFERENCE</h2>
            <h1 className="selection-title">REGISTER NOW</h1>
            <p className="selection-subtitle">KINDLY SELECT THE BELOW AS APPROPRIATE</p>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <Link to="/register/international" className="selection-card">
              <i className="bi bi-person-bounding-box card-icon"></i>
              <span className="card-text">INTERNATIONAL PARTICIPANT</span>
            </Link>
            <Link to="/register/local" className="selection-card">
              <i className="bi bi-person-fill-check card-icon"></i>
              <span className="card-text">LOCAL PARTICIPANT</span>
            </Link>
          </div>

          <p className="text-center selection-info mt-4">
            Please choose your participant type to proceed with the registration form.
          </p>
        </div>
      </div>
    </section>
  )
}
