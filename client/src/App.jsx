/* eslint-disable no-unused-vars */
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Login />
      </Provider>
    </>
  );
};

export default App;
