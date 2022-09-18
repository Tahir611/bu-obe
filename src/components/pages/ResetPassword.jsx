import React from 'react';
import { useNavigate } from "react-router";
import '../pages/login/login.css';

const ResetPassword = () => {

  const navigate = useNavigate();
    const handleClick = (e)=>{
        e.preventDefault();
        navigate('/login')
    }
  return (
    <div>
      <div className="wrapper fadeInDown my-5 py-5">
        <div id="formContent">
          {/* Tabs Titles */}
          {/* Icon */}
          <div className="fadeIn first m-5">
           <h2>Reset Password</h2>
          </div>
          {/* Login Form */}
          <form>
            <input
              type="password"
              id="login"
              className="fadeIn second ml-5"
              name="login"
              placeholder="password"
              required
            />
            <input
              type="password"
              id="password"
              className="fadeIn third ml-5"
              name="login"
              placeholder="confirm password"
              required
            />
            <input
              type="submit"
              className="fadeIn fourth btn btn-primary my-2"
              defaultValue="Log In"
              onClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword