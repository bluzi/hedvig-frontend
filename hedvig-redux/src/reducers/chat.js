const R = require("ramda")
const dotProp = require("dot-prop-immutable")
import {
  LOADED_ONBOARDING,
  LOADED_MESSAGES,
  LOADING_MESSAGES_START,
  LOADING_MESSAGES_END,
  CHOICE_SELECTED,
  SET_RESPONSE_VALUE,
  LOADED_AVATARS,
  LOADED_AVATAR_DATA
} from "../actions/types"
import { MOCK_LOADED_CLAIM_MESSAGES } from "../actions/mock/types"

const selectChoice = (state, { payload: { message, choice } }) => {
  let messages = state.messages
  let messageIndex = messages.findIndex(m => m.globalId === message.globalId)
  let choiceIndex = messages[messageIndex].body.choices.findIndex(l =>
    R.equals(l, choice)
  )
  let currentSelection =
    messages[messageIndex].body.choices[choiceIndex].selected
  let newState = dotProp.set(
    state,
    `messages.${messageIndex}.body.choices.${choiceIndex}.selected`,
    !currentSelection
  )
  return newState
}

const setResponseValue = (state, { payload: { message, value } }) => {
  let messages = state.messages
  let messageIndex = messages.findIndex(m => m.globalId === message.globalId)
  let newState = dotProp.set(
    state,
    `messages.${messageIndex}._inputValue`,
    value
  )
  return newState
}

// const loadingMessage = () => {
//   return {
//     globalId: -1,
//     id: "loading",
//     header: {
//       fromId: 1
//     },
//     body: { type: "text", text: "..." },
//     timestamp: moment().toISOString()
//   }
// }

const handleLoading = (state, { type }) => {
  if (type === LOADING_MESSAGES_START) {
    let stateWithLoading = Object.assign({}, state, { loadingMessages: true })
    // let newState = dotProp.set(state, `messages`, [
    //   ...state.messages,
    //   loadingMessage()
    // ])
    return stateWithLoading
  } else if (type === LOADING_MESSAGES_END) {
    return Object.assign({}, state, { loadingMessages: false })
  }
}

const handleLoadedAvatars = (state, action) => {
  let avatarsByName = R.indexBy(R.prop("name"), action.payload)
  return Object.assign({}, state, { avatars: avatarsByName })
}

const handleLoadedAvatarData = (state, action) => {
  return dotProp.set(
    state,
    `avatars.${action.payload.name}.data`,
    action.payload.data
  )
}

const reducer = (
  state = { messages: [], loadingMessages: false, avatars: {} },
  action
) => {
  switch (action.type) {
    case MOCK_LOADED_CLAIM_MESSAGES:
    case LOADED_MESSAGES:
    case LOADED_ONBOARDING:
      return Object.assign({}, state, {
        messages: R.sortBy(R.path(["timestamp"]), R.values(action.payload))
      })
    case CHOICE_SELECTED:
      return selectChoice(state, action)
    case SET_RESPONSE_VALUE:
      return setResponseValue(state, action)
    case LOADING_MESSAGES_START:
    case LOADING_MESSAGES_END:
      return handleLoading(state, action)
    case LOADED_AVATARS:
      return handleLoadedAvatars(state, action)
    case LOADED_AVATAR_DATA:
      return handleLoadedAvatarData(state, action)
    default:
      return state
  }
}

export default reducer
