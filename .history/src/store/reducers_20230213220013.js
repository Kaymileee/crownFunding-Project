import authReducer from "./auth/auth-Slice";

const { combineReducers } = require("@reduxjs/toolkit");
export const reducer = combineReducers({
  auth: authReducer,
});
