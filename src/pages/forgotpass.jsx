import {useState} from 'react';
import './forgot_password.css';

function Forgotpassword() {

  const [formData, setFormData] = useState({
    email: ''
  });

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  const [message, setMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/axfordbackend/forgotPassword.php', {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(formData)
      })

      const data = await response.json();
      console.log(data);
      if(data.message){
        setMessage(data.message);
      } else{
        setErrorMessage(data.error)
      }
    } catch (error) {
      setErrorMessage(`Something went wrong: ${error}`)
    }
  }

  const err = {
    color: 'red',
    fontWeight: '600px',
    fontSize: '14px',
    fontFamily: 'lato',
    textAlign: 'center',
    margin: '1% 0'
  }

  const suc = {
    color: 'green',
    fontWeight: '600px',
    fontSize: '14px',
    fontFamily: 'lato',
    textAlign: 'center',
    margin: '1% 0'
  }

  return (
    <div className='login_page'>
       <div className="login_page_1">
         <div className="axford_logo">
            <div className="red_dot"></div>
            <h2>Axford & Co.</h2>
         </div>


          <div className="forgot_password_1">
            <form className='forgot_password_form' onSubmit={handleSubmit}>
               <div className="password_header">
                <h2>Forgot Password</h2>
               </div>

               <div className="form_group_1">
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                name="email" 
                placeholder="Enter your registered email" 
                onChange={ handleChange}
                />

               </div>

               <div className="forgot_button">
                <button type='submit'>SUBMIT</button>
               </div>
               
               <p style={suc}>{message}</p>
               <p style={err}>{errorMessage}</p>
            </form>
          </div>
       </div>
    </div>
  )
}

export default Forgotpassword
