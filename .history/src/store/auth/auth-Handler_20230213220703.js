import { call } from "redux-saga/effects";
export default function* handleAuthRegister(action) {
  console.log(action);
  const { payload, type } = action;
  try {
    const response = yield call();
  } catch (error) {}
}
