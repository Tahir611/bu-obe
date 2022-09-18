import React from 'react';
import { useNavigate } from 'react-router';

const Logout = () => {
  const navigate = useNavigate();
  const handleClick = (e) =>{
    e.preventDefault();
    navigate('/login')
  }
  return (
    // <div>
    //   <button className='btn' onClick={handleClick}>Logout</button>
    // </div>

    <div>
      <div className="wrapper fadeInDown my-5 py-5">
        <div id="formContent">
          {/* Tabs Titles */}
          {/* Icon */}
          <div className="fadeIn first m-5">
           <h2 className='font-weight-light'>Are you sure you want to logout?</h2>
          </div>
          {/* Login Form */}
          <form className='mb-5'>
            {/* <input
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
            /> */}
             <button className='btn btn-primary' onClick={handleClick}>Logout</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Logout