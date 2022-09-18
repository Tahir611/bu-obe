import React from "react";
import { useNavigate } from "react-router";
import './login.css'

const Login = () => {
    const navigate = useNavigate();
    const handleClick = (e)=>{
        e.preventDefault();
        navigate('/dashboard')
    }
  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Tabs Titles */}
          {/* Icon */}
          <div className="fadeIn first">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
              id="icon"
              alt="User Icon"
            />
          </div>
          {/* Login Form */}
          <form>
            <input
              type="email"
              id="login"
              className="fadeIn second ml-5"
              name="login"
              placeholder="login"
              required
            />
            <input
              type="password"
              id="password"
              className="fadeIn third ml-5"
              name="login"
              placeholder="password"
              required
            />
            <input
              type="submit"
              className="fadeIn fourth btn btn-primary my-2"
              defaultValue="Log In"
              onClick={handleClick}
            />
          </form>
          {/* Remind Passowrd */}
          <div id="formFooter">
            <a className="underlineHover" href="forgotPassword">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
