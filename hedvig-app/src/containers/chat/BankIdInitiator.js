import { connect } from "react-redux"

import SingleSelectInput from "../../components/chat/SingleSelectInput"

export default connect(
  (state, ownProps) => ({
      message: state.chat.messages[ownProps.messageIndex]
  }),
  dispatch => ({
    selectChoice: () => dispatch({type: "START_BANK_ID_SESSION"}),
    done: () => {} // No-op
  })
)(SingleSelectInput)
