/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './components/Homepage.jsx';
import Header from './components/Header.jsx';
import Notes from './components/Notes/Notes.jsx';
import Dailies from './components/Dailies/Dailies.jsx';
import Todo from './components/Todos/Todo.jsx';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>
//   },
//   {
//     path: "/notes",
//     element: <Notes/>
//   },
//   {
//     path: "/dailies",
//     element: <Dailies/>
//   },
//   {
//     path: "/todo",
//     element: <Todo/>
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
      {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
