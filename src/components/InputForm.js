import React from "react";
import ReactDOM from "react-dom";

const InputForm = ({onClick, message}) =>  (
  <form>
    <input id="submitVal" type="text" value={message}/>
    <button name="Submit" type="button" onClick={onClick}>
      Submit
    </button>
  </form>
);

export default InputForm;
