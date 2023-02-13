import { toast } from "react-toastify";
import { call } from "redux-saga/effects";
import { requestAuthRegister } from "./auth-Request";
export default function* handleAuthRegister(action) {
  const { payload, type } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    console.log("response,", response);
    if (response.status === 201) {
      toast.success("Account is created");
    }
  } catch (error) {
    console.log(error);
  }
}
