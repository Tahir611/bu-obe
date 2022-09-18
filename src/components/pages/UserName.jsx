import React from "react";
import "./form.css";

const UserName = () => {
  return (
   

    <div>
      <div className="container">
        <div className="add-course">
          <span>Request Course</span>
        </div>

        <div className="container border pb-3">
          <div className="row">
            <div className="col-md-4">
              <div className="card-body text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
              </div>
            </div>
            <div className="col-md-8">
              <form>
                <label htmlFor="fname">Lecture Id</label>
                <input
                  type="text"
                  id="fname"
                  name="lectureId"
                  placeholder="1245412"
                  className="student-input"
                />
                <label htmlFor="lname">First Name</label>
                <input
                  type="text"
                  id="lname"
                  name="firstname"
                  placeholder="Your First name.."
                  className="student-input"
                />

                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                  className="student-input"
                />

                <div className="row">
                  <div className="col-3">
                    <label htmlFor="">Birthday</label>
                  </div>
                  <div className="col-3">
                    <label htmlFor="">Month</label>
                    <input type="number" className="student-input" />
                  </div>
                  <div className="col-3">
                  <label htmlFor="">Day</label>
                    <input type="number"  className="student-input"/>
                  </div>
                  <div className="col-3">
                  <label htmlFor="">Year</label>
                    <input type="number"  className="student-input"/>
                  </div>
                </div>
                

                <label htmlFor="lname">Gender</label>
                <input
                  type="text"
                  id="lname"
                  name="gender"
                  placeholder="Your Gender.."
                  className="student-input"
                />

                <label htmlFor="lname">Email</label>
                <input
                  type="email"
                  id="lname"
                  name="email"
                  placeholder="Your Email.."
                  className="student-input"
                />

                <label htmlFor="lname">Phone Number</label>
                <input
                  type="number"
                  id="lname"
                  name="number"
                  placeholder="Your Phone number.."
                  className="student-input"
                />

                <button className="btn btn-primary">Save</button>
                <button className="btn btn-outline-secondary ml-3">
                  cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserName;
