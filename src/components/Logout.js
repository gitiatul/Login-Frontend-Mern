import React, { useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credential: "include",
      };
      const res = await fetch("/logout", requestOptions);
      if (res.status != 200) {
        throw new Error("LOGOUT ERROR");
      }
      dispatch({ type: "USER", payload: false });
      navigate("/signin");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    logout();
  });
  return <></>;
};

export default Logout;
