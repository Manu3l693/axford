import {useState, useEffect} from "react"
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}) {

    const [isAuth, setIsAuth] = useState(null);

    useEffect(()=>{
        const handleLogin = async () =>{
            try{
                const response = await fetch('http://localhost/axfordbackend/authCheck.php', {
                    credentials: "include" ,
                })

                const data = await response.json()
                if (data.success) {
                    setIsAuth(data.authenticated)
                } else{
                    setIsAuth(false)
                }
                
            }catch (error) {
            console.log(error);
            setIsAuth(false);  
        }
        } 

        handleLogin();
    }, [])

    if(isAuth === null){
        <p>Loading...</p>
    }

  return isAuth ? children : <Navigate to="/login"  replace/>
}

export default ProtectedRoute
