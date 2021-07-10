import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portal = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCloseAction} />,
        portal
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portal
      )}
    </>
  );
};

export default Modal;
