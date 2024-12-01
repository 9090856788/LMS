import { configureStore } from "@reduxjs/toolkit";

// reducers
import authUserReducer from "./auth/reducer";

//initialState
import { authUserDetails } from "./auth/initialState";

export const RootState = {
  authUserLoginDetails: authUserDetails,
};
export const store = configureStore({
  reducer: {
    authUserLoginDetails: authUserReducer,
  },
});
