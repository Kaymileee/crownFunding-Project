import { call } from "redux-saga/effects";
import { requestAuthRegister } from "./auth-Request";
export default function* handleAuthRegister(action) {
  const { payload, type } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
  } catch (error) {
    console.log(error);
  }
}
