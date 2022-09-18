import React from 'react';
import { useNavigate } from 'react-router';

const Logout = () => {
  const navigate = useNavigate();
  const handleClick = (e) =>{
    e.preventDefault();
    navigate('/login')
  }
  return (
    <div>
      <button className='btn' onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Logout