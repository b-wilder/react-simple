import React from "react";
import ReactDOM from "react-dom";

const InputForm = ({onClick, message}) =>  {
  let messageVal = message;
  return (
    <form>
      <input id="submitVal" type="text" value={messageVal}/>
      <button name="Submit" type="button" onClick={onClick(messageVal)}>
        Submit
      </button>
    </form>
  );
}

export default InputForm;
