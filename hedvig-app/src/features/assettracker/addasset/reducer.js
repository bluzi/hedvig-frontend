export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_ASSET/SET_IMAGE_URI":
      return {
        ...state,
        uri: action.payload.uri
      }
    default:
      return state
  }
}
