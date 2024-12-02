/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch } from "react-redux";
import {
  setIsAuthenticated,
  setLoading,
  setError,
  setMessage,
  setIsUpdated,
  setUser,
} from "./reducer.js";

const provideAuthDetailsForUser = () => {
  const dispatch = useDispatch();
  return {
    setIsAuthenticated: (isAuthenticate) =>
      dispatch(setIsAuthenticated(isAuthenticate)),
    setLoading: (loading) => dispatch(setLoading(loading)),
    setError: (error) => dispatch(setError(error)),
    setMessage: (message) => dispatch(setMessage(message)),
    setIsUpdated: (isUpdated) => dispatch(setIsUpdated(isUpdated)),
    setUser: (user) => dispatch(setUser(user)),
  };
};

export default provideAuthDetailsForUser;
