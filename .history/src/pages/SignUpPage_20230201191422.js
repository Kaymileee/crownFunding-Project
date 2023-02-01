import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import LayoutAuthentication from "../layouts/LayoutAuthentication";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useForm({});
  const handleSignUp = (values) => {};
  return (
    <div>
      <LayoutAuthentication heading="Sign Up">
        <p className="mb-6 text-xs font-medium text-center lg:font-normal lg:text-sm lg:mb-3 text-text3">
          Already have an account?{" "}
          <Link to={"/sign-in"} className="font-medium underline text-primary">
            Sign In
          </Link>
        </p>
        <button className="flex items-center justify-center w-full py-3 mb-3 text-base font-semibold border gap-x-3 border-strockColor rounded-xl text-text2">
          <img srcSet="/logo.png" alt="logo" />

          <span>Sign up with google</span>
        </button>
        <p className="p-3 mb-4 text-xs font-normal text-center lg:text-sm text-text2 lg:mb-8">
          Or sign up with email
        </p>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <FormGroup>
            <Label>Full Name *</Label>
            <Input control={control} name="name" placeholder="John Doe"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Email *</Label>
            <Input
              control={control}
              name="email"
              type={"email"}
              placeholder="example@gmail.com"
            ></Input>
          </FormGroup>
        </form>
      </LayoutAuthentication>
    </div>
  );
};

export default SignUpPage;
