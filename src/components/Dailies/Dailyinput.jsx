/* eslint-disable react/prop-types */
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
const Dailyinput = ({onAdd}) => {
    const[text,setText]= useState('')
    const onsubmit = (e) => {
e.preventDefault()
if(!text){
    alert("Please enter a daily")
    return
}
onAdd({text})
setText('')
    };
  return (
    <>
    <form onSubmit={onsubmit}>
    <div className="input text-white text-lg flex justify-center items-center absolute top-36">
<input type="text" name="" id="" placeholder="Enter Your Dailies"  value={text} onChange={(e) => setText(e.target.value)}className=" note-input  shadow-2xl shadow-slate-950 rounded-xl bg-slate-900 h-11 text-center ring-8 focus-within:shadow-2xl focus-within:shadow-cyan-500 transition-shadow " />
<div className='noteinputbtn'>
<button type="submit" className=' bg-blue-800 rounded-xl p-5 py-3 px-6 ml-2  shadow-2xl shadow-slate-950'><FontAwesomeIcon className='text-lg' icon={faPlus}/></button>
</div>
</div>
</form>
   </>

  )
}
// 
export default Dailyinput