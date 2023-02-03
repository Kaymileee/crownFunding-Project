import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Link } from "react-router-dom";
import ButtonGoogle from "../components/button/ButtonGoogle";
import FormGroup from "../components/common/FormGroup";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import LayoutAuthentication from "../layouts/LayoutAuthentication";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const SignInPage = () => {
  const schema = yupResolver
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
  const handleSignUp = (values) => {
    console.log(values);
  };
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
        <form action="">
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
        </form>
      </LayoutAuthentication>
    </div>
  );
};

export default SignInPage;
