import { connect } from "react-redux"
import { AnimatedAvatar } from "../../components/chat/Avatar"

const mapStateToProps = (state, ownProps) => {
  if (state.chat.messages.length > 0) {
    let message = state.chat.messages[ownProps.messageIndex]
    return {
      avatar: state.chat.avatars[message.header.avatarName] || {}
    }
  } else {
    return {
      avatar: {}
    }
  }
}


const AvatarContainer = connect(mapStateToProps, undefined)(AnimatedAvatar)

export default AvatarContainer
