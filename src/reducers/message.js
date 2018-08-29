const message = (state = 'Friendo!', action) => {
  switch (action.type) {
    case 'UPDATE_HELLO_MESSAGE':
      return
      {
        message: action.message
      };
    default:
      return state;
  }
}

export default message;
