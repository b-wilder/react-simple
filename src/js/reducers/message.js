const message = (state = 'Friendo!', action) => {
  switch(action.type) {
    case 'CHANGE_MESSAGE':
      return action.payload
    default:
      return state
  }
}

export default message
