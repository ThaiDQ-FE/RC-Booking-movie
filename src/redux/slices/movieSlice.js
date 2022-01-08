import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    listOfMovies: {},
  },
  reducers: {
    saveListOfMovies: (state, action) => {
      return {
        ...state,
        listOfMovies: action.payload,
      };
    },
  },
});

export const { saveListOfMovies } = movieSlice.actions;
