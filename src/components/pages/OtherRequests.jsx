import React from "react";

const OtherRequests = () => {
  return (
    <>
      <div className="container pt-5 mt-5">
        <div className="add-course">
          <span>Request List</span>
          <button className="btn btn-primary btn-sm">Add New Request</button>
        </div>

        <div className="container border pb-3">
          <div className="row pt-2 mt-2 course-name">
            <div className="col-6">
              <div className="row">
                <div className="col-4">
                  <h6>Course Code</h6>
                </div>
                <div className="col-4">
                  <h6>Course Name</h6>
                </div>
                <div className="col-4">
                  <h6>Programme</h6>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-4">
                  <h6>Course Code</h6>
                </div>
                <div className="col-4">
                  <h6>Course Name</h6>
                </div>
                <div className="col-4">
                  <h6>Programme</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
                no request yet
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
  );
};

export default OtherRequests;
