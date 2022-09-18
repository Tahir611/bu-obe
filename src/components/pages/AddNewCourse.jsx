import React from "react";
import { useNavigate } from "react-router";
import "./form.css";

const AddNewCourse = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/courseinformation')
  };
  return (
    <div>
      <div className="container pt-5 mt-5">
        <div className="add-course">
          <span>Course Information</span>
        </div>

        <div className="container border pb-3">
          <form>
            <label htmlFor="fname">School</label>
            <input
              type="text"
              id="fname"
              name="school"
              placeholder="enter school name.."
            />
            <label htmlFor="lname">Department</label>
            <input
              type="text"
              id="lname"
              name="department"
              placeholder="enter department.."
            />

            <label htmlFor="lname">Programme</label>
            <input
              type="text"
              id="programme"
              name="lastname"
              placeholder="enter programme.."
            />

            <label htmlFor="lname">Course</label>
            <input
              type="text"
              id="lname"
              name="course"
              placeholder="enter course.."
            />

            <button className="btn btn-primary" onClick={handleClick}>
              Save Course Information
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCourse;
