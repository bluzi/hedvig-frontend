import { connect } from "react-redux"

import { types } from "hedvig-redux"
import BankIdCollectInput from "../../components/chat/BankIdCollectInput"

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.chat.messages[ownProps.messageIndex]
  }
}

const mapDispatchToProps = dispatch => ({
  startCollecting: referenceId =>
    dispatch({ type: types.BANKID_COLLECT, payload: { referenceId } })
})

const BankIdCollectInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BankIdCollectInput)

export default BankIdCollectInputContainer
