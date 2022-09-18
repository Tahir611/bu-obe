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
const Asssessment = () => {

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
        // navigate('/assessment')
      }
  return (
    <div>
        <div className="container mt-5">
        <div className="add-course">
          <span>Course Plan</span>
        </div>

        <div className="container border pb-3">
          <div className='row'>
            <div className='col-3'>
                <div className='col py-2' style={{fontSize: '14px'}}>
                    PPROGRAMME 
                    DESCRIPTION
                </div>
                <div className='col pb-2' style={{fontSize: '14px'}}>
                    COURSE CODE

                </div>
                <div className='col pb-2' style={{fontSize: '14px'}}>
                    COURSE NAME
                </div>
                <div className='col pb-2' style={{fontSize: '14px'}}>
                    SEMESTER
                </div>
                <div className='col pb-2' style={{fontSize: '14px'}}>
                    INTAKE BATCH
                </div>
                <div className='col pb-2' style={{fontSize: '14px'}}>
                    LECTURER
                </div>
                <div className='col' style={{fontSize: '14px'}}>
                    COURSE TYPE
                </div>
            </div>

            <div className='col-3'>
                <div className='col  py-2' style={{fontSize: '14px'}}>
                    Bechelor of Computer Science (Hons) 
                </div>
                <div className='col  pb-2' style={{fontSize: '14px'}}>
                    SCB 2093
                </div>
                <div className='col  pb-2' style={{fontSize: '14px'}}>
                    Software Engieering
                </div>
                <div className='col  pb-2' style={{fontSize: '14px'}}>
                    3
                </div>
                <div className='col  pb-2' style={{fontSize: '14px'}}>
                    AUGUST & OCT 2020
                </div>
                <div className='col  pb-2' style={{fontSize: '14px'}}>
                    Rehan
                </div>
                <div className='col' style={{fontSize: '14px'}}>
                    Theory (only)
                </div>
            </div>
            <div className="col-6 pt-4" >
               <div>
               <h6>
                    CLO to PLO Mapping
                </h6>
               </div>
               <div className='row course-name pt-2' style={{fontSize: '11px',fontWeight: 'bold'}}>
                <div className='col-6'>Programme Learning Outcome</div>
                <div className='col-6'>Course Learning Outcome</div>
               </div>

               <div className='row course-name pt-2' style={{fontSize: '12px'}}>
                <div className='col-6'>PLO1_[WA1]Engieering Knowledge</div>
                <div className='col-6'>CLO_1 Impleent the theoratical concepts</div>
               </div>
               <div className='row course-name pt-2' style={{fontSize: '12px'}}>
                <div className='col-6'>PLO1_[WA1]Engieering Knowledge</div>
                <div className='col-6'>CLO_1 Impleent the theoratical concepts</div>
               </div>
               <div className='row course-name pt-2' style={{fontSize: '12px'}}>
                <div className='col-6'>PLO1_[WA1]Engieering Knowledge</div>
                <div className='col-6'>CLO_1 Impleent the theoratical concepts</div>
               </div>

            
            </div>
          </div>
        </div>
      </div>



      <div className="modal">
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <h3 className="font-weight-lighter">New Assignment</h3>
          <form>
            <label htmlFor="fname">Assessments</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              className="student-input"
            />
            <label htmlFor="lname">Assessments type</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              className="student-input"
            />
            <label htmlFor="lname">Full Marks</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              className="student-input"
            />
            <label htmlFor="lname">Weightage</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              className="student-input"
            />
            <label htmlFor="lname">CLO</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              className="student-input"
            />
            
            
            
            <button className="btn btn-primary">Save Assignment</button>
            
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
          <span>Assignment to Mapping</span>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            Add Assignment
          </button>
        </div>

        <div className="container border pb-3 pt-5">
          
          

          {/* <div className="row course-name">
            <div className='col-6'>
                <h6>Programme Learning Outcome</h6>
            </div>

            <div className='col-6'>
                <h6>Course Learning Outcome</h6>
            </div>
          </div> */}

          <table >
            <tr style={{borderBottom: '1px solid'}}>
                <th className='px-2 '><h6 style={{fontSize: '13px'}}>No.</h6></th>
                <th className='px-2'><h6 style={{fontSize: '13px'}}>Assessments</h6></th>
                <th className='px-2'><h6 style={{fontSize: '13px'}}>Assessment Type</h6></th>
                <th className='px-2'><h6 style={{fontSize: '13px'}}>Full Marks.</h6></th>
                <th className='px-2'><h6 style={{fontSize: '13px'}}>Weightage(%)</h6></th>
                <th className='px-2'><h6 style={{fontSize: '13px'}}>CLO 1</h6></th>
                <th className='px-2'><h6 style={{fontSize: '13px'}}>CLO 2</h6></th>
                <th className='px-2'><h6 style={{fontSize: '13px'}}>CLO 3</h6></th>
                <th className='px-2'><h6 style={{fontSize: '13px'}}>CLO 4</h6></th>
                <th className='px-2'><h6 style={{fontSize: '13px'}}>CLO 5</h6></th>
                <th className='px-2'><h6 style={{fontSize: '13px'}}>CLO 6</h6></th>
                <th className='px-2'><h6 style={{fontSize: '13px'}}>CLO 7</h6></th>
                <th className='px-2'><h6 style={{fontSize: '13px'}}>CLO 8</h6></th>
                <th className='px-2'></th>
                <th className='px-2' style={{fontSize: '13px'}}><BiTrash/></th>
            </tr>
            <tr style={{borderBottom: '1px solid'}}>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>Quiz</h6></th>
            </tr>
            <tr style={{borderBottom: '1px solid'}}>
                <td className='px-2' style={{fontSize: '13px'}}>1</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}>Quiz</td>
                <td className='px-2' style={{fontSize: '13px'}}>50</td>
                <td className='px-2' style={{fontSize: '13px'}}>5.0</td>
                <td className='px-2' style={{fontSize: '13px'}}>CLO 1</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiPencil/></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiTrash/></td>
            </tr>
            <tr style={{borderBottom: '1px solid'}}>
                <td className='px-2' style={{fontSize: '13px'}}>2</td>
                <td className='px-2' style={{fontSize: '13px'}}>Quiz 2</td>
                <td className='px-2' style={{fontSize: '13px'}}>Quiz</td>
                <td className='px-2' style={{fontSize: '13px'}}>50</td>
                <td className='px-2' style={{fontSize: '13px'}}>5.0</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}>CLO 7</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiPencil/></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiTrash/></td> 
            </tr>
            <tr style={{borderBottom: '1px solid'}}>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>Final Exam</h6></th>
            </tr>
            <tr style={{borderBottom: '1px solid'}}>
                <td className='px-2' style={{fontSize: '13px'}}>1</td>
                <td className='px-2' style={{fontSize: '13px'}}>Q1</td>
                <td className='px-2' style={{fontSize: '13px'}}>Final Exam</td>
                <td className='px-2' style={{fontSize: '13px'}}>25</td>
                <td className='px-2' style={{fontSize: '13px'}}>10.0</td>
                <td className='px-2' style={{fontSize: '13px'}}>CLO 1</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiPencil/></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiTrash/></td> 
            </tr>
            <tr style={{borderBottom: '1px solid'}}>
                <td className='px-2' style={{fontSize: '13px'}}>2</td>
                <td className='px-2' style={{fontSize: '13px'}}>Final Exam Q2</td>
                <td className='px-2' style={{fontSize: '13px'}}>Final Exam</td>
                <td className='px-2' style={{fontSize: '13px'}}>25</td>
                <td className='px-2' style={{fontSize: '13px'}}>15.0</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}>CLO 5</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiPencil/></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiTrash/></td> 
            </tr>
            <tr style={{borderBottom: '1px solid'}}>
                <td className='px-2' style={{fontSize: '13px'}}>3</td>
                <td className='px-2' style={{fontSize: '13px'}}>Final Exam Q3</td>
                <td className='px-2' style={{fontSize: '13px'}}>Final Exam</td>
                <td className='px-2' style={{fontSize: '13px'}}>50</td>
                <td className='px-2' style={{fontSize: '13px'}}>25.0</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}>CLO 7</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiPencil/></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiTrash/></td> 
            </tr>
            <tr style={{borderBottom: '1px solid'}}>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>Assignment</h6></th>
            </tr>
            <tr style={{borderBottom: '1px solid'}}>
                <td className='px-2' style={{fontSize: '13px'}}>1</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}>Assignment</td>
                <td className='px-2' style={{fontSize: '13px'}}>100</td>
                <td className='px-2' style={{fontSize: '13px'}}>10.0</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}>CLO 7</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiPencil/></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiTrash/></td> 
            </tr>

           
            <tr style={{borderBottom: '1px solid'}}>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>Test-1</h6></th>
            </tr>
            <tr style={{borderBottom: '1px solid'}}>
                <td className='px-2' style={{fontSize: '13px'}}>1</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}>Test-1</td>
                <td className='px-2' style={{fontSize: '13px'}}>100</td>
                <td className='px-2' style={{fontSize: '13px'}}>10.0</td>
                <td className='px-2' style={{fontSize: '13px'}}>CLO 1</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiPencil/></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiTrash/></td> 
            </tr>

            <tr style={{borderBottom: '1px solid'}}>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>Test-2</h6></th>
            </tr>
            <tr style={{borderBottom: '1px solid'}}>
                <td className='px-2' style={{fontSize: '13px'}}>1</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}>Test-2</td>
                <td className='px-2' style={{fontSize: '13px'}}>100</td>
                <td className='px-2' style={{fontSize: '13px'}}>15.0</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}>CLO 5</td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiPencil/></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiTrash/></td> 
            </tr>

            <tr style={{borderBottom: '1px solid'}}>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2'><h6 style={{fontSize: '13px'}}>Total</h6></td>
                <td className='px-2' style={{fontSize: '13px'}}></td>
                <td className='px-2' style={{fontSize: '13px'}}>100</td>
                <td className='px-2' style={{fontSize: '13px'}}>30.0</td>
                <td className='px-2' style={{fontSize: '13px'}}>0.0</td>
                <td className='px-2' style={{fontSize: '13px'}}>0.0</td>
                <td className='px-2' style={{fontSize: '13px'}}>0.0</td>
                <td className='px-2' style={{fontSize: '13px'}}>30.0</td>
                <td className='px-2' style={{fontSize: '13px'}}>0.0</td>
                <td className='px-2' style={{fontSize: '13px'}}>4.0</td>
                <td className='px-2' style={{fontSize: '13px'}}>0.0</td>
                <td className='px-2' style={{fontSize: '13px'}}><BiPencil/></td>
                <td className='px-2' style={{fontSize: '13px'}}><BiTrash/></td> 
            </tr>

            <tr style={{borderBottom: '1px solid'}}>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>PLO% Emphasis</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}></h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>PLO2</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>PLO1</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>PLO2</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>PLO3</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>PLO4</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>PLO5</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>PLO6</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>PLO7</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>PLO8</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>Total</h6></th>
            </tr>

            <tr style={{borderBottom: '1px solid'}}>
            <th className='p-2'><h6 style={{fontSize: '13px'}}></h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}></h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>30.0</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>0</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>30.0</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>0.0</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>0.0</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>0.0</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>0.0</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>0.0</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>40.0</h6></th>
            <th className='p-2'><h6 style={{fontSize: '13px'}}>100.0</h6></th>
            </tr>
            
            
            
          </table>

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

          

          {/* <div className='row py-2 course-name'>
            <div className="col-6">PLO1_[WA1]Engieering Knowledge</div>
            <div className="col-6">CLO_1 Impleent the theoratical concepts <BiPencil className='ml-5'/> <BiTrash className='ml-2'/> </div>
          </div>
          <div className='row py-2 course-name'>
            <div className="col-6">PLO1_[WA1]Engieering Knowledge</div>
            <div className="col-6">CLO_1 Impleent the theoratical concepts <BiPencil className='ml-5'/> <BiTrash className='ml-2'/> </div>
          </div> */}
          <button className='btn btn-primary btn-sm mt-2' onClick={handleClick}>Continue to fill up Student Information</button>
          <button className='btn btn-primary btn-sm ml-2 mt-2'  onClick={() => {
              setModalIsOpen(true);
            }}>Add Assignment</button>
        </div>
      </div>

    </div>
  )
}

export default Asssessment