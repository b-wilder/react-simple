import React from "react";
import ReactDOM from "react-dom";
import { changeMessage } from "../actions/changeMessage"

class InputForm extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    dispatch(changeMessage(document.getElementById('submitVal').value))
  }

  render() {
    const messageVal = this.props.message;
    return(
      <form>
        <input id="submitVal" type="text" value={messageVal}/>
        <button name="Submit" type="button" onClick={ this.handleClick }>
          Submit
        </button>
      </form>
    );
  }
}

export default InputForm;
