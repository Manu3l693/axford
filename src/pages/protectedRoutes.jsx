import {Outlet, Navigate} from 'react-router-dom';
import {React, useState, useEffect} from 'react';

function ProtectedRoutes() {

    const [user, setUser] = useState(false)

    useEffect(()=>{
        const token = localStorage.getItem('auth')
        const notToken = localStorage.getItem('notAuth')
        if(token){
            setUser(token)
        }else{
            setUser(notToken)
        }
    }, [])

    // const user = null

    return user ? <Outlet/> : <Navigate to="/login" />
    
    
}

export default ProtectedRoutes
