import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Share from './pages/Share.jsx'
import { AuthProvider } from './Contextprovider/AuthProvider.jsx'
import { SearchProvider } from './Contextprovider/SearchProvider.jsx'
import Movie from './pages/Movie.jsx'
import Playlist from './pages/Playlist.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import { Toaster } from "@/components/ui/toaster"
import PlaylistView from './pages/PlaylistView.jsx'



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
        path:"/Sign-in",
        element:<SignIn/>
      },
      {
        path:"/Sign-up",
        element:<SignUp/>
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
      },{
        path:"playlist",
        element:<Playlist/>
      },
      {
        path:"playlist/:id",
        element:<PlaylistView/>
      }
    ],
  }]

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <SearchProvider>
      
  <RouterProvider router={router}/>
  <Toaster />
  </SearchProvider>
  </AuthProvider>

)
