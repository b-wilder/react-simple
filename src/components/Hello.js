import React from 'react';
import InputForm from './InputForm';

const Hello = ({ message, updateHelloMessage }) => (
  <div>
    <h1>Hello {message}</h1>
    <InputForm onClick={() => updateHelloMessage(message)}/>
  </div>
);

export default Hello;
