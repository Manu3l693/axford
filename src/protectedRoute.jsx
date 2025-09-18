import {React, useState, useEffect} from "react"
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}) {

    const [isAuth, setIsAuth] = useState(null);

    useEffect(()=>{
        const handleLogin = async () =>{
            try{
                const response = await fetch('http://localhost/axfordbackend/authCheck.php', {
                    method: "POST",
                    credentials: "include" ,
                    headers: {"Content-Type" : "application/json"},
                })

                const data = response.json()
                setIsAuth(data.authenticatied)
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
