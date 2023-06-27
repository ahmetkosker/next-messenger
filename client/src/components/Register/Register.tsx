import Input from "../FormElements/Input";
import LogRegHead from "../LogRegHead";
import { Button } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import { useState } from "react";
import * as yup from "yup";

const registerSchema = yup.object({
  email: yup
    .string()
    .required("Cannot be empty")
    .max(27, "Max 27")
    .min(10, "Min 10"),
  password: yup
    .string()
    .required("Cannot be empty")
    .max(18, "Max 18")
    .min(6, "Min 6"),
  rePassword: yup
    .string()
    .required("Cannot be empty")
    .max(18, "Max 18")
    .min(6, "Min 6")
    .oneOf([yup.ref("password")], "Passwords don't match"),
});

const Register = () => {
  interface RegisterForm {
    email: string;
    password: string;
    rePassword: string;
  }

  type Variant = "LOGIN" | "REGISTER";

  const [variant, setVariant] = useState<Variant>("REGISTER");

  const initialValues: RegisterForm = {
    email: "",
    password: "",
    rePassword: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: (values: RegisterForm) => {
      handleRegisterFormSubmit(values);
    },
  });

  const handleRegisterFormSubmit = (values: RegisterForm): void => {
    console.log(values);
  };

  return (
    <main className="w-[480px] px-10 py-20 shadow-2xl shadow-gray-600 rounded-xl">
      <LogRegHead title={"Sign up"} />
      <form
        onSubmit={formik.handleSubmit}
        className="w-full my-10 grid grid-flex-3 h-72 gap-y-6"
      >
        <div className="flex flex-col">
          <Input
            type={"text"}
            name="email"
            placeholder="Email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-sm text-red-400 font-bold">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <Input
            type={"password"}
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && formik.errors.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-sm text-red-400 font-bold">
              {formik.errors.password}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <Input
            type={"password"}
            name="rePassword"
            placeholder="Confirm Passsword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            error={formik.touched.rePassword && formik.errors.rePassword}
          />
          {formik.touched.rePassword && formik.errors.rePassword && (
            <div className="text-sm text-red-400 font-bold">
              {formik.errors.rePassword}
            </div>
          )}
        </div>

        <Button type="submit" variant="outlined">
          Sign up
        </Button>
      </form>
    </main>
  );
};

export default Register;
