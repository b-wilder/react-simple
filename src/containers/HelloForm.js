import { connect } from 'react-redux';
import { updateHelloMessage } from '../actions';
import Hello from '../components/Hello';

const getMessage = (message) => {
  return message;
};

const mapStateToProps = state => ({
  message: getMessage(state.message)
});

const mapDispatchToProps = (dispatch, message) => ({
  updateHelloMessage: () => dispatch(updateHelloMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
