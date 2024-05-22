import React, { useState } from 'react'

const FormValidation = () => {
    const [user, setUser] = useState('');
    const [userError, setUserError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const[password,setPassword]=useState('');
    const[passwordError,setPasswordError]=useState(false);
    
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.length==0 || email.length==0 || password.length==0){
            alert('please fill the required fields')
        }else{
            alert('login successful....')
        }

        
    }

    const handleUser = (e) => {
        let item = e.target.value;
        if (item.length < 3) {
            setUserError(true)
        } else {
            setUserError(false)
        }
        setUser(item);
    }

    const handleEmail = (e) => {
        let item = e.target.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = emailRegex.test(item);
        if (!isValidEmail) {
            setEmailErr(true)
        } else {
            setEmailErr(false)
        }
        setEmail(item);
    }

    const handlePassword = (e) => {
        const item = e.target.value;
        const passRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const isValidPassword=passRegex.test(item);
        if(!isValidPassword){
            setPasswordError(true)
        }else{
            setPasswordError(false);
        }
        setPassword(item);
    }

  

    

    return (
        <div className='container'>
            <form>
                <div>
                    <label htmlFor="">name</label>
                    <input required onChange={handleUser} type="text" className='form-control' />
                    {
                        userError ? <span>invalid username</span> : ''
                    }
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input required onChange={handleEmail} type="email" className='form-control' />
                    {
                        emailErr ? <span>invalid email</span> : ''
                    }
                </div>

                <div>
                    <label htmlFor="">Password</label>
                    <input required onChange={handlePassword} type="email" className='form-control' />
                    {
                        passwordError ? <span>Minimum eight characters, at least one letter and one number</span> : ''
                    }
                </div>
                <div>
                    <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormValidation