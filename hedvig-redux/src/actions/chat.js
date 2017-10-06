import {
  API,
  LOADED_MESSAGES,
  LOADED_ONBOARDING,
  CHOICE_SELECTED,
  SEND_MULTIPLE_CHOICE_ANSWER,
  SET_RESPONSE_VALUE,
  SEND_TEXT_ANSWER,
  SEND_CHAT_RESPONSE
} from "./types"

export function getMessages() {
  return {
    type: API,
    payload: {
      url: "/messages",
      method: "GET",
      SUCCESS: LOADED_MESSAGES
    }
  }
}

export function startOnboarding() {
  return {
    type: API,
    payload: {
      url: "/onboarding",
      method: "POST",
      SUCCESS: LOADED_ONBOARDING
    }
  }
}

export function selectChoice(message, choice) {
  return {
    type: CHOICE_SELECTED,
    payload: {
      message,
      choice
    }
  }
}

export function setResponseValue(message, value) {
  return {
    type: SET_RESPONSE_VALUE,
    payload: {
      message,
      value
    }
  }
}

export function sendChatResponse(message, bodyOverride = {}) {
  return {
    type: SEND_CHAT_RESPONSE,
    payload: {
      message,
      bodyOverride
    }
  }
}
