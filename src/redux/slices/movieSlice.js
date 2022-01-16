import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    listOfMovies: {},
    informationOfMovie: {},
    detailMovie: {},
    informationShowTimes: {},
    informationSeat: {},
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
    saveDetailMovie: (state, action) => {
      return {
        ...state,
        detailMovie: action.payload,
      };
    },
    saveInformationShowTimes: (state, action) => {
      return {
        ...state,
        informationShowTimes: action.payload,
      };
    },
    saveInformationSeat: (state, action) => {
      return {
        ...state,
        informationSeat: action.payload,
      };
    },
  },
});

export const {
  saveListOfMovies,
  saveInformationOfMovie,
  saveDetailMovie,
  saveInformationShowTimes,
  saveInformationSeat,
} = movieSlice.actions;
