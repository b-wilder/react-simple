import React from 'react';
import InputForm from './InputForm';

const Hello = ({ message, updateHelloMessage }) : obj => {
  const handleClickCallback = () => {
    updateHelloMessage(message);
  };
  return (
    <div>
      <h1>Hello {message}</h1>
      <InputForm onClick={handleClickCallback} message={message} />
    </div>
  );
}

export default Hello;
