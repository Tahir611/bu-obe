import React from "react";
import { useNavigate } from "react-router";


const FirstPage = () => {
    
    const navigate = useNavigate();
    const handleClick = (e) => {
    e.preventDefault();
    navigate('/login')
    }

  return (
    <section className="p-5" style={{ backgroundColor: "black" }}>
      <div className="container p-5">
        <h2 className="text-white pb-4">BU-OBE</h2>
        <button className="btn btn-primary mb-5" onClick={handleClick}>Login</button>
      </div>
    </section>
  );
};

export default FirstPage;
