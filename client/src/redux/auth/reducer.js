import { createSlice } from "@reduxjs/toolkit";
import { authUserDetails } from "./initialState";

const authUserSlice = createSlice({
  name: "userAuthSlice",
  initialState: authUserDetails,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setIsUpdated: (state, action) => {
      state.isUpdated = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  setIsAuthenticated,
  setLoading,
  setError,
  setMessage,
  setIsUpdated,
  setUser,
} = authUserSlice.actions;

export default authUserSlice.reducer;
