import {React} from 'react'

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

            window.location.href = '/login'
        } else{
            alert(result.error)
        }
        } catch (error) {
            console.error('Something went wrong:', error);
        }
    }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">logout</button>
      </form>
    </div>
  )
}

export default LogOut
