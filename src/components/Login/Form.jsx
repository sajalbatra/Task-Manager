import { React, useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import "./form.css";
import axios from 'axios';

const Form = () => {
  const navigate = useNavigate();
  const loginClick = () => {
    // Handle login click here
    // Example: Call your login API endpoint using Axios
    axios.post('https://task-manager-backendauth.onrender.com/login', {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    })
    .then((response) => {
      console.log('Signup successful:', response.data);
      navigate('/daytask');
    })
    .catch((error) => {
      console.error('Signup error:', error);
    });
  };
  const initialFormData = useMemo(() => ({
    name: '',
    email: '',
    password: '',
  }), []);

  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (formSubmitted) {
      const timerId = setTimeout(() => {
        setFormData(initialFormData);
        setFormSubmitted(false);
      }, 100);

      return () => clearTimeout(timerId);
    }
  }, [formSubmitted, initialFormData]);

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs */}
      <label>
        Name:
        <input type="text" name="name" required value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" required value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" required value={formData.password} onChange={handleChange} />
      </label>

      {/* Submit button */}
      <p className='terms'>
        <input type="checkbox" className="check" />
        I have read & agreed to DayTask&nbsp;<span>Privacy Policy, Terms & Condition</span>
      </p>
      <button className="signbutton" onClick={loginClick}><span>Sign Up</span></button>
    </form>
  );
};

export default Form;
