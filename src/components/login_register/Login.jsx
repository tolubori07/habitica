import { useContext } from "react"
import AuthContext from "../../context/AuthContext"


const Login = () => {
  let{loginUser}=useContext(AuthContext)
  return (
    <form action="" className='mt-40' onSubmit={loginUser} method="POST">
        <input type="email" name='email' placeholder='Enter username'className='block mb-5 ml-7' />
        <input type="password" name="password" placeholder="Enter password" className='block ml-7' />
        <button type="submit" className="bg-blue-800 text-white px-10 mt-5 rounded-lg ml-5">Login</button>
    </form>
  )
}

export default Login