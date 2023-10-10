/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Notes from './components/Notes/Notes'
import Dailies from './components/Dailies/Dailies'
import Todos from './components/Todos/Todos';
const App = () => {
  const [notes, setnotes] = useState([])
  const [dailies, setdailies] = useState([])
  const [todos, settodos] = useState([])



  
  //add notes
  const addNote = (note) => {
    const id = Math.floor(Math.random() * 1000 + 1)
    const newNote = { id, ...note }
    setnotes([...notes, newNote])
  }
  //add daily
  const addDaily = (daily) => {
    const id = Math.floor(Math.random() * 1000 + 1)
    const newDaily = { id, ...daily }
    setdailies([...dailies, newDaily])
  }
  //delete daily
  const deleteDaily = (id) => {
    setdailies(dailies.filter((daily) => (daily.id !== id)));
  }

  //fetch todos
  const fetchTodos = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/todos')
    const data = await res.json();
    return data
  }

  //fetch Users
  const getUsers = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/users')
    const data = await res.json();
    return data
  }

  //fetch Notes
  const fetchNotes = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/notes')
    const data = await res.json();
    return data
  }

  //fetch Dailies
  const fetchDailies = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/dailies')
    const data = await res.json();
    return data
  }
  useEffect(() => {
    const getNotes = async () => {
      const NotesFromServer = await fetchNotes()
      setnotes(NotesFromServer)
    }

    const getDailies = async () => {
      const DailiesFromServer = await fetchDailies()
      setdailies(DailiesFromServer)
    }

    const getTodos = async () => {
      const TodosFromServer = await fetchTodos()
      settodos(TodosFromServer)
    }
    getDailies(), getNotes()
  }, [])
//delete notes
const deleteNote = async (id) => {
  await fetch(`http://127.0.0.1:8000/api/note/${id}/`, { method: 'Delete' })
  setnotes(notes.filter((note) => note.id !== id));
};

  return (
    <Router>
    <>
      <div className="container">
        <div className="header fixed">
          <header className="backdrop-blur-[40px] bg-[#ffffff29] ">
            <Header />
          </header>
        </div>
    <Routes>
        <Route path='/notes' element={<Notes notes={notes} onDelete={deleteNote} onAdd={addNote} />}/>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/dailies' element={<Dailies dailies={dailies} onAdd={addDaily} onDelete={deleteDaily} />}/>
        <Route path='/todos' element={<Todos/>}/>
    </Routes>
      </div>
    </>
    </Router>
  )
}

export default App