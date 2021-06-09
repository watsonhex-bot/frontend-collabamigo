import {Modal} from "react-bootstrap";
import React, {useState} from "react";


// eslint-disable-next-line react/prop-types
function Odal({item, onDelete}) {
      const [show, setShow] = useState(false);

       function handleSubmit(e,item){
           onDelete(item)
           setShow(false)
           alert("skill deleted successfully")
       }

       const handleShow = () => setShow(true);

       const handleClose = () => setShow(false);
      return (
          <>
              <span
                  className="btn material-icons-outlined"
                  onClick={handleShow}
                  type="button"
              >
                  delete
              </span>


              <Modal
                  onHide={handleClose}
                  show={show}
              >
                  <Modal.Header closeButton>
                      <Modal.Title>
                          Modal heading
                      </Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                      Are you sure you want to delete the skill

                      {" "}

                      {item}
                  </Modal.Body>

                  <Modal.Footer>
                      <button
                          className="btn btn-warning"
                          onClick={(e) => handleSubmit(e,item)}
                          type="button"
                      >
                          Confirm
                      </button>
                  </Modal.Footer>
              </Modal>
          </>
      );
    }
export default Odal