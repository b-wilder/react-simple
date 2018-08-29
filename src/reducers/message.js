const message = (state = 'Friendo!', action) => {
  switch (action.type) {
    case 'UPDATE_HELLO_MESSAGE':
      return action.message;
    default:
      return state;
  }
}

export default message;
