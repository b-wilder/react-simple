import React from "react";
import ReactDOM from "react-dom";
import InputForm from "./InputForm"

class Hello extends React.Component {
  constructor(props){
    super(props);
    this.setMessage = this.setMessage.bind(this);
    this.state = {
      messageFromForm: ''
    };
  }

  setMessage(messageFromFormVal) {
    this.props.changeMessage(messageFromFormVal);
  }

  render() {
    const messageFromFormVal = this.state.messageFromForm;
    return (
      <div>
        <h1>Hello {messageFromFormVal}</h1>
        <InputForm setMessageCallback={this.setMessage} messageVal={messageFromFormVal}/>
      </div>
    );
  }
}

export default Hello;
