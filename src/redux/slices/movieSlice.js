import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    listOfMovies: {},
    informationOfMovie: {},
  },
  reducers: {
    saveListOfMovies: (state, action) => {
      return {
        ...state,
        listOfMovies: action.payload,
      };
    },
    saveInformationOfMovie: (state, action) => {
      return {
        ...state,
        informationOfMovie: action.payload,
      };
    },
  },
});

export const { saveListOfMovies, saveInformationOfMovie } = movieSlice.actions;
