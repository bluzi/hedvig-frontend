import R from "ramda"
import { takeEvery, put } from "redux-saga/effects"
import { AUTHENTICATE, RECEIVED_TOKEN, VALIDATE_TOKEN } from "../actions/types"
import { baseURL } from "../services/environment"

const authenticate = function*(action) {
  let requestOpts = {
    method: "POST"
  }
  if (!R.isNil(action.payload) && !R.isEmpty(action.payload)) {
    requestOpts.body = JSON.stringify(action.payload)
    requestOpts.headers = { "Content-Type": "application/json" }
  }
  let authResponse = yield fetch(`${baseURL}/helloHedvig`, requestOpts)
  if (authResponse.status === 200) {
    let token = yield authResponse.text()
    yield put({ type: RECEIVED_TOKEN, payload: token })
  } else {
    // TODO: Report this error to the user and to Sentry
    console.warn("Failed to receive token", authResponse) // eslint-disable-line no-console
  }
}

const authenticateSaga = function*() {
  yield takeEvery(AUTHENTICATE, authenticate)
}

const validateToken = function*(action) {
  let token = action.payload
  let validateResponse = yield fetch(`${baseURL}/member/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if (validateResponse.status === 200 && token !== null) {
    yield put({ type: RECEIVED_TOKEN, payload: token })
  } else {
    yield put({ type: AUTHENTICATE, payload: {} })
  }
}

const validateTokenSaga = function*() {
  yield takeEvery(VALIDATE_TOKEN, validateToken)
}

export { authenticateSaga, validateTokenSaga }
