/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  setIsAuthenticated,
  setLoading,
  setError,
  setMessage,
  setIsUpdated,
  setToken,
  setUser,
} from "./reducer.js";

const provideAuthDetailsForUser = () => {
  const dispatch = useDispatch();
  return {
    setEmail: (email) => dispatch(setEmail(email)),
    setPassword: (password) => dispatch(setPassword(password)),
    setIsAuthenticated: (isAuthenticate) =>
      dispatch(setIsAuthenticated(isAuthenticate)),
    setLoading: (loading) => dispatch(setLoading(loading)),
    setError: (error) => dispatch(setError(error)),
    setMessage: (message) => dispatch(setMessage(message)),
    setIsUpdated: (isUpdated) => dispatch(setIsUpdated(isUpdated)),
    setToken: (token) => dispatch(setToken(token)),
    setUser: (user) => dispatch(setUser(user)),
  };
};

export default provideAuthDetailsForUser;
