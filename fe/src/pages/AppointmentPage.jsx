import '../styles/Appointment.css'

function AppointmentPage() {
    return (
        <div className="wrapper-appoinment">
            <div className="title-apm">Request Appointment</div>
            <div className="title-apm-innet">
                <span>If you have a pressing concern, please call our office directly at (831) 278-1081.</span>
                <span>Our phones and emails are answered 9am-3pm PST Monday through Saturday, but are closed most major holidays.</span>
                <span>For clients in Santa Barbara, Ventura and Los Angeles counties, please fill out this form. We partner with the Aquatic Pet Vet to see clients in that service area.</span>
            </div>
            <div className="login-form-container">
                <h2 className="login-title">Fill out this form to request an appointment:</h2>
                <form className="login-form">
                    <label>
                        First Name
                        <input type="text" className="login-input" />
                    </label>
                    <label>
                        Last Name
                        <input type="text" className="login-input" />
                    </label>
                    <label>
                        Email
                        <input type="email" className="login-input" />
                    </label>
                    <label>
                        Phone
                        <input type="tel" className="login-input" />
                    </label>
                    <label>
                        City
                        <input type="text" className="login-input" />
                    </label>
                    <label>
                        State
                        <input type="text" className="login-input" />
                    </label>
                    <label>
                        Description (500 characters or less)
                        <textarea maxLength="500" className="login-input" style={{ height: '192px' }} />
                    </label>
                    <div className="capcha">
                        <div className="title-capcha">CAPTCHA</div>
                        <label className="captcha-label">
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <input type="checkbox" className="captcha-checkbox" required />
                                Im not a robot
                            </div>
                            <img src="/src/assets/images/logo-capcha.png" alt="" width="58px" height="50px" />
                        </label>
                    </div>
                    <button type="submit" className="login-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AppointmentPage
