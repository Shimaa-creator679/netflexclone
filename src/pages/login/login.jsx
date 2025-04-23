import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./login.css";
import { signup, signin } from "../../firebase";

import netflex from "../../assets/netflix_spinner.gif"


const Login = () => {


  const [signstate, setsignstate] = useState("sign in");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const[loading,setloading]=useState(false)

  const user_auth = async (event) => {
    event.preventDefault();
  
    try {
        setloading(true)
      if (signstate === "sign in") {
      
        await signin(email, password);
        
      }  else if (signstate === "sign up") {
        await signup(name, email, password);
      }

      setloading(false)
    } catch (error) {
      console.error("Authentication error:", error.message);

    }
  };

  return (
    loading? <div className="spinner">

      <img src={netflex}></img>
    </div>:

   
    <div className="login">
      <img src={logo}></img>
      <div className="loginForm">
        <h1>{signstate} </h1>
        <form>
          {signstate === "sign up" ? (
            <input
              type="text"
              placeholder="enter your name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            placeholder="enter your email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="enter your pass"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button onClick={user_auth} type="submit">
            {signstate}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">remember me </label>
            </div>
            <h1>need help</h1>
          </div>

          <div className="form-switch">
            {signstate === "sign up" ? (
              <h1>
                already have email?
                <span
                  onClick={() => {
                    setsignstate("sign in");
                  }}>
                  sign in now
                </span>
              </h1>
            ) : (
              <h1>
                new to netflex?
                <span
                  onClick={() => {
                    setsignstate("sign up");
                  }}>
                  sign up now
                </span>
              </h1>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
