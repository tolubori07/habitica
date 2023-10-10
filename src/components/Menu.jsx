/* eslint-disable react/prop-types */
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"

const Menu = ({onToggle}) => {
  return (
    <>
      <div className="menu transition-all">
        <button onClick={onToggle} className="bg-slate-700 menubtn ml-10 float-right"><FontAwesomeIcon icon={faTimes} className='text-white text-3xl ' /></button>
        <div className="menuItems bg-slate-900 px-5 py-2  rounded-lg mt-10">
          <div className="mnuItem text-white bg-slate-800 py-2 my-3 mx-2 rounded-lg shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all h-16 bg-opacity-70 text-opacity-80 hover:bg-opacity-100 hover:text-opacity-100">
            {/*eslint-disable-next-line react/no-unescaped-entities */}
        <h4 className='text-lg ml-5'>To-Do's ✅  </h4>
          </div>
          <Link to={'/dailies'}><div className="mnuItem text-white bg-slate-800 py-2 my-3 mx-2 rounded-lg shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all h-16 bg-opacity-70 text-opacity-80 hover:bg-opacity-100 hover:text-opacity-100">
          <h4 className='text-lg ml-5'>Dailies 📅 </h4>
          </div> </Link>  
          <Link to={'/notes'}> <div className="mnuItem text-white bg-slate-800 py-2 my-3 mx-2 rounded-lg shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all h-16 bg-opacity-70 text-opacity-80  hover:bg-opacity-100 hover:text-opacity-100">
         <h4 className='text-lg ml-5'>Notes 📔 </h4> 
            <p className="text-white">Tip: to delete notes, click on the 📌 </p>
          </div></Link>  
          <div className="mnuItem text-white bg-slate-800 py-2 my-3 mx-2 rounded-lg  shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all h-16 text-opacity-80 bg-opacity-70 hover:bg-opacity-100 hover:text-opacity-100">
            <h4 className='text-lg ml-5'>Habits 💪 </h4>
          </div>
        </div>
      </div>

    </>
  )
}

export default Menu