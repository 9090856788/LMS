import { configureStore } from "@reduxjs/toolkit";

// reducers
import authUserReducer from "./auth/reducer";

// initialState
import { authUserDetails } from "./auth/initialState";

// RTK Query API slice
import { apiSlice } from "./api/apiSlice.js"; // Assuming you created an `apiSlice.js`

export const RootState = {
  authUserLoginDetails: authUserDetails,
};

export const store = configureStore({
  reducer: {
    authUserLoginDetails: authUserReducer, // Your existing user reducer
    [apiSlice.reducerPath]: apiSlice.reducer, // Add RTK Query's API slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add RTK Query middleware
});
