import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    listUser: {},
    informationUser: {},
  },
  reducers: {
    saveInforOfUser: (state, action) => {
      return {
        ...state,
        informationUser: action.payload,
      };
    },
    saveListUser: (state, action) => {
      return {
        ...state,
        listUser: action.payload,
      };
    },
  },
});

export const { saveInforOfUser, saveListUser } = userSlice.actions;
