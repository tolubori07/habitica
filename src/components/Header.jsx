/* eslint-disable react/prop-types */
import Menu from "./menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
const Header = () => {
    const [showMenu, setshowMenu,] = useState(false)
    return (
        <>
            <div className="header">
                
                    <h1 className="text-5xl text-white heading"> <img src="src/assets/logo.png" alt="" className="h-32 w-30"/></h1>
                    {showMenu ? <Menu onToggle={() => setshowMenu(!showMenu)} showMenu={showMenu} /> : <button className="bg-slate-700 w-10 menubtn ml-10 float-right" onClick={() => (setshowMenu(!showMenu))}><FontAwesomeIcon className="text-white text-3xl" icon={faBars} /> </button>}
                   
            </div>
        </>
    )
}

/* onToggle={() => setshowmenu(!showMenu)}
showMenu={showMenu}*/
export default Header