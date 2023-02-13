import authSaga from "./auth/auth-Saga";
import { all, fork } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([fork(authSaga)]);
}
