import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import MoviesSlice from "./MoviesSlice";
import chatBotSlice from "./chatBotSlice";
import configSlice from "./configSlice";

const appStore = configureStore(  
    {
        reducer : {
            //different reducers from different slices.
            user : userReducer,
            movies : MoviesSlice,
            chatBot : chatBotSlice,
            config : configSlice,


        }
    }
    
)

export default appStore