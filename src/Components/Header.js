import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from '../Utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { logo } from "../Utils/Constants";



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  
  const handleSignOut =()=>{
    signOut(auth).then(() => {
     
      
    }).catch((error) => {
      console.log(error);
    });
  }

    /*Logic to get currently signed In user and auth.
       So basically every time when user signin or signout this API will be called.
       and navigates to Sign In page or browse page*/
  
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
        const {uid, email , password , displayName, photoURL } = user;
        dispatch(addUser({uid:uid, email:email,password:password, displayName:displayName, photoURL:photoURL  }))
        navigate("/browse")
        } else {
        dispatch(removeUser());
        navigate("/")
     
        }
      });
    },[])



  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-44"
          src={logo}
          alt="netflix-logo"
        />
       { user && <div className="flex p-2">
          <img
            className="h-14 w-14 p-1"
            alt="userProfile"
            src={user.photoURL}
          />
          <button className="font-bold text-white hover:text-red-800" onClick={handleSignOut}>Sign Out</button>
        </div>}
      </div>
    </>
  );
};

export default Header;
