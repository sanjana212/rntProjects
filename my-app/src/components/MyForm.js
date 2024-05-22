import React, { useState } from 'react'

export const MyForm = () => {
    const[formState,setFormState]=useState({
        name:'',
        email:'',
    })
    const [formErrors,setFormErrors]=useState({});
    // validation

    const validateForm = () => {
        let errors = {};
        let isValid = true;
      
        // Name validation
        if (!formState.name) {
          isValid = false;
          errors.name = 'Name is required';
        }
      
        // Email validation
        if (!formState.email) {
          isValid = false;
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
          isValid = false;
          errors.email = 'Email address is invalid';
        }
      
        // // Password validation
        // if (!formState.password) {
        //   isValid = false;
        //   errors.password = 'Password is required';
        // } else if (formState.password.length < 8) {
        //   isValid = false;
        //   errors.password = 'Password must be at least 8 characters long';
        // }
      
        // Confirm password validation
        // if (!formState.confirmPassword) {
        //   isValid = false;
        //   errors.confirmPassword = 'Confirm password is required';
        // } else if (formState.confirmPassword !== formState.password) {
        //   isValid = false;
        //   errors.confirmPassword = 'Passwords do not match';
        // }
      
        return { isValid, errors };
      };

      // Handle input change

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
      
        const { errors } = validateForm();
        setFormErrors({ ...formErrors, [name]: errors[name] });
      };
  
  return (
    <div className='container'>
    <div className='mb-5'>
        <label htmlFor="">First Name</label>
        <input className='form-control' type="text" placeholder='first  name'
         value={formState.name}
         onChange={handleInputChange}
        />
       {formErrors.name && <p className="error">{formErrors.name}</p>}
    </div>

    <div>
        <label htmlFor="">Last Name</label>
        <input  className='form-control' type="text" placeholder='first  name' />
    </div>

    

    </div>
  )
}
export default MyForm;
