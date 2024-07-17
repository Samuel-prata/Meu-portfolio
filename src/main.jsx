import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Principal from './Components/bodyPrincipal/Principal.jsx';
import AboutMe from './Components/aboutMe/AboutMe.jsx';
import Tech from './Components/tecnologies/Tech.jsx';
import Cards from './Components/cards/Cards.jsx';
import Projects from './Components/projects/Projects.jsx';
import Contact from './Components/contact/Contact.jsx';

const Router = createBrowserRouter([
  {
    path:'/',
    element: <Principal/>
  },
  {
    path:'/sobre-mim',
    element: <AboutMe/>
  },
  {
    path:'/tecnologias',
    element: <Tech />
  },
  {
    path:'/cards',
    element: <Cards />
  },
  {
    path:'/projetos',
    element: <Projects />
  },
  {
    path:'/contato',
    element: <Contact />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>,
)
