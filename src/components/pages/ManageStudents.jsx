import React from "react";
import "./dashboard.css";
import './form.css';
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const ManageStudents = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "20%",
      // bottom: 'auto',
      // marginRight: '-50%',
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className="modal">
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <h3 className="font-weight-lighter">Students Information</h3>
          <form>
            <label htmlFor="fname">Student Id</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              className="student-input"
            />
            <label htmlFor="lname">Full Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              className="student-input"
            />
            <label htmlFor="lname">Gender</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              className="student-input"
            />
            <label htmlFor="lname">Email</label>
            <input
              type="email"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              className="student-input"
            />
            <label htmlFor="lname">Current semester</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              className="student-input"
            />
            <label htmlFor="lname">Current Courses</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              className="student-input"
            />
            <button className="btn btn-primary">Add Student</button>
            
          </form>

          <button
            className="btn btn-outline-secondary mt-3"
            onClick={() => {
              setModalIsOpen(false);
            }}
          >
            close
          </button>
        </Modal>
      </div>
      <div className="container pt-5 mt-5">
        <div className="add-course">
          <span>Student</span>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            Add New student
          </button>
        </div>

        <div className="container border pb-3 pt-5">
          <div className="row course-name">
            <div className="col"></div>
          </div>

          <div className="main course-name pb-3">
            {/* Another variation with a button */}
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search students by Id"
              />
              <div className="input-group-append">
                <button className="btn btn-secondary search-btn" type="button">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </div>

          <div className="row pt-2 mt-2 course-name">
            <div className="col-2">
              <h6>Student Id</h6>
            </div>
            <div className="col-2">
              <h6>Full Name</h6>
            </div>
            <div className="col-2">
              <h6>Gender</h6>
            </div>
            <div className="col-2">
              <h6>Email</h6>
            </div>
            <div className="col-2">
              <h6>Current Semester</h6>
            </div>
            <div className="col-2">
              <h6>Current Courses</h6>
            </div>
          </div>

          {/* <div className="row">
            <div className="col">no request yet</div>
          </div> */}

          <div className="row">
            <div className="col">
              <div className="course-description py-3 mt-3">
                <h5>No student yet</h5>
                <div className="center-btn mt-3">
                  <button className="btn btn-primary" onClick={() => {
              setModalIsOpen(true);
            }}>Add New Student</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageStudents;
