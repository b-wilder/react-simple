import React from "react";
import ReactDOM from "react-dom";

const InputForm = (onClick, message) =>  {
  const messageVal = message;
  const handleClick = (e) => {
    onClick(document.getElementById('submitVal').value);
  };
  return (
    <form>
      <input id="submitVal" type="text" value={messageVal}/>
      <button name="Submit" type="button" onclick={handleClick}>
        Submit
      </button>
    </form>
  );
}

export default InputForm;
