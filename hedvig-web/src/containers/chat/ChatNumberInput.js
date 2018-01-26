import { connect } from 'react-redux';
import ChatNumberInput from '../../components/chat/ChatNumberInput';
import { chatActions } from 'hedvig-redux';

const mapStateToProps = (state, ownProps) => {
  const message = state.chat.messages[ownProps.messageIndex];
  return {
    message
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: (message, value) =>
    dispatch(chatActions.setResponseValue(message, value)),
  send: message =>
    dispatch(chatActions.sendChatResponse(message, {
        text: message._inputValue,
      }),
    ),
});

const ChatNumberInputContainer = connect(mapStateToProps, mapDispatchToProps)(
  ChatNumberInput
);

export default ChatNumberInputContainer;
