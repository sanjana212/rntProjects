import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signUpUser } from '../redux/authSlice';
const Register = () => {
    const[name,setName]=useState("");
    const[email,setEmil]=useState("");
    const[Password,setPassword]=useState("");

const dispatch=useDispatch();

const handleRegister=()=>{
    console.table('sanjana',name,email,Password);
    dispatch(signUpUser({name,email,Password }))
}

  return (
    <div className='container mt-5' style={{width:'400px',height:'400px',border:'2px solid red',padding:"10px"}}>
         <h1>Register</h1>

        <div>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>

        <div>
            <label htmlFor="">Email</label>
            <input type="text"  value={email} onChange={(e)=>setEmil(e.target.value)} />
        </div>

        <div>
            <label htmlFor="">Password</label>
            <input  type='password' value={Password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div>
            <button onClick={handleRegister} style={{width:'100%'}}>Register</button>
        </div>
    </div>
  )
}

export default Register