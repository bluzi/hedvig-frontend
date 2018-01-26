import { connect } from 'react-redux';
import ChatTextInput from '../../components/chat/ChatTextInput';
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

const ChatTextInputContainer = connect(mapStateToProps, mapDispatchToProps)(
  ChatTextInput
);

export default ChatTextInputContainer;
