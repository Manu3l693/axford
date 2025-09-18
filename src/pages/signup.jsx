import {Link} from 'react-router-dom';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css';

function Signup() {

    const[formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
      });

    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/axfordbackend/signup.php", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(formData)
      });
      

    const result = await response.json();

    if (result.errors) {
      setErrorMessage(result.errors.join("  "));
    } else {
      setMessage(result.message);
    }

    if (result.success) {
      setMessage(result.message);
      // wait 1 second so user sees the success message
      setTimeout(() => {
        navigate("/login"); // 👈 change "/welcome" to your next page route
      }, 1000);
    } else {
      setErrorMessage(result.errors.join(" "));
    }

    } catch (error) {
      setErrorMessage("Error connecting to server");
    }
    };

    const messageStyle = {
        color: 'green',
        fontSize: '15px',
        fontFamily: 'lato',
        textAlign: 'center',
        fontWeight: '600px'
    }

    const errorStyle = {
        color: 'red',
        fontSize: '15px',
        fontFamily: 'lato',
        textAlign: 'center',
        fontWeight: '600px'
    }

  return (
    <div className="signup-background">
        <div className="signup-background-1">
            <div className="axford-signup-logo">
                <div className="logo"></div>
                <h2>Axford & Co.</h2>
            </div>

            <div className="sign-up-border">
                <div className="signup-page">
                    <div className="sign-up-header">
                        <h2>Sign Up</h2>
                    </div>

                    <div className="signup-form">
                        <form className="form-input" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label> <br />
                            <div className="form_input">
                                <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                placeholder="Enter a username" 
                                onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label> <br />
                            <div className="form_input">
                                <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Enter a valid email address" 
                                onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password:</label> <br />
                            
                            <div className="form_input">
                                <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Enter a password"
                                onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="signup-button">
                            <button type="submit">Sign Up</button>
                        </div>

                        <div className="divider-or">
                            <div className="line1">
                               <div className="line_1"></div>
                            </div>

                            <div className="or"><p>or</p></div>

                            <div className="line2">
                                <div className="line_2">
                            </div></div>
                        </div>

                        <div className="google-button">
                            <Link to="/login"><p>LOG IN</p></Link>
                        </div>

                        <p style={messageStyle}>{message}</p>
                        <p style={errorStyle}>{errorMessage}</p>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup
