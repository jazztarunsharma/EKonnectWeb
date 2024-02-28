import React, { useState } from 'react'
import AgoraUIKit, { layout } from 'agora-react-uikit'
import 'agora-react-uikit/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'

const App: React.FunctionComponent = () => {
  const [isCallStarted, setIsCallStarted] = useState(false)
  const [isCallEnded, setIsCallEnded] = useState(false)
  const [isHost, setHost] = useState(true)
  const [isPinned, setPinned] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [customerMobile, setCustomerMobile] = useState('')
  const [email, setEmail] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleStartCall = () => {
    // Validate input fields
    if (customerName.trim() !== '' && !isCallStarted && validateInputFields()) {
      setIsCallStarted(true)
    } else if (customerName.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your Name before starting the call.'
      })
    }
  }

  const handleEndCall = () => {
    setIsCallEnded(true)
  }

  const validateInputFields = () => {
    // Basic validation, can be extended
    if (
      customerName.trim() === '' ||
      customerMobile.trim() === '' ||
      email.trim() === '' ||
      pinCode.trim() === '' ||
      selectedCategory.trim() === ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all the fields.'
      })
      return false
    }

    return true
  }

  return (
    <div className='container'>
      <header>
        <div id='app' className='container'>
          <nav className='navbar navbar-expand-lg navbar-light'>
            <a href='#' className='navbar-brand ' aria-label='Samsung'>
              <svg
                className='icon'
                xmlns='http://www.w3.org/2000/svg'
                width='200'
                height='40'
                viewBox='0 0 120 32'
              >
                <rect id='Clear_space' width='200' height='40' fill='none' />
                <path
                  id='Logo_ratio'
                  d='M0,11.651V10.511H3.994v1.45a1.334,1.334,0,0,0,1.494,1.346A1.3,1.3,0,0,0,6.932,12.3a1.833,1.833,0,0,0-.026-1.113C6.133,9.243.851,8.363.18,5.333a5.347,5.347,0,0,1-.025-2.02C.567.88,2.705,0,5.359,0c2.113,0,5.025.492,5.025,3.754V4.816H6.674V3.884A1.275,1.275,0,0,0,5.282,2.537a1.25,1.25,0,0,0-1.365,1.01,2.021,2.021,0,0,0,.026.777c.437,1.734,6.081,2.667,6.7,5.8a6.943,6.943,0,0,1,.025,2.46C10.307,15.068,8.091,16,5.412,16,2.6,16,0,14.99,0,11.651ZM48.392,11.6V10.46h3.943v1.424A1.312,1.312,0,0,0,53.8,13.23a1.286,1.286,0,0,0,1.443-.984,1.759,1.759,0,0,0-.025-1.088c-.748-1.915-5.979-2.8-6.648-5.825a5.215,5.215,0,0,1-.026-1.994C48.959.932,51.1.052,53.7.052c2.088,0,4.973.518,4.973,3.728V4.816H54.989V3.91a1.268,1.268,0,0,0-1.365-1.346,1.2,1.2,0,0,0-1.34.984,2.017,2.017,0,0,0,.025.777c.412,1.734,6,2.641,6.623,5.747a6.806,6.806,0,0,1,.025,2.434c-.361,2.486-2.551,3.392-5.2,3.392C50.97,15.9,48.392,14.887,48.392,11.6Zm14.121.545a5.876,5.876,0,0,1-.025-.985V.44H66.25V11.495a4.111,4.111,0,0,0,.025.57,1.468,1.468,0,0,0,2.835,0,3.97,3.97,0,0,0,.026-.57V.44H72.9V11.158c0,.285-.026.829-.026.985-.257,2.8-2.448,3.7-5.179,3.7S62.771,14.938,62.513,12.143Zm30.974-.156A7.808,7.808,0,0,1,93.435,11V4.712c0-.259.025-.725.051-.985C93.821.932,96.063.052,98.717.052c2.629,0,4.947.88,5.206,3.676a7.185,7.185,0,0,1,.025.985V5.2h-3.762V4.376a3.1,3.1,0,0,0-.051-.57,1.553,1.553,0,0,0-2.964,0,3.088,3.088,0,0,0-.051.7V11.34a4.17,4.17,0,0,0,.026.57A1.472,1.472,0,0,0,98.717,13a1.406,1.406,0,0,0,1.52-1.087,2.09,2.09,0,0,0,.026-.57V9.165h-1.52V6.99H104V11a7.674,7.674,0,0,1-.052.984c-.257,2.718-2.6,3.676-5.231,3.676S93.744,14.705,93.487,11.987ZM41.049,15.378l-.1-13.825L38.369,15.378H34.607L32.055,1.553l-.1,13.825H28.242L28.551.466h6.056l1.881,11.651L38.369.466h6.055l.335,14.912Zm-19.79,0L19.249,1.553,17.187,15.378H13.168L15.9.466h6.623l2.732,14.912Zm62.977-.155L80.5,2.822l.206,12.4H77.046V.466h5.514l3.5,12.013L85.859.466h3.685V15.224Z'
                  transform='translate(8 8)'
                />
              </svg>
            </a>
            <div className='navbar-collapse collapse nav justify-content-end'>
              <ul className='nav justify-content-end ton-hedr-nav'>
                <li className='nav-item'>
                  <a className='nav-link login'>
                    SDS India
                    <span className='fa fa-code' />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <h1 className='text-center mb-4'>SDS Demo Video Call</h1>
          {!isCallEnded && isCallStarted && (
            <>
              <div style={styles.nav}>
                <p style={{ fontSize: 20, width: 200 }}>
                  You're {isHost ? 'a host' : 'an audience'}
                </p>
                <p style={styles.btn} onClick={() => setHost(!isHost)}>
                  Change Role
                </p>
                <p style={styles.btn} onClick={() => setPinned(!isPinned)}>
                  Change Layout
                </p>
                <p style={styles.btn} onClick={handleEndCall}>
                  End Call
                </p>
              </div>
              <AgoraUIKit
                rtcProps={{
                  appId: '53b8bd0b87184b1fa73c2f2d7ba88a20',
                  channel: 'Tarun',
                  token:
                    '007eJxTYNg/saxUfVdFtKj6h4zkxzE9nxrrLu4UKD9zkzV9Sn2gf6QCg6lxkkVSikGShbmhhUmSYVqiuXGyUZpRinlSooVFopFB8pp7qQ2BjAyu3aZMjAwQCOKzMoQkFpXmMTAAAIl9IAk=', // use null or skip if using app in testing mode
                  role: isHost ? 'host' : 'audience',
                  layout: isPinned ? layout.pin : layout.grid,
                  enableScreensharing: true
                }}
                rtmProps={{
                  username: customerName || 'user',
                  displayUsername: true
                }}
                callbacks={{
                  EndCall: () => {
                    setIsCallStarted(false)
                    setIsCallEnded(true)
                  }
                }}
              />
            </>
          )}
          {!isCallStarted && !isCallEnded && (
            <>
              <div className='mb-3'>
                <label htmlFor='customerName' className='form-label'>
                  Customer Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='customerName'
                  maxLength={50}
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='customerMobile' className='form-label'>
                  Customer Mobile
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='customerMobile'
                  maxLength={10}
                  value={customerMobile}
                  onChange={(e) => setCustomerMobile(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Customer Email ID
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  maxLength={200}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='pinCode' className='form-label'>
                  Pincode
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='pinCode'
                  maxLength={6}
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                {/* <label className='form-check-label'>Category</label> */}
                <div className='form-check'>
                  <input
                    type='radio'
                    className='form-check-input'
                    id='mobileCategory'
                    name='category'
                    value='Mobile'
                    checked={selectedCategory === 'Mobile'}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <label htmlFor='mobileCategory' className='form-check-label'>
                    Mobile
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    type='radio'
                    className='form-check-input'
                    id='electronicsCategory'
                    name='category'
                    value='Consumer Electronics'
                    checked={selectedCategory === 'Consumer Electronics'}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <label
                    htmlFor='electronicsCategory'
                    className='form-check-label'
                  >
                    Consumer Electronics
                  </label>
                </div>
              </div>
              <div className='text-center'>
                <button className='btn btn-primary' onClick={handleStartCall}>
                  Start Video Call Demo
                </button>
              </div>
            </>
          )}
          {isCallEnded && (
            <div style={styles.thankYou} className='text-center mt-3'>
              <p>Thank you for using our service!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const styles = {
  nav: { display: 'flex', justifyContent: 'space-around' },
  btn: {
    backgroundColor: '#007bff',
    cursor: 'pointer',
    borderRadius: 5,
    padding: '4px 8px',
    color: '#ffffff',
    fontSize: 20
  },
  thankYou: {
    fontSize: 24
  }
}

export default App
