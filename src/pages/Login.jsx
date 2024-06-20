import React, { useEffect } from "react";
import FormInput from "../components/FormInput";
import { Form, Link, useActionData, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export const handleLogin = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

function Login() {
  const userData = useActionData();
  const { signInWithEmailAndPassword } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      const { email, password } = userData;
      signInWithEmailAndPassword(email, password)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.error("Error logging in:", error);
        });
    }
  }, [userData, signInWithEmailAndPassword, navigate]);

  return (
    <div className="min-h-screen grid place-items-center">
      <Form method="post" className="w-96">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <FormInput type="email" labelText="Email" name="email" />
        <FormInput type="password" labelText="Password" name="password" />
        <Link to="/signin">
          <h2 className="align-center font-bold mt-6 mb-2">
            Sizda hisob bormi?
          </h2>
        </Link>
        <div>
          <button className="btn btn-fifty btn-block mt-3" type="submit">
            Login
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
