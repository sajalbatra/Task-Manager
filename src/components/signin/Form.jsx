import { React, useState, useEffect, useMemo} from 'react';
import { useNavigate } from 'react-router-dom';
import "./form.css";
import axios from 'axios';
const Form = () => {
  const navigate = useNavigate();
  const signClick=()=>{
    axios.post('https://task-manager-backendauth.onrender.com/login', {
      email: formData.email,
      password: formData.password,
    })
    .then((response) => {
      console.log('Login successful:', response.data);
      // Redirect to another page after successful login
      navigate('/daytask');
    })
    .catch((error) => {
      console.error('Login error:', error);
    });
  } 
  const initialFormData = useMemo(() => ({
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
        Email:
        <input type="email" name="email" required value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" required value={formData.password} onChange={handleChange} />
      </label>

      {/* Submit button */}
      <button className="signbutton" onClick={signClick}><span>Log In</span></button>
    </form>
  );
};

export default Form;
