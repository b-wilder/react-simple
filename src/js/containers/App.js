import React from "react";
import ReactDOM from "react-dom";
import Hello from "../components/Hello";
import * as actions from "../actions";
import rootReducer from "../reducers/rootReducer";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


const mapStateToProps = state => {
  return rootReducer;
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
}

class Hello extends React.Component {
  constructor(props){
    super(props);
  }

  ReactDOM.render() {
    return (
      <Hello/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
