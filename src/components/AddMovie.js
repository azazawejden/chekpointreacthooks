import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function AddMovie({ handleAdd }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setform] = useState({
    image: "",
    rating: 0,
    name: "",
    date: "",
    desc: "",
    trailer: "",
  });
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(form);
    setform({
      image: "",
      rating: 0,
      name: "",
      date: "",
      desc: "",
    });
    handleClose();
    navigate("/");
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Title</label>
              <input
                type="text"
                value={form.name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Poster Url</label>
              <input
                type="url"
                value={form.image}
                name="image"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Rate</label>
              <input
                type="number"
                value={form.rating}
                name="rating"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Descreption</label>
              <input
                type="text"
                value={form.desc}
                name="desc"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Trailer</label>
              <input
                type="text"
                value={form.trailer}
                name="trailer"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Date</label>
              <input
                type="date"
                value={form.date}
                name="date"
                onChange={handleChange}
              />
            </div>
            <button>Save Changes</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddMovie;