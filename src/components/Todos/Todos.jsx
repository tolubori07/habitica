import Todo from "./Todo"

const Todos = ({todos,onDone}) => {
  return (
    <main className="relative  todo-main">

<section className="relative top-64">
      <div className="container flex-col gap-10 dailies pb-10">
{todos.length >0 ? todos.map((todo)=>(<Todo todo={todo} key={todo.id} onDone={onDone}/>)): <div className='no-todos text-center bg-gradient-to-r from-[#00EAFF] via-[#4D3589]  to-[#0025CE] '><h1 className='text-3xl text-white'>No todos to show</h1></div>}
</div>
</section>
</main>
  )
}

export default Todos
