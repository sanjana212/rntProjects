import React, { useState } from 'react'
import Logo from '../Assets/Images/logo.png';
//  import SideCorner from '../Assets/Images/sideCorner.png';
import SideCorner from '../Assets/Images/sideCorner.png'
import "./Login.css"

const Login = () => {
  const [userLoginData, setUserLoginData] = useState({
    "UserID": "",
    "Password": ""
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [recaptcha, setRecaptcha] = useState(false);
  // const [token, setToken] = useState({});
  const [token, setToken] = useState('');
  const [showError, setShowError] = useState(false);
  const [showHide, setShowHide] = useState(false);

  const handleUserLoginInput = (e) => {
    setUserLoginData(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const handleUserLogin = () => {
    // if(token.success && userLoginData.UserID !== "" && userLoginData.Password !== ""){
    //   sessionStorage.setItem("user", true);
    //   window.location = "/rdms-react/";
    //   setShowError(false);
    // } else {
    //   setShowError(true);
    // }
    let temp;
    const obj = {

      "user_Id": userLoginData.UserID,
      "password": userLoginData.Password,
    }

    fetch('http://3.13.184.127/api/checkLoginUsers', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'mode':'no-cors',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(obj)
    }).then(res => res.json())
      .then(res => {
        console.log('res=>', res)
        // if (res) {
        //   let token = res.Value;
        //   temp = res.TOKEN;
        //   console.log();
        //   sessionStorage.setItem('token', token)
        //   try {
        //     fetch('http://3.13.184.127/api/parseToken', {
        //       method: "POST",
        //       headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //       },
        //       body: JSON.stringify(token)
        //     }).then(res => res.json())
        //       .then(res => console.log('token res', res))
        //   } catch (error) {
        //     console.log('token ', error);
        //     console.log('token error', error);
        //   }
        // }
      })

  }


  // const handleLogin = (event) => {
  //   event.preventDefault();

  //   // Step 1: Authenticate user
  //   fetch('http://3.13.184.127/api/checkLoginUsers', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ username, password })
  //   })
  //   .then(response => response.json())
  //   .then(authenticationData => {
  //     if (authenticationData.success) {
  //       const token = authenticationData.token;

  //       // Step 2: Parse Token
  //       fetch('http://3.13.184.127/api/parseToken', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${token}`
  //         }
  //       })
  //       .then(response => response.json())
  //       .then(userData => {
  //         // You can now use 'userData' to update your app's state or perform other actions
  //         console.log('User Data:', userData);
  //       })
  //       .catch(error => {
  //         console.log('Error parsing token:', error);
  //       });
  //     } else {
  //       console.log('Login failed. Incorrect credentials.');
  //     }
  //   })
  //   .catch(error => {
  //     console.log('Error authenticating user:', error);
  //   });
  // };


  const clearInputFields = () => {
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    setUserLoginData({
      "UserID": "",
      "Password": ""
    })
    localStorage.clear();
    sessionStorage.clear();
  }
  return (
    <>
      <div className="container-login">
        <div className="software-details">
          <div className="login-heading">
            <div className="login-title">Release & Deployment Management System</div>
            <p className='login-para'><strong>Release and Deployment Management</strong> includes planning, designing, building, testing and deploying new software and hardware components in the live environment. It is important to maintain integrity of live environment by deploying correct releases.</p>
          </div>
        </div>
        <div className="login-form">
          <div className="loginLogo">
            <img src={Logo} alt="logo" loading='lazy' />
          </div>
          <div className="login-form-content">
            <label className='Login-labels' htmlFor="">Username <span className='required'>*</span></label>
            <input className='login-inputs' type="text" minLength={6} maxLength={20} name='UserID' id='username' value={userLoginData.UserID} placeholder='Enter username' autoComplete='off' pattern='\S+' onChange={(e) => handleUserLoginInput(e)} />
            <label className='Login-labels' htmlFor="">Password <span className='required'>*</span></label>
            <div className="passwordBox">
              <input className='login-inputs' type="password" data-password="password" minLength={4} maxLength={20} name="Password" id='password' placeholder='Enter password' autoComplete='off' pattern='\S+' value={userLoginData.Password} onChange={(e) => handleUserLoginInput(e)} />
              <span className="passwordShowAndHide">
                {/* {showHide ? <AiOutlineEye /> : <AiOutlineEyeInvisible />} */}
              </span>
            </div>
            {/* <ReCAPTCHA sitekey="6LfRDFEkAAAAAPr_9FxlZZ8AzS6XpgVy_ru5pVhH" onChange={onChange} /> */}

            <div className="login-btns">
              <button className='loginResetBtn'style={{width:'50%'}} type="reset" onClick={clearInputFields}>Reset</button>
              {/* {recaptcha === true ? <button className='loginSubmitBtn' type="submit" onClick={handleUserLogin} id="submitBtn" >Login</button>
                    : <button className='loginSubmitBtn' disabled >Login</button>} */}
              <button className='loginSubmitBtn' style={{width:'50%'}} id="submitBtn" onClick={handleUserLogin} >Login</button>
            </div>
            {/* {showError && <div className="loginErrorPopup loginErrorPopup-hidden">
                  <Lottie animationData={Warning} className='loginErrorAmin' />
                  <p style={{ fontSize : '18px'}}>{userLoginData.UserID === '' && userLoginData.Password !== "" ? 'Please enter username' : userLoginData.UserID !== "" && userLoginData.Password === "" ? "Please enter password" : userLoginData.UserID !== "" && userLoginData.Password !== "" ? "Please enter vaild username and password" : "Please enter username and password"}</p>
                  <button className='loginErrorPopupBtn'>ok</button>
                </div>} */}
          </div>
        </div>
        <div className="login-sideCorner">
          <img src={SideCorner} alt="side corner" loading='lazy' />
        </div>
      </div>
    </>
  )
}
export default Login;