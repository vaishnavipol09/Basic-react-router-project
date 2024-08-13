import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '',
        element: <Home />
      },

      {
        path: 'about',
        element: <About />
      },

      {
        path:  "contact",
        element: <Contact/>
      },

      {
        path:  "user/:userid",
        element: <User/>
      },

      {
        path:  "github",
        element: <Github/>
      }
    ]
  }
])

//const router = createBrowserRouter(
  //createRoutesFromElements(
    //<Route path="/" element={<Layout/>}>
    //<Route path="" element={<Home/>}/>
    //<Route path="/about" element={<About/>}/>
    //<Route path="/contact" element={<Contact/>}/>
    //</Route>
  //)
//)






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
