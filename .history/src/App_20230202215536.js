import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const SignUpPage = lazy(() => import("./pages/SignUpPage.js"));
const SignInPage = lazy(() => import("./pages/SignInPage"));

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
      <Route path="/" element={<div></div>}></Route>

      <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
    </Routes>
  );
}

export default App;
