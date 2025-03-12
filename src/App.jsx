import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ToDo from './components/ToDo'

const router = createBrowserRouter([
  {
    path:'/',
    element: <div className='bg-gray-900'>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path:'/todos',
    element: <div className=' bg-gray-900'>
      <Navbar/>
      <ToDo/>
    </div>
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App