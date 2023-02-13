export default function* handleAuthRegister(action) {
  console.log(action);
  const { payload, type } = action;
  yield 1;
}
