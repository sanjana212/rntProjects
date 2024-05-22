import { useState } from "react";

const Form = ({ getFormData }) => {
    const [formData, setFormData] = useState({});
    const handleFormSubmit = (event) => {
        event.preventDefault();
      
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFormData({ ...formData, [name]: checked });
    }

    const handleLanguageChange = (event) => {
        const { value } = event.target;
        setFormData({ ...formData, language: value });
    }
    return (
        <div className="container" style={{ height: '200px', width: '700px' }}>
            <form className="form" onSubmit={handleFormSubmit}>

                <div>
                    <label className="fw-bold mt-3">NAME</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label className="fw-bold mt-3">EMAIL</label>
                    <input
                        className="form-control  mb-3"
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className="fw-bold mt-3" htmlFor="">Select Gender</label>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="">Male</label>
                        <input onChange={handleInputChange} className="form-check-input" type='radio' name='mn' />

                    </div>
                    <div className="form-check">
                        <label onChange={handleInputChange} className="form-check-label" htmlFor="">Female</label>
                        <input className="form-check-input" type='radio' name='mn' />

                    </div>
                    <div className="form-check">
                        <label onChange={handleInputChange} className="form-check-label" htmlFor="">Other</label>
                        <input className="form-check-input" type='radio' name='mn' />

                    </div>
                </div>

                <div>
                    <label className="fw-bold mt-3" htmlFor="">Select Skills</label>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="">React js</label>
                        <input onChange={handleCheckboxChange} className="form-check-input" type='checkbox' name='m' />

                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="">Python</label>
                        <input onChange={handleCheckboxChange} className="form-check-input" type='checkbox' name='n' />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="">Java</label>
                        <input onChange={handleCheckboxChange} className="form-check-input" type='checkbox' name='n' />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="">C++</label>
                        <input onChange={handleCheckboxChange} className="form-check-input" type='checkbox' name='n' />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="">Web Design</label>
                        <input onChange={handleCheckboxChange} className="form-check-input" type='checkbox' name='n' />
                    </div>
                </div>
                <div>
                    <label className="fw-bold mt-3" htmlFor="">select language</label>
                    <select name="lang" id="lang" onChange={handleLanguageChange}>
                        <option>Hindi</option>
                        <option>English</option>
                        <option>Marathi</option>

                    </select>
                </div>
                <div className=" mb-3">
                    <div className=" d-grid">   <button className="btn btn-info">Save</button></div>

                </div>



            </form>
        </div>
    )
}
export default Form;






