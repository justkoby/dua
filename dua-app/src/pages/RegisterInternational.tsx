import { useState } from 'react'

const countries = [
  'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria',
  'Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan',
  'Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia',
  'Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo (Brazzaville)','Congo (Kinshasa)',
  'Costa Rica',"Cote d'Ivoire",'Croatia','Cuba','Cyprus','Czechia','Denmark','Djibouti','Dominica','Dominican Republic',
  'Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland',
  'France','Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea',
  'Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq',
  'Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait',
  'Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg',
  'Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico',
  'Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar (Burma)','Namibia','Nauru',
  'Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea','North Macedonia','Norway','Oman',
  'Pakistan','Palau','Palestine State','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal',
  'Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe',
  'Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia',
  'South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria',
  'Taiwan','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey',
  'Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu',
  'Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'
]

export default function RegisterInternational() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const formData = new FormData(e.currentTarget)
    const data: Record<string, string> = {}
    formData.forEach((value, key) => {
      if (typeof value === 'string') data[key] = value
    })

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
    <>
      <section className="registration-section">
        <div className="container">
          {submitted ? (
            <div className="registration-form-container text-center">
              <h3 className="text-white">Registration Successful!</h3>
              <p className="text-white">Thank you for registering for the DUA Forum 2025. We have received your information and look forward to seeing you there.</p>
            </div>
          ) : (
            <div className="registration-form-container">
              <h2 className="text-center text-white mb-4">International Registration - DUA Forum 2025</h2>
              <p className="text-center text-white-50 mb-5">Please fill in your details to register for the conference.</p>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="hidden" name="_subject" value="DUA Forum 2025 International Registration" />

                <h4 className="text-white mb-3">Basic Information</h4>

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

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">First Name*</label>
                    <input type="text" name="First Name" className="form-control" id="firstName" placeholder="First Name" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name*</label>
                    <input type="text" name="Last Name" className="form-control" id="lastName" placeholder="Last Name" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="emailAddress" className="form-label">Email Address*</label>
                  <input type="email" name="Email Address" className="form-control" id="emailAddress" placeholder="E-mail id" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="mobileNumber" className="form-label">Mobile Number*</label>
                  <input type="tel" name="Mobile Number" className="form-control" id="mobileNumber" placeholder="e.g., +15551234567" required />
                  <small className="form-text text-muted">Include country code. Format: +15551234567</small>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="gender" className="form-label">Gender*</label>
                    <select name="Gender" className="form-select" id="gender" required defaultValue="">
                      <option value="" disabled>Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="country" className="form-label">Country*</label>
                    <select name="Country" className="form-select" id="country" required defaultValue="">
                      <option value="" disabled>Select Country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="organisation" className="form-label">Organisation:</label>
                    <input type="text" name="Organisation" className="form-control" id="organisation" placeholder="Organisation" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="position" className="form-label">Position:</label>
                    <input type="text" name="Position" className="form-control" id="position" placeholder="Position" />
                  </div>
                </div>

                <hr className="border-secondary my-4" />
                <h4 className="text-white mb-3">Travel & Additional Information</h4>

                <div className="mb-3">
                  <label htmlFor="headshot" className="form-label">Headshot (Max 1MB):*</label>
                  <input type="file" name="Headshot" className="form-control" id="headshot" accept="image/jpeg,image/png" required />
                  <small className="form-text text-muted">Allowed formats: JPG, JPEG, PNG. Max size: 1MB.</small>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="passportNumber" className="form-label">Passport Number*</label>
                    <input type="text" name="Passport Number" className="form-control" id="passportNumber" placeholder="Passport Number" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="passportExpiry" className="form-label">Date of Passport Expiry:*</label>
                    <input type="date" name="Date of Passport Expiry" className="form-control" id="passportExpiry" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="passportBioData" className="form-label">Upload Bio Data of Passport Page (Max 1MB):*</label>
                  <input type="file" name="Passport Bio Data" className="form-control" id="passportBioData" accept="image/jpeg,image/png" required />
                  <small className="form-text text-muted">Allowed formats: JPG, JPEG, PNG. Max size: 1MB.</small>
                </div>

                <div className="mb-3">
                  <label htmlFor="visaInformation" className="form-label">Visa Information:*</label>
                  <select name="Visa Information" className="form-select" id="visaInformation" required defaultValue="">
                    <option value="" disabled>Select</option>
                    <option value="Not Applicable - Visa-Exempt">Not Applicable - Visa-Exempt</option>
                    <option value="Already have a valid visa for Kenya">Already have a valid visa for Kenya</option>
                    <option value="Require assistance with visa application">Require assistance with visa application</option>
                    <option value="Applying for visa independently">Applying for visa independently</option>
                  </select>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="emergencyContactName" className="form-label">Emergency Contact Name:*</label>
                    <input type="text" name="Emergency Contact Name" className="form-control" id="emergencyContactName" placeholder="Emergency Contact Name" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="emergencyPhoneNumber" className="form-label">Emergency Phone Number:*</label>
                    <input type="tel" name="Emergency Phone Number" className="form-control" id="emergencyPhoneNumber" placeholder="e.g., +247000000000" required />
                    <small className="form-text text-muted">Include country code.</small>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="vegetarian" className="form-label">Are you a Vegetarian?</label>
                    <select name="Vegetarian" className="form-select" id="vegetarian" defaultValue="">
                      <option value="" disabled>Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="medicalConditions" className="form-label">Pre-existing Medical Conditions?</label>
                    <select name="Medical Conditions" className="form-select" id="medicalConditions" defaultValue="">
                      <option value="" disabled>Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="allergies" className="form-label">Allergic to any medications?</label>
                    <select name="Allergies" className="form-select" id="allergies" defaultValue="">
                      <option value="" disabled>Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="otherInfo" className="form-label">Any other information?</label>
                  <textarea name="Other Information" className="form-control" id="otherInfo" rows={3}></textarea>
                </div>

                {error && <div className="alert alert-danger">There was an error submitting the form. Please check your connection and try again.</div>}

                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit Registration'}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Hotel Booking Section */}
      {!submitted && (
        <section style={{ padding: '3rem 0', backgroundColor: 'var(--dark-bg)' }}>
          <div className="container">
            <div className="registration-form-container">
              <h4 className="text-white mb-3">Hotel & Travel Information</h4>
              <p className="text-white-50 mb-4">
                To ensure your stay is comfortable, please book your hotel at our partner hotel, Radisson Blue Hotel Nairobi Upper Hill.
                <br />Click the button below to book your hotel with our exclusive rates.
              </p>
              <a
                href="https://www.radissonhotels.com/en-us/booking/room-display?hotelCode=KENBOUPP&checkInDate=2025-10-26&checkOutDate=2025-10-30&adults%5B%5D=1&children%5B%5D=0&aoc%5B%5D=&searchType=pac&promotionCode=DUAGR&voucher=&brands=&brandFirst="
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book Your Hotel Now
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
