/* eslint-disable react/prop-types */

const Note = ({note,onDelete}) => {
  
  return (
   <>
      <div className="stickynote bg-yellow-300 h-44 w-44 ml-36"><p className="text-lg text-center"><button onClick={()=>(onDelete(note.id))}>📌</button>{note.text}</p> </div>
   </>
  )
}

export default Note