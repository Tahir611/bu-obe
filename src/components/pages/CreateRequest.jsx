import React from "react";
import "./form.css";
import  "./dashboard.css";
const CreateRequest = () => {
  return (
    <div>
      <div className="container pt-5 mt-5">
        <div className="add-course">
          <span>Request Course</span>
        </div>

        <div className="container border pb-3">
          <form>
            <label htmlFor="fname">Lecture 3</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              
            />
            <label htmlFor="lname">Course</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label htmlFor="lname">Message</label>
            <textarea></textarea>

            <button className="btn btn-primary">Post Request</button>
            <button className="btn btn-outline-secondary ml-3">cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRequest;
