/* eslint-disable react/prop-types */
import Noteinput from "./Noteinput";
import Note from "./Note";
import { useState } from "react";
const Notes = ({ notes, onDelete, onAdd }) => {
  const [showInput, setshowInput,] = useState(false)
  return (
    <>
      <main className="notesMain relative top-[3rem]  h-[100%] w-[100%] bg-cover">
        <button onClick={() => { setshowInput(!showInput) }} className="text-white bg-blue-600 p-3 rounded-xl relative top-[5rem] ml-[5%]">{showInput ? 'Close ❌ ' : 'Add Note ✏'}</button>
        {showInput && <Noteinput onAdd={onAdd} />}
        <section>
          <div className="noteContainer relative top-60 grid grid-cols-3 gap-10 max-[850px]:grid-cols-1">
            {notes.length > 0 ? notes.map((note) => (<Note key={note.id} note={note} onDelete={onDelete} />)) : <div className='nonotes text-center bg-gradient-to-r from-cyan-500 to-blue-500'><h1 className='text-3xl text-white'>No Notes to show</h1></div>}
          </div>
        </section>
      </main>
    </>
  )
}

export default Notes