import { createSlice } from "@reduxjs/toolkit";

export const assetSlice = createSlice({
  name: "asset",
  initialState: {
    loading: false,
  },
  reducers: {
    changeStatusLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
});

export const { changeStatusLoading } = assetSlice.actions;
