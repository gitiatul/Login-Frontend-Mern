import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
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
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>ERROR 404</span>
                  <span>PAGE NOT FOUND</span>
                </div>
                <div className="app-contact">
                  <NavLink className="links" to="/">
                    HomePage
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
