import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { fetchData } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const resp = await fetchData.post("/auth/local/register", data);
    toast.success("Account created successfully!");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "Please double check your credentials!";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-80 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center font-bold text-3xl">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member?{" "}
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize">
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
