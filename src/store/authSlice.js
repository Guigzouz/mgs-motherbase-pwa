import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    jwt: null,
  },
  reducers: {
    setJwt: (state, action) => {
      state.jwt = action.payload;
    },
    clearJwt: (state) => {
      state.jwt = null;
    },
  },
});

//Export actions
export const { setJwt, clearJwt } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
