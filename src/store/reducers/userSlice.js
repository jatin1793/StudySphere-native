import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userdata: null,
};

const UserSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    userData: (state, action) => {
      state.userdata = action.payload;
    },
    clearuserData: (state) => {
      state.userdata = null;
    },
  },
});

export const { userData, clearuserData } = UserSlice.actions;
export default UserSlice.reducer;
