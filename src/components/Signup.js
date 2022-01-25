import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, work, phone, password, cpassword } = user;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, work, phone, password, cpassword }),
    };
    const res = await fetch("/register", requestOptions);
    const data = await res.json();
    if (res.status === 422) {
      window.alert(data.error);
    } else {
      window.alert("REGISTRATION SUCCESSFULL");
      navigate("/signin");
    }
  };
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
                  <span>SIGNUP</span>
                </div>
                <div className="app-contact">
                  <NavLink className="links" to="/signin">
                    I Already Have An Account
                  </NavLink>
                </div>
              </div>
              <form method="POST" className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      type="text"
                      name="name"
                      className="app-form-control"
                      placeholder="NAME"
                      value={user.name}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      type="email"
                      name="email"
                      className="app-form-control"
                      placeholder="EMAIL"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      type="number"
                      name="phone"
                      className="app-form-control"
                      placeholder="CONTACT NO"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      type="text"
                      name="work"
                      className="app-form-control"
                      placeholder="WORK"
                      value={user.work}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      type="password"
                      name="password"
                      className="app-form-control"
                      placeholder="PASSWORD"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      type="password"
                      name="cpassword"
                      className="app-form-control"
                      placeholder="CONFIRM PASSWORD"
                      value={user.cpassword}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button
                      type="submit"
                      onClick={postData}
                      className="app-form-button"
                    >
                      Signup
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
