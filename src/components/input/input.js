import React, { useState, useEffect } from "react";

const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [className, setClassName] = useState("");
  useEffect(() => {
    if (props.type === "text") setErrorMsg("Ce champ doit contenir au moins 3 caracteres");
    if (props.type === "date") setErrorMsg("Veuillez entrez une date valide");
  }, [className, props.type, props.value]);

  const handleFocus = () => {
    setFocused(true);
    props.value === "" ? setClassName("block") : setClassName("");
  };
  return (
    <div>
      <input
        type={props.type}
        id={props.id}
        pattern={props.pattern}
        onBlur={handleFocus}
        onChange={props.onChange}
        focused={focused.toString()}
        value={props.value}
      />
      <span className={className}>{errorMsg}</span>
    </div>
  );
};

export default Input;
