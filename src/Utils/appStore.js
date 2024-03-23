import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import MoviesSlice from "./MoviesSlice";

const appStore = configureStore(  
    {
        reducer : {
            //different reducers from different slices.
            user : userReducer,
            movies : MoviesSlice,

        }
    }
    
)

export default appStore