import React from "react";
import "./Modal.scss";

const Modal = ({ show, closeModal, children }) => {
  return (
    show && (
      <div>
        <div className="Modal__overlay" onClick={closeModal} />
        <div className="Modal">{children}</div>
      </div>
    )
  );
};

export default Modal;
