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

        {/* <div className="container border pb-3">
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
        </div> */}
        <div className="container border pb-3">
          <div className="row pt-2 mt-2 course-name">
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
          <div className="row pt-2 my-2 course-name">
            <div className="col-3">
              <p style={{ color: "blue" }}>SCB 2093</p>
            </div>
            <div className="col-3">
              <p>Software Engineering</p>
            </div>
            <div className="col-3">
              <p>BS CS (Hons.)</p>
            </div>
            <div className="col-3">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  100%
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-2 my-2 course-name">
            <div className="col-3">
              <p style={{ color: "blue" }}>SCB 2093</p>
            </div>
            <div className="col-3">
              <p>Software Engineering</p>
            </div>
            <div className="col-3">
              <p>BS CS (Hons.)</p>
            </div>
            <div className="col-3">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  100%
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col">
              <div className="course-description py-3 mt-3">
                <h5>No course yet</h5>
                <div className="center-btn mt-3">
                  <button className="btn btn-primary">Add New Course</button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Completed