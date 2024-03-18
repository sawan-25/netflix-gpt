import React, { useEffect } from 'react'


import Browse from './Browse'
import SignIn from './SignIn'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';


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

  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
      const {uid, email , password} = user;
      dispatch(addUser({uid:uid, email:email,password:password}))

      } else {
      dispatch(removeUser());
   
      }
    });
  },)

  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body