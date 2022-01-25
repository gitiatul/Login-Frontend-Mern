import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState("");
  const callAboutMe = async () => {
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
        throw new Error("please login");
      }
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      console.log(err);
      navigate("/signin");
    }
  };
  useEffect(() => {
    callAboutMe();
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
            <div className="screen-body">
              <div className="card-container">
                <span className="pro">PRO</span>
                <img
                  className="round"
                  width="100px"
                  height="100px"
                  src="https://pixabay.com/get/g2b9a02c3e6f3cc87cfa24199a6058f5ce3d63e3beb6544cbb864128217360bc74a429467d4ee5a7d60030b1bf4da3e142c3c3db9aa2f97f825f5a8ad5cf5cf849db4edef8d94b5d7ff217bacc3f1cd0c_1280.png"
                  alt="user"
                />
                <h3>{userData.name}</h3>
                <h6>{userData._id}</h6>
                <h6>{userData.email}</h6>
                <h6>{userData.phone}</h6>
                <p>{userData.work}</p>
                <div className="buttons">
                  <button
                    type="button"
                    style={{ marginRight: "10px" }}
                    className="btn btn-outline-primary"
                  >
                    <NavLink className="links" to="/contact">
                      Contact
                    </NavLink>
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    <NavLink className="links" to="#">
                      FOLLOW
                    </NavLink> 
                  </button>
                </div>
                <div className="skills">
                  <h6>Skills</h6>
                  <ul>
                    <li>UI / UX</li>
                    <li>Front End Development</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
