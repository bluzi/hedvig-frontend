import { connect } from 'react-redux';
import SingleSelectInput from '../../components/chat/SingleSelectInput';
import { chatActions } from 'hedvig-redux';

const mapStateToProps = (state, ownProps) => ({
  message: state.chat.messages[ownProps.messageIndex],
});

const mapDispatchToProps = dispatch => ({
  selectChoice: (message, choice) =>
    dispatch(chatActions.selectChoice(message, choice)),
  done: message => dispatch(chatActions.sendChatResponse(message))
});

const SingleSelectInputContainer = connect(mapStateToProps, mapDispatchToProps)(
  SingleSelectInput
);

export default SingleSelectInputContainer;
