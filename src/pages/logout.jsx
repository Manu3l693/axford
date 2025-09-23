import {React} from 'react';
import './logout.css'
import {useNavigate} from 'react-router-dom'

function LogOut() {

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const response = await fetch("http://localhost/axfordbackend/logout.php", {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type" : "application/json"},
        })

        const result = await response.json()

        if(result.success){
            alert(result.message)

            window.location.href = '/'
        } else{
            alert(result.error)
        }
        } catch (error) {
            console.error('Something went wrong:', error);
        }
    }
    const navigate = useNavigate();
    function navigating(e){
      e.preventDefault();

      setTimeout(()=>{
        navigate('/Explore')
      }, 500)
    }



  return (
    <div className='login_page'>
      <div className="login_page_1">
        <div className="axford_logo">
            <div className="red_dot"></div>
            <h2>Axford & Co.</h2>
        </div>

        <div className="log_out">
          <div className="warning_text">
            <h2>Log out?</h2>
          </div>

          <form className='logout-form'>
            <div className="logoutform">
              <button type="submit" onClick={handleSubmit}>Yes</button>
              <button type="button" onClick={navigating}>No</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogOut
