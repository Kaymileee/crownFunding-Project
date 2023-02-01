import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { Checkbox } from "../components/checkbox";
import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import LayoutAuthentication from "../layouts/LayoutAuthentication";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const SignUpPage = () => {
  const schema = yup
    .object({
      name: yup.string().required("This field is required"),
    })

    .required();
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleSignUp = (values) => {
    console.log(values);
  };
  console.log(errors);
  const [acceptTerm, setAcceptTerm] = useState(false);
  const handleToggleTerm = () => {
    setAcceptTerm(!acceptTerm);
  };
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
            <Label htmlFor={"name"}>Full Name *</Label>
            <Input
              control={control}
              name="name"
              placeholder={"John Doe"}
              error={errors?.name}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor={"email"}>Email *</Label>
            <Input
              control={control}
              name="email"
              type={"email"}
              placeholder="example@gmail.com"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor={"password"}>Password *</Label>
            <Input
              control={control}
              name="password"
              type={"password"}
              placeholder="create a password"
            ></Input>
          </FormGroup>
          <div className="flex items-start mb-5 gap-x-5">
            <Checkbox
              name="term"
              checked={acceptTerm}
              onClick={handleToggleTerm}
            >
              <p className="text-xs font-normal lg:text-sm text-text2">
                I agree to the{" "}
                <span className="underline text-secondary">Terms of Use</span>{" "}
                and have read and understand the{" "}
                <span className="underline text-secondary">Privacy policy</span>
                .
              </p>
            </Checkbox>
          </div>
          <Button className="w-full bg-primary" type="submit">
            Create my account
          </Button>
        </form>
      </LayoutAuthentication>
    </div>
  );
};

export default SignUpPage;
