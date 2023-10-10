/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis} from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
const Daily = ({ daily, onDelete}) => {
    const [showDelete, setShowdelete] = useState(false)
    const [doneDaily, setdoneDaily]= useState(false)
    return (
        <div className="w-[25rem] h-[4.5rem] rounded-lg text-white flex bg-neutral-800 shadow-2xl shadow-gray-700">
            <button  className="bg-blue-800 pr-1 h-[4.5rem] w-68 rounded-lg" onClick={()=>{setdoneDaily(!doneDaily)}}>
                <input type="checkbox" name="dailycheck" className="dailycheck h-5 w-10 accent-green-400 bg-[#99DBFF]" value={doneDaily}/>
            </button>
            <p className="text-center self-center ml-7 text-lg pr-[41%] dailytxt overflow-scroll">{daily.text}</p>
            {showDelete ?<><button className="delBtn"><FontAwesomeIcon icon={faEllipsis} className=" text-lg" onClick={() => (setShowdelete(!showDelete))} /></button> <button className="bg-red-700 relative left-32 w-[20%] h-7 rounded-lg" onClick={() => (onDelete(daily.id))}><p>Delete <FontAwesomeIcon icon={faTrash} cl/></p></button></> : <FontAwesomeIcon icon={faEllipsis} className="mt-7 ml-7 text-lg" onClick={() => (setShowdelete(!showDelete))} />}
        </div>
    )
}
export default Daily