import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    informationUser: {},
  },
  reducers: {
    saveInforOfUser: (state, action) => {
      return {
        ...state,
        informationUser: action.payload,
      };
    },
  },
});

export const { saveInforOfUser } = userSlice.actions;
