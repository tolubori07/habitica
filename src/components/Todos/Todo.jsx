const Todo = ({todo,onDone}) => {
  return (
    <div className="todo-container bg-slate-800 relative w-[40%] mb-5 text-white p-5 rounded-lg">
      <input type="checkbox" name="" id="" onChange={()=>(onDone(todo.id))}/>
      <label htmlFor="">{todo.text}</label>
    </div>
  )
}

export default Todo