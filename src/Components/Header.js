import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";



const Header = () => {
  const navigate = useNavigate();
  
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      navigate("/");
      
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
        <div className="flex p-2">
          <img
            className="h-12 w-12 p-1"
            alt="userProfile"
            src="https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABcLtVOXjghzlDrVwmPHGQtkXjoJPmpISBttze62ZpxaaFWq-LZVH5yZxMD15UVLU6nd4GIUtTSHOMsbUOdPCIYRL2-2bGNU.png?r=b38"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    </>
  );
};

export default Header;
