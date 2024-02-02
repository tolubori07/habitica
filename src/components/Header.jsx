/* eslint-disable react/prop-types */
import Menu from "./Menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState,useContext } from "react"
import AuthContext from "../context/AuthContext"
const Header = () => {
    let {user}= useContext(AuthContext)
    const [showMenu, setshowMenu,] = useState(false)
    return (
        <>
            <div className="header">
                
                    <h1 className="text-5xl text-white heading">Habitia</h1>
                    <h3 className="inline text-base text-white">Hello {user&& <span className="inline">{user.username}</span>}👋</h3>
                    {showMenu ? <Menu onToggle={() => setshowMenu(!showMenu)} showMenu={showMenu} /> : <button className="bg-slate-700 w-10 menubtn ml-10 float-right" onClick={() => (setshowMenu(!showMenu))}><FontAwesomeIcon className="text-white text-3xl" icon={faBars} /> </button>}
            </div>
        </>
    )
}

/* onToggle={() => setshowmenu(!showMenu)}
showMenu={showMenu}*/
export default Header