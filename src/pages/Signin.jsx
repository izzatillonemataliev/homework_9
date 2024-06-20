import FormInput from "../components/FormInput";
import { Form, useActionData, Link } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useEffect } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let email = formData.get("email");
  let password = formData.get("password");
  return { displayName, email, password };
};
function Signin() {
  const userData = useActionData();
  const { signUpWithEmailAndPassword } = useRegister();
  useEffect(() => {
    if (userData) {
      signUpWithEmailAndPassword(userData);
    }
  }, [userData]);
  return (
    <div className="min-h-screen grid place-items-center ">
      <Form method="post" className="w-96 ">
        <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
        <FormInput type="text" labelText="Display Name" name="displayName" />
        <FormInput type="email" labelText="Email" name="email" />
        <FormInput type="password" labelText="Password" name="password" />
        <Link to="/login">
          <h2 className="align-center font-bold mt-6 mb-2">
            Have you logged in before?
          </h2>
        </Link>
        <div>
          <button className="btn btn-fifty btn-block mt-3 " type="submit">
            Sign up
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Signin;
