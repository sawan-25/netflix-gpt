import React, { useEffect } from 'react'


import Browse from './Browse'
import SignIn from './SignIn'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import { useDispatch } from 'react-redux';



const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path:"/" ,
      element:<SignIn/>
    },
    {
      path:"/browse",
      element:<Browse/>
    },
  ])



  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body