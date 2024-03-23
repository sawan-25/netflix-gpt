import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name : "movies",
    initialState: {
        nowPlayingMovies: null,
        mainTrailerVideo : null
    },
    reducers:{
        addNowPlayingMovies : (state, action)=>{
            state.nowPlayingMovies= action.payload;
        },
        addMainTrailerVideo : (state, action) =>{
            state.mainTrailerVideo = action.payload;
        },
    },
});

export const {addNowPlayingMovies , addMainTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;