import { connect } from 'react-redux';
import MultipleSelectInput from '../../components/chat/MultipleSelectInput';
import { chatActions } from 'hedvig-redux';

const mapStateToProps = (state, ownProps) => ({
  message: state.chat.messages[ownProps.messageIndex],
});

const mapDispatchToProps = dispatch => ({
  onChoiceSelected: (message, choice) =>
    dispatch(chatActions.selectChoice(message, choice)),
  done: message => dispatch(chatActions.sendChatResponse(message)),
});

const MultipleSelectInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MultipleSelectInput);

export default MultipleSelectInputContainer;
