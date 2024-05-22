import React, { useState } from 'react';
import { signInUser, logout } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
const Login = () => {
    const [Password, setPassword] = useState("");
    const [email, setEmil] = useState("");
    const dispatch = useDispatch();

    const handleLogin = () => {
        // console.log(email, Password);
        dispatch(signInUser({ email, Password }))
    }
    const logOutHandle = () => {
        dispatch(logout)
    }
    return (
        <div className='container mt-5' style={{ width: '400px', height: '400px', border: '2px solid red', padding: "10px" }}>
            <h1>Login System</h1>

            <div>
                <label htmlFor="">Email</label>
                <input type="text" value={email} onChange={(e) => setEmil(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Password</label>
                <input type='password' value={Password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button onClick={handleLogin} style={{ width: '100%' }}>Login</button>
                <button onClick={logOutHandle}  style={{width:'100%'}}>Logout</button>
            </div>
        </div>
    )
}

export default Login