import { createSlice } from "@reduxjs/toolkit";

const configSlice =  createSlice ({
    name : "config",
    initialState : {
            currentLanguauge : "en"
    },
    reducers : {
        changeLanguauge : (state , action)=>{
            state.currentLanguauge = action.payload;
        }
    }
})

export  const {changeLanguauge} =configSlice.actions;
export default configSlice.reducer;