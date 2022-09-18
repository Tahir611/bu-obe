import React from "react";
import { useState } from "react";

import {
  BiUserCircle,
  BiGridAlt,
  BiMenu,
  BiListCheck,
  BiListPlus,
  BiGroup,
  BiMessageSquareDetail,
  // BiFile,
  BiLogOut,
  BiKey,
  // BiListUl
} from "react-icons/bi";


import { IoIosArrowRoundBack } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/firstpage')
  }
 
  const menuItem = [
    {
      path: "/username",
      name: "User Name",
      icon: <BiUserCircle />,
    },
    {
      path: "/",
      name: "dashboard",
      icon: <BiGridAlt />,
    },
    // {
    //   path: "/courses",
    //   name: "Courses",
    //   icon: <BiListUl />,
    // },
    {
      path: "/completed",
      name: "Completed",
      icon: <BiListCheck />,
    },
    {
      path: "/uncompleted",
      name: "UnCompleted",
      icon: <BiListPlus />,
    },
    {
      path: "/manageStudents",
      name: "Manage Students",
      icon: <BiGroup />,
    },
    // {
    //   path: "/requests",
    //   name: "Requests",
    //   icon: <BiMessageSquareDetail />,
    // },
    {
        path: "/myRequests",
        name: "My Requests",
        icon: <BiMessageSquareDetail />,
    },

    {
        path: "/otherRequests",
        name: "Other Requests",
        icon: <BiMessageSquareDetail />,
      },

    // {
    //   path: "/reports",
    //   name: "Reports",
    //   icon: <BiFile />,
    // },
    {
      path: "/resetPassword",
      name: "Reset Password",
      icon: <BiKey />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <BiLogOut />,
    },
  ];

  return (
    <>
      <div className="nav-container">
        <div style={{ width: isOpen ? "300px" : "70px" }} className="sidebar">
          <div className="topsection">
            <h1
              style={{ display: isOpen ? "inline-block" : "none" }}
              className="logo"
            >
              <button className="btn text-white" onClick={handleClick}>BU-OBE</button>
            </h1>
            <div style={{ marginLeft: isOpen ? "50px" : "0" }} className="bars">
              {/* <ImCross onClick={toggle}/> */}
              {isOpen ? (
                <IoIosArrowRoundBack onClick={toggle} />
              ) : (
                <BiMenu onClick={toggle} />
              )}
            </div>
          </div>
          {menuItem.map((item, i) => {
            return (
              <NavLink to={item.path} key={i} className="link">
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link-text"
                >
                  {item.name}
                </div>
              </NavLink>
            );
          })}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
