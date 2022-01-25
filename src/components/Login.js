import React, { useEffect, useState ,useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import localStorage from "localStorage";
import { UserContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [apiData, setApiData] = useState("");

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    const res = await fetch("/signin", requestOptions);
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert(data.error);
    } else {
      setApiData(data.user);
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successfull");
      navigate("/about"); 
    }
  };

  useEffect(() => {
    localStorage.setItem("userdata", JSON.stringify(apiData));
  }, [apiData]);
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
                  <span>LOGIN</span>
                </div>
                <div className="app-contact">
                  <NavLink className="links" to="/signup">
                    Create An Account
                  </NavLink>
                </div>
              </div>
              <form method="POST" className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      type="email"
                      className="app-form-control"
                      placeholder="EMAIL"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      type="password"
                      className="app-form-control"
                      placeholder="PASSWORD"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button
                      className="app-form-button"
                      type="submit"
                      onClick={postData}
                    >
                      Login
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

export default Login;
