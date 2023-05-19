import React, { useState, useEffect } from "react";
import './input.css'
const Input = (props) => {
  const [focused, setFocused] = useState(false);
  let [errorMsg, setErrorMsg] = useState("");
  let [className, setClassName] = useState("");
  useEffect(() => {
    if (props.type === "text") setErrorMsg("Ce champ doit contenir au moins 3 caracteres");
    if (props.type === "date") setErrorMsg("Veuillez entrez une date valide");
    if (props.type === "number") setErrorMsg("");
    if((props.value.length === 0) && (props.type !== "date")) setErrorMsg("Ce champ ne peut etre vide");
    if((errorMsg !== "Ce champ ne peut etre vide")) {
      setClassName("input_value");
      console.log(className);
      console.log(errorMsg);
    }

  }, [className, errorMsg, props.type, props.value]);

  
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
