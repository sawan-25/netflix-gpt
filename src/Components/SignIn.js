import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../Utils/validate";
import { auth } from "../Utils/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";

const SignIn = () => {

  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBtnClick = () => {
    const validationMsg = checkValidData(
      email.current.value,
      password.current.value,
      // name.current.value
    );
    // console.log("Name------->", name.current.value);
    // console.log("Email------->", email.current.value);
    // console.log("Password----->", password.current.value);
    // console.log(validationMsg);
    setErrorMessage(validationMsg);

    //logic : if there is any validation message (Invalid inputs) then it will stick to it it will return nothing.
    if (validationMsg) return;

    //logic: if no validation msg means all inputs were valid, we will write signIn/SignUp logic then.
    if (!isSignedIn) {
      //Sign Up page Logic
      
      createUserWithEmailAndPassword(               //firebase api to create a user
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user,{
            displayName: name.current.value , photoURL: "https://avatars.githubusercontent.com/u/85439074?u=15b2107fa4cb5ae3db8237aa0f914ce830fa1ac8&v=4"
          }).then(() => {

            /* dispatching addUser action because now also we need to update the user who's
             profile has been created with dispaly name and photoURL.*/
            
             const {uid, email , password , displayName, photoURL } = user;
            dispatch(addUser({uid:uid, email:email,password:password, displayName:displayName, photoURL:photoURL  }))
             
            
          }).catch((error) => {
            setErrorMessage(error.message)
            
          });
     
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else 
    {
      //Sign In page Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
        });
    }
  };

  const handleSignInToggle = () => {
    setIsSignedIn(!isSignedIn);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background-Image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-black my-36 mx-auto left-0 right-0 text-white p-12 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 my-2">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 my-4  w-full bg-gray-700 rounded-lg"
          type="password"
          placeholder="Password"
        />

        <p className="text-red-800 font-semibold">{errorMessage}</p>

        <button
          onClick={handleBtnClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6">
          {isSignedIn ? "New to Netflix" : "Already a User"} ?{" "}
          <span onClick={handleSignInToggle} className="text-lg cursor-pointer">
            {isSignedIn ? "Sign up now" : "Sign in now"}
          </span>
        </p>
      </form>
      s
    </>
  );
};

export default SignIn;
