import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState("");
  const [show, setShow] = useState(false);
  const callHome = async () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credential: "include",
      };
      const res = await fetch("/about", requestOptions);
      if (res.status != 200) {
        throw new Error("Invalid user");
      }
      const data = await res.json();
      setUserData(data);
      setShow(true);
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };
  useEffect(() => {
    callHome();
  }, []);
  return (
    <>
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close" />
                <div className="screen-header-button maximize" />
                <div className="screen-header-button minimize" />
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis" />
                <div className="screen-header-ellipsis" />
                <div className="screen-header-ellipsis" />
              </div>
            </div>
            {show ? (
              <>
                <div className="screen-body">
                  <div className="screen-body-item left">
                    <div className="app-title">
                      <span>Hi ,{userData.name}</span>
                      <span>Welcome back </span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="screen-body">
                  <div className="screen-body-item left">
                    <div className="app-title">
                      <span>MERN DEVELOPER</span>
                    </div>
                  </div>
                  <div className="screen-body-item right">
                    <div className="app-contact">
                      <NavLink className="links" to="/signin">
                        Login
                      </NavLink>
                    </div>
                    <br></br>
                    <div className="app-contact">
                      <NavLink className="links" to="/signup">
                        Create An Account
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
