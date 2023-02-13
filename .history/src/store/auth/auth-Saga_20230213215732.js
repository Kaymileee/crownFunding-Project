import { takeLatest } from "redux-saga/effects";
import handleAuthRegister from "./auth-Handler";
import { authRegister } from "./auth-Slice";
export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
}
