import React from "react";
import { Link } from "react-router-dom";
import ButtonGoogle from "../components/button/ButtonGoogle";
import LayoutAuthentication from "../layouts/LayoutAuthentication";

const SignInPage = () => {
  return (
    <div>
      <LayoutAuthentication heading="Sign In">
        <p className="mb-6 text-xs font-medium text-center lg:font-normal lg:text-sm lg:mb-3 text-text3">
          Dont have an account?{" "}
          <Link to={"/sign-up"} className="font-medium underline text-primary">
            Sign up
          </Link>
        </p>
        <ButtonGoogle></ButtonGoogle>
      </LayoutAuthentication>
    </div>
  );
};

export default SignInPage;
