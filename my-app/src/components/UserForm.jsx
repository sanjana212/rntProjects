import React, { useState } from "react";

const INITIAL_FORM_DATA = {
  username: "",
  email: "",
  password: "",
  gender: "",
  skills: [],
  language: ""
};
const UserForm = ({ onSubmit, intialUserData }) => {
  const [formData, setFormData] = useState(intialUserData || INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = (email) => {
    const isValidEmail = emailRegex.test(email);
    if (isValidEmail) {
      return true;
    } else {
      return false;
    }
  };

  const usernameRegex = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/;
  const isValidUsername = (username) => {
    const isValidUsername = usernameRegex.test(username);
    if (isValidUsername) {
      return true;
    } else {
      return false;
    }
  };

  const handleInputChange = (event) => {
    // -------------------------------------------------------------------------------------------
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const newSkills = checked
      ? [...formData.skills, name]
      : formData.skills.filter((skill) => skill !== name);
    setFormData({
      ...formData,
      skills: newSkills
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }
    //? If there are error we will return from here itself and will not go down.

    onSubmit(formData);
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
  };
  const validateForm = (formData) => {
    const errors = {};
    if (!formData.username) {
      errors.username = "Please enter your username";
    } else if (!isValidUsername(formData.username)) {
      errors.username = "Username is invalid";
    }

    if (!formData.email) {
      errors.email = "Please enter your email";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.password) {
      errors.password = "Please enter your password";
    } else if (formData.password.length < 8) {
      errors.password = "password must have at least 8 characters";
    }
    if (!formData.gender) {
      errors.gender = "Please select your gender";
    }
    if (formData.skills.length === 0) {
      errors.skills = "Please select at least one skill";
    }
    if (!formData.language) {
      errors.language = "Please select a language";
    }
    return errors;
  };

  return (
    <div>
      <form className="form">
        <div className="mb-3">
          <label className="fw-bold">Username:</label>
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <p className="text-danger">{errors.username}</p>}
        </div>
        <div className="mb-3">
          <label className="fw-bold">Email:</label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label className="fw-bold">Password:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="fw-bold">Gender:</label>
          <div className="form-check">
            <label htmlFor="male">Male</label>
            <input
              className="form-check-input"
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-check">
            <label htmlFor="female">Female</label>
            <input
              className="form-check-input"
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleInputChange}
            />
          </div>

          {errors.gender && <p className="text-danger">{errors.gender}</p>}
        </div>
        <div className="mb-3">
          <label className="fw-bold">Skills: </label>
          <label className="me-2">React</label>
          <input
            className="form-check-input me-4"
            type="checkbox"
            id="skill1"
            name="React"
            checked={formData.skills.includes("React")}
            onChange={handleCheckboxChange}
          />
          <label className="me-2">Java</label>
          <input
            className="form-check-input me-4"
            type="checkbox"
            id="skill2"
            name="Java"
            checked={formData.skills.includes("Java")}
            onChange={handleCheckboxChange}
          />
          <label className="me-2">JavaScript</label>
          <input
            className="form-check-input me-4"
            type="checkbox"
            id="skill3"
            name="javascript"
            checked={formData.skills.includes("javascript")}
            onChange={handleCheckboxChange}
          />
          <br />
          <label className="me-2">python</label>
          <input
            className="form-check-input me-4"
            type="checkbox"
            id="skill4"
            name="python"
            checked={formData.skills.includes("python")}
            onChange={handleCheckboxChange}
          />
          <label className="me-2">HTML</label>
          <input
            className="form-check-input me-4"
            type="checkbox"
            id="skill5"
            name="HTML"
            checked={formData.skills.includes("HTML")}
            onChange={handleCheckboxChange}
          />
          {errors.skills && <p className="text-danger">{errors.skills}</p>}
        </div>
        <div className="mb-3">
          <label for="language" className="fw-bold">
            Select a language:
          </label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleInputChange}
          >
            <option value="">select...</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            <option value="German">German</option>
          </select>
          {errors.language && (
            <div className="text-danger">{errors.language}</div>
          )}
        </div>
      </form>
      <button onClick={handleSubmit} className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};
export default UserForm;





