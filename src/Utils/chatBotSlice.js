import { createSlice } from "@reduxjs/toolkit";

const chatBotSlice = createSlice({
    name : "chatBot",
    initialState :{
        showChatBot : false,
    },

    reducers:{
        toggleShowChatBot : (state)=>{
            //toggle logic to make state false to true and vice versa.
            state.showChatBot = !state.showChatBot
        }
    }

})

export const {toggleShowChatBot} = chatBotSlice.actions;
export default chatBotSlice.reducer;