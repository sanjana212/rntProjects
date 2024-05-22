import { useState } from "react";

const Modal = ({ data, onSave, onClose, }) => {
    const [formData, setFormData] = useState({
        username: data.username || '',
        id: data.id || '',
        name: data.name || '',
        email: data.email || '',
    });


    const handleInputChange = (event) => {
        setFormData({
            ...formData, [event.target.name]: event.target.value,
        });


    }
    return (
        <div>
            <form >
                <div>
                    <label className="fw-bold mt-3">USER ID</label>
                    <input
                        className="form-control"
                        type="text"
                        name="id"
                        placeholder="User ID"
                        value={formData.id}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className="fw-bold mt-3">NAME</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className="fw-bold mt-3">USERNAME</label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
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
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className="fw-bold mt-3" htmlFor="">Select Gender</label>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="">Male</label>
                        <input className="form-check-input" type='radio' name='mn' />

                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="">Female</label>
                        <input className="form-check-input" type='radio' name='mn' />

                    </div>
                </div>
               
                <div>
                    <label className="fw-bold mt-3" htmlFor="">Select Skills</label>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="">React js</label>
                        <input className="form-check-input" type='checkbox' name='m' />

                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="">Python</label>
                        <input className="form-check-input" type='checkbox' name='n' />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="">Java</label>
                        <input className="form-check-input" type='checkbox' name='n' />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="">C++</label>
                        <input className="form-check-input" type='checkbox' name='n' />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="">Web Design</label>
                        <input className="form-check-input" type='checkbox' name='n' />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-6 d-grid">   <button className="btn btn-info" onClick={(e) => { e.preventDefault(); onSave(formData) }}>Save</button></div>
                    <div className="col-6 d-grid"> <button className="btn btn-secondary" onClick={onClose}>Close</button></div>
                </div>



            </form>
        </div>
    )
}
export default Modal;