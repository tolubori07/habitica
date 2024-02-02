import { useState, createContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate, useNavigate } from 'react-router-dom'

const AuthContext = createContext()
export default AuthContext;

export const AuthProvider = ({children}) => {
    const [authTokens, setauthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user, setuser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    const [loading, setloading] = useState(true)

    const Navigate = useNavigate()
    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: "POST",
            headers:
                { "Content-Type": "application/json" },
            body: JSON.stringify({ 'email': e.target.email.value, 'password': e.target.password.value })
        })
        let data = await response.json()
        if (response.status === 200) {
            setauthTokens(data)
            setuser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            Navigate('/')
        } else {
            alert("failed")
        }
    }
    let logoutUser = () => {
        setauthTokens(null)
        setuser(null)
        localStorage.removeItem('authTokens')
        Navigate('/login')
    }


    let updateToken= async () => {
        console.log("called")
        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: "POST",
            headers:
                { "Content-Type": "application/json" },
            body: JSON.stringify({ 'refresh': authTokens.refresh})
        })
        let data = await response.json()
        if (response.status === 200) {
            setauthTokens(data)
            setuser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
           logoutUser()
        }
    }
    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser
    }

useEffect(()=>{
const fourMinutes = 1000*60*4;
let interval = setInterval(()=>{
    if(authTokens){
        updateToken()
    }
},fourMinutes);
return ()=> clearInterval(interval)
},[authTokens,loading])

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>

    )
}