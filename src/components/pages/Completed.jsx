import React from 'react';
// import { useNavigate } from 'react-router';
import "./dashboard.css";


const Completed = () => {
 
  return (
    <>
    <div className="container pt-5 mt-5">
        <div className="add-course">
          <span>Course</span>
          
        </div>

        <div className="container border pb-3">
          <div className="row pt-2 course-name">
            <div className="col-3">
              <h6>Course Code</h6>
            </div>
            <div className="col-3">
              <h6>Course Name</h6>
            </div>
            <div className="col-3">
              <h6>Programme</h6>
            </div>
            <div className="col-3">
              <h6>Completed Percentage</h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="course-description py-3 mt-3">
                <h5>No completed course yet</h5>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Completed