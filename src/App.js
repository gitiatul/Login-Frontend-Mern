import React, { createContext, useReducer } from "react";
import TopNavbar from "./components/TopNavbar";
import { Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Errorpage from "./components/Errorpage";
import Logout from "./components/Logout";
import "./App.css";
import { initialState, reducer } from "./reducer/useReducer";

export const UserContext = createContext();

const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<Errorpage />} />
      </Routes>
    </>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <TopNavbar />
        <Routing />
      </UserContext.Provider>
    </>
  );
};

export default App;
