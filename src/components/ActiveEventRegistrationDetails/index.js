// Write your code here
import './index.css'

const registrationStatus = {
  yesToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {getActiveEventRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="no-active-event-registration">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationsClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-img"
      />
      <h1 className="registered-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registered-closed-description">
        Stay tuned. We will reopen
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-closed-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance
      </p>
      <button className="register-here-button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    const registrationStatusValue = getActiveEventRegistrationStatus()
    switch (registrationStatusValue) {
      case registrationStatus.yesToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
