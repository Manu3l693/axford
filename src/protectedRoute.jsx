import {React, useState, useEffect} from "react"
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
                setIsAuth(data.authenticated)
                
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

  return isAuth ? <Navigate to={children} replace/> : <Navigate to="/login"  replace/>
}

export default ProtectedRoute
