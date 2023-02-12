import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  IDEL: "idel",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  status: STATUS,
  updateData: [],
};

export const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    SetTheUpdateData: (state, action) => {
      state.updateData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SetTheUpdateData } = UserSlice.actions;

export default UserSlice.reducer;
