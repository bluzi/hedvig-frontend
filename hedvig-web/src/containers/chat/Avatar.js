import { connect } from "react-redux";
import Avatar from "../../components/chat/Avatar";

const mapStateToProps = (state, ownProps) => {
  if (state.chat.messages.length > 0) {
    const message = state.chat.messages[ownProps.messageIndex];
    return {
      avatar: state.chat.avatars[message.header.avatarName] || {},
    };
  }
  return {
    avatar: {},
  };
};

const mapDispatchToProps = dispatch => ({
  animationEnded: () => {},
  // dispatch(
  //   eventActions.event({
  //     type: "ANIMATION_COMPLETE"
  //   })
  // )
});

const AvatarContainer = connect(mapStateToProps, mapDispatchToProps)(Avatar);

export default AvatarContainer;
