import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"

const appStore = configureStore(  
    {
        reducer : {
            //different reducers from different slices.
            user : userReducer,

        }
    }
    
)

export default appStore