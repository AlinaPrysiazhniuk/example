/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ListItem from "./ListItem";
// import Modal from "react-modal";/
import { useState } from "react";

const Modal = ({ isClose }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      //   isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={isClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      imggg
    </Modal>
  );
};

export default Modal;
