import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Share from './pages/Share.jsx'
import { AuthProvider } from './Contextprovider/AuthProvider.jsx'
import { SearchProvider } from './Contextprovider/SearchProvider.jsx'
import Movie from './pages/Movie.jsx'

const Layout = () => {
  return (
    <div >
      <Navbar/>
      <Outlet />
    </div>
  )

}

const router = createBrowserRouter(
  [{
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path:'share/:id',
        element: <Share />,
      },
      {
        path:'movie/:id',
        element: <Movie />,
      }
    ],
  }]

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <SearchProvider>
  <RouterProvider router={router}/>
  </SearchProvider>
  </AuthProvider>

)
