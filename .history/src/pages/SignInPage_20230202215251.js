import React from "react";
import { Link } from "react-router-dom";
import ButtonGoogle from "../components/button/ButtonGoogle";
import LayoutAuthentication from "../layouts/LayoutAuthentication";
import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import IconEyeToggle from "../components/icons/IconEyeToggle";
import useToggleValue from "../hooks/useToggleValues";
import { Button } from "../components/button";
const SignInPage = () => {
  const schema = yup
    .object({
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
  const handleSignUp = (values) => {
    console.log(values);
  };

  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue(false);
  const { value: open, handleToggleValue: handleOpen } = useToggleValue(false);

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
        <form onSubmit={handleSubmit(handleSignUp)}>
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
              placeholder="enter password"
            >
              <IconEyeToggle open={open} onClick={handleOpen}></IconEyeToggle>
            </Input>
          </FormGroup>
          <FormGroup>
            <span className="block mb-3 text-sm font-medium text-right text-primary">
              Forgot password
            </span>
          </FormGroup>

          <Button className="w-full bg-primary" type="submit">
            Sign In
          </Button>
        </form>
      </LayoutAuthentication>
    </div>
  );
};

export default SignInPage;
