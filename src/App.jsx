import { useContext, useEffect, useState} from "react" 
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Notes from './components/Notes/Notes'
import Dailies from './components/Dailies/Dailies'
import Todos from './components/Todos/Todos';
import Login from './components/login_register/login';
import PrivateRoute from './Utils/PrivateRoute';
import {AuthProvider} from './context/AuthContext';
import AuthContext from './context/AuthContext';

const App = () => {
  const { authTokens } = useContext(AuthContext);
  const [notes, setnotes] = useState([])
  const [dailies, setdailies] = useState([])
  const [todos, settodos] = useState([])

  //add notes
  const addNote = async (note) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/addnote/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note)
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      setnotes([...notes, data]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };
  
  //add daily
  const addDaily = (daily) => {
    const id = Math.floor(Math.random() * 1000 + 1)
    const newDaily = { id, ...daily }
    setdailies([...dailies, newDaily])
  }
  //delete daily
  const deleteDaily =async (id) => {
    await fetch(`http://127.0.0.1:8000/api/deletedailies/${id}/`, { method: 'DELETE' })
  setdailies(dailies.filter((daily)=>(daily.id !== id)));
  }

  //fetch todos
  const fetchTodos = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/todos/')
    const data = await res.json();
    settodos(data)
  }
  const doneTodos= async (id) => {
    await fetch(`http://127.0.0.1:8000/api/donetodo/${id}/`, {method:'DELETE'})
    settodos(todos.filter((todo)=>(todo.id!==id)))
  }
  
 
  //fetch Notes
  const fetchNotes = async () => {
     const res = await fetch('http://127.0.0.1:8000/api/notes/', {
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+String(authTokens.access) 
      }
  })
    const data = await res.json();
    setnotes(data)
  }

  //fetch Dailies
  const fetchDailies = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/dailies')
    const data = await res.json();
    if(res.status===200){
    setdailies(data)
    }else if(res.statusText==='Unauthorized'){
      logoutUser()
    }
  }



  useEffect(() => {
    fetchDailies(), fetchNotes(),fetchTodos()
  }, [])
  

  
//delete notes
const deleteNote = async (id) => {
  await fetch(`http://127.0.0.1:8000/api/delnotes/${id}/`, { method: 'DELETE' })
  setnotes(notes.filter((note)=>(note.id !== id)));
};

  return (
    <Router>
      <AuthProvider>
    <>
      <div className="container">
        <div className="header fixed">
           <header className="bg-blue-800 ">
             <Header /> 
          </header> 
        </div>
    <Routes>
        <Route element={<PrivateRoute/>}>
        <Route path='/notes' element={<Notes notes={notes} onDelete={deleteNote} onAdd={addNote} />}/>
        <Route path='/dailies' element={<Dailies dailies={dailies} onAdd={addDaily} onDelete={deleteDaily} />}/>
        <Route path='/todos' element={<Todos todos={todos} onDone={doneTodos}/>}/>
        </Route>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
      </div>
    </>
    </AuthProvider>
    </Router>
  )
}

export default App
