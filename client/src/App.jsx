/* eslint-disable no-unused-vars */
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
