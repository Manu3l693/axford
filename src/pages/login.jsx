import './login.css';
import {Link, useNavigate} from 'react-router-dom';
import {React, useState} from 'react';

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e)=>{
     setFormData({...formData, [e.target.name]: e.target.value});
  }

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/axfordbackend/login.php', {
        method: "POST",
        credentials: "include",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(formData)
      })

      const result = await response.json();
      
      if(result.error){
        setErrorMessage(result.error.join(" "));
      } else{
        setMessage(result.message);
        setTimeout(() => {
          navigate('/Explore');
        }, 1000);
      } 
    } catch (error) {
       setErrorMessage("Error connecting server");
    }
  }

  const styleMessage = {
    color: 'green',
    fontSize: '15px',
    fontFamily: 'lato',
    textAlign: 'center',
    fontWeight: '600px'
  }

  const styleErrorMessage = {
    color: 'red',
    fontSize: '15px',
    fontFamily: 'lato',
    textAlign: 'center',
    fontWeight: '600px'
  }

  return (
    <div className='login_page'>
       <div className="login_page_1">
        <div className="axford_logo">
            <div className="red_dot"></div>
            <h2>Axford & Co.</h2>
        </div>

        <div className="login_border">
          <form className='login_border_1' onSubmit={handleSubmit}>
            <div className="login_border_texts">
              <h4>Employee Portal</h4>
              <h3>Log In</h3>
              <div className="login_des">
                <p>Please enter your work email and password to access your employee dashboard and manage your tasks and resources.</p>
              </div>
            </div>

            <div className="form-groups">

              <label>Work email:</label>

              <div className="form_input-1">
              <input 
              type="email" 
              name="email" 
              placeholder="Enter your work email" 
              onChange={handleChange}/>
              </div>

            </div>

            <div className="form-groups">
              <label>Password:</label>
              <div className="form_input-1">
              <input 
              type="password" 
              name="password" 
              placeholder="Enter your password" 
              onChange={handleChange}/>
              </div>

            </div>

            <div className="login_button">
              <button type="submit">LOG IN</button>
            </div>

            <div className="forgot_password">
              <Link to='/forgot'>Forgot Password?</Link>
            </div>

            <p style={styleMessage}>{message}</p>
            <p style={styleErrorMessage}>{errorMessage}</p>
          </form>
        </div>
       </div>
    </div>
  )
}

export default Login
