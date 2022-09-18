import React from 'react';
import "./dashboard.css";
import './form.css';
import { useState } from "react";
import Modal from "react-modal";
import {
  BiTrash,
  BiPencil
} from "react-icons/bi";
import { useNavigate } from 'react-router';


Modal.setAppElement("#root");
const CourseInformation = () => {

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

      const navigate = useNavigate();
      const handleClick = (e) =>{
        e.preventDefault();
        navigate('/assessment')
      }
  return (
    <div>
        <div className="container mt-5">
        <div className="add-course">
          <span>Course Plan</span>
        </div>

        <div className="container border pb-3">
          <div className='row'>
            <div className='col-6'>
                <div className='col py-2'>
                    PPROGRAMME
                </div>
                <div className='col pb-2'>
                    COURSE CODE
                </div>
                <div className='col pb-2'>
                    COURSE NAME
                </div>
                <div className='col pb-2'>
                    SEMESTER
                </div>
                <div className='col pb-2'>
                    INTAKE BATCH
                </div>
                <div className='col pb-2'>
                    LECTURER
                </div>
                <div className='col'>
                    COURSE TYPE
                </div>
            </div>

            <div className='col-6'>
                <div className='col  py-2'>
                    Bechelor of Computer Science (Hons) 
                </div>
                <div className='col  pb-2'>
                    SCB 2093
                </div>
                <div className='col  pb-2'>
                    Software Engieering
                </div>
                <div className='col  pb-2'>
                    3
                </div>
                <div className='col  pb-2'>
                    AUGUST & OCT 2020
                </div>
                <div className='col  pb-2'>
                    Rehan
                </div>
                <div className='col'>
                    Theory (only)
                </div>
            </div>
          </div>
        </div>
      </div>



      <div className="modal">
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <h3 className="font-weight-lighter">Students Information</h3>
          <form>
            <label htmlFor="fname">Plo</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              className="student-input"
            />
            <label htmlFor="lname">Clo Code</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              className="student-input"
            />
            <label htmlFor="lname">Clo Description</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              className="student-input"
            />
            
            
            
            <button className="btn btn-primary">Save Map</button>
            
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



      <div className="container mt-2">
        <div className="add-course">
          <span>CLO to PLO Mapping</span>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            Create New Map
          </button>
        </div>

        <div className="container border pb-3 pt-5">
          
          

          <div className="row course-name">
            <div className='col-6'>
                <h6>Programme Learning Outcome</h6>
            </div>

            <div className='col-6'>
                <h6>Course Learning Outcome</h6>
            </div>
          </div>

          {/* <div className="row">
            <div className="col">no request yet</div>
          </div> */}

          {/* <div className="row">
            <div className="col">
              <div className="course-description py-3 mt-3">
                <h5>Create New Map</h5>
                <div className="center-btn mt-3">
                  <button className="btn btn-primary" onClick={() => {
              setModalIsOpen(true);
            }}>Create New Map</button>
                </div>
              </div>
            </div>
          </div> */}

          

          <div className='row py-2 course-name'>
            <div className="col-6">PLO1_[WA1]Engieering Knowledge</div>
            <div className="col-6">CLO_1 Impleent the theoratical concepts <BiPencil className='ml-5'/> <BiTrash className='ml-3'/> </div>
          </div>
          <div className='row py-2 course-name'>
            <div className="col-6">PLO1_[WA1]Engieering Knowledge</div>
            <div className="col-6">CLO_1 Impleent the theoratical concepts <BiPencil className='ml-5'/> <BiTrash className='ml-3'/> </div>
          </div>
          <button className='btn btn-primary btn-sm mt-2' onClick={handleClick}>Continue to fill Assessment Information</button>
        </div>
      </div>

    </div>
  )
}

export default CourseInformation