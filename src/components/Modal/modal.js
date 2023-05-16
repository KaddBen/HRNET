import React, { useState, useEffect } from "react";
function Modal({
  open,
  onClose,
  showSpinner,
  escapeClose,
  clickToClose,
  showClose,
  closeText,
  closeClass,
  modalClass,
  isLoading,
}) {

  //Default options
  if (showSpinner == null) showSpinner = true;
  if (escapeClose == null) escapeClose = true;
  if (clickToClose == null) clickToClose = true;
  if (closeText == null) closeText = "Close";
  if (showClose == null) showClose = true;
  if (closeClass == null) closeClass = "";
  if (modalClass == null) modalClass = "modal";

  const [className1, setClassName1] = useState("hidden employee");
  const [className2, setClassName2] = useState("hidden");
  const [className3, setClassName3] = useState("hidden");

  useEffect(() => {
    isLoading === true ? setClassName2("loader") : setClassName2("hidden");
    isLoading === true && showSpinner === true
      ? setClassName1("hidden employee")
      : setClassName1("visible employee");
  (clickToClose === true ) ? setClassName3("visible")  : setClassName3("hidden")
    isLoading === true && showSpinner === true
      ? setClassName3("hidden" + closeClass)
      : setClassName3("visible" + closeClass);

  });
  
  window.addEventListener("keydown", (e) => {
    // eslint-disable-next-line no-unused-expressions
    if (open && escapeClose === true && e.keyCode === 27) onClose();
  });

    if (open && document.querySelector(".modal")) {
   window.addEventListener('mouseup', (e) => {
     // eslint-disable-next-line no-unused-expressions
     if( open && clickToClose === true  && e.target !== document.querySelector(".modal") && e.target !== (document.querySelector(".employee"))) onClose()
      })
    }
  if (!open) return null;
  return (
    <div className={modalClass}>
      <div
        // eslint-disable-next-line no-unused-expressions
        className={showClose === true ? "" : "hidden"}
        onClick={onClose}
      >
        X
      </div>
      <div className={showSpinner === true ? className2 : "hidden"}></div>
      <span className={className1}>Employee Sucessfully created !</span>
      <a className={className3} onClick={onClose}>{closeText}</a>
    </div>
  );
}

export default Modal;
