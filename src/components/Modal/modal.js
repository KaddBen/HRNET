import React, { useState, useEffect } from "react";
function Modal({
  open,
  onClose,
  data,
  fadeDuration,
  showSpinner,
  escapeClose,
  clickToClose,
  showClose,
  closeText,
  closeClass,
  isLoading,
}) {

  //Default options
  if (fadeDuration == null) fadeDuration = null;
  if (showSpinner == null) showSpinner = true;
  if (escapeClose == null) escapeClose = true;
  if (clickToClose == null) clickToClose = true;
  if (showClose == null) showClose = true;
  if (closeText == null) closeText = "Close";
  if (showClose == null) showClose = true;
  if (closeClass == null) closeClass = "";

  const [className1, setClassName1] = useState("hidden");
  const [className2, setClassName2] = useState("hidden");

  useEffect(() => {
    isLoading === true ? setClassName2("loader") : setClassName2("hidden");
    isLoading === true && showSpinner === true
      ? setClassName1("hidden")
      : setClassName1("visible");
  });
  
  window.addEventListener("keydown", (e) => {
    // eslint-disable-next-line no-unused-expressions
    if (open && escapeClose === true && e.keyCode === 27) onClose();
  });
  if (!open) return null;
  return (
    <div className="modal">
      <div
        // eslint-disable-next-line no-unused-expressions
        className={showClose === true ? "" : "hidden"}
        onClick={onClose}
      >
        X
      </div>
      <div className={showSpinner === true ? className2 : "hidden"}></div>
      <span className={className1}>Employee Sucessfully created !</span>
      <span className={closeClass}>{closeText}</span>
    </div>
  );
}

export default Modal;
