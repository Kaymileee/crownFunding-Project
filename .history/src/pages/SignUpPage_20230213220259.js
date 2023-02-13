import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { Checkbox } from "../components/checkbox";
import FormGroup from "../components/common/FormGroup";
import Label from "../components/label/Label";
import LayoutAuthentication from "../layouts/LayoutAuthentication";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToggle from "../components/icons/IconEyeToggle";
import useToggleValue from "../hooks/useToggleValues";
import ButtonGoogle from "../components/button/ButtonGoogle";
import { Input } from "../components/input";
import { useDispatch } from "react-redux";
import { authRegister } from "../store/auth/auth-Slice";
const SignUpPage = () => {
  const schema = yup
    .object({
      name: yup.string().required("This field is required"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("This field is required"),
      password: yup
        .string()
        .min(8, "Password must be 8 character")
        .required("This field is required"),
    })

    .required();
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
  const dispatch = useDispatch();
  const handleSignUp = (values) => {
    console.log(values);
    dispatch(authRegister(values));
  };

  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue(false);
  const { value: open, handleToggleValue: handleOpen } = useToggleValue(false);

  return (
    <div>
      <LayoutAuthentication heading="Sign Up">
        <p className="mb-6 text-xs font-medium text-center lg:font-normal lg:text-sm lg:mb-3 text-text3">
          Already have an account?{" "}
          <Link to={"/sign-in"} className="font-medium underline text-primary">
            Sign In
          </Link>
        </p>
        <ButtonGoogle></ButtonGoogle>
        <p className="p-3 mb-4 text-xs font-normal text-center lg:text-sm text-text2 lg:mb-8 dark:text-white">
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
              error={errors?.email}
              placeholder="example@gmail.com"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor={"password"}>Password *</Label>
            <Input
              control={control}
              name="password"
              type={`${open ? "text" : "password"}`}
              error={errors?.password}
              placeholder="create a password"
            >
              <IconEyeToggle open={open} onClick={handleOpen}></IconEyeToggle>
            </Input>
          </FormGroup>
          <div className="flex items-start mb-5 gap-x-5">
            <Checkbox
              name="term"
              checked={acceptTerm}
              onClick={handleToggleTerm}
            >
              <p className="text-xs font-normal lg:text-sm text-text2 dark:text-text3">
                I agree to the{" "}
                <span className="underline text-secondary">Terms of Use</span>{" "}
                and have read and understand the{" "}
                <span className="underline text-secondary">Privacy policy</span>
                .
              </p>
            </Checkbox>
          </div>
          <Button className="w-full " kind="primary" type="submit">
            Create my account
          </Button>
        </form>
      </LayoutAuthentication>
    </div>
  );
};

export default SignUpPage;
