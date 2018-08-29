import React from 'react';
import InputForm from './InputForm';

const Hello = ({ message, updateHelloMessage }) => (
  <div>
    <h1>Hello {message}</h1>
    <InputForm onClick={(m) => updateHelloMessage(m)} message={message} />
  </div>
);

export default Hello;
