import { useContext } from "react";
import Form from "../Form/Form";
import { ThemeContext } from "../../context/ThemeContext";

function Login() {
  const { setUserName } = useContext(ThemeContext);

  return (
    <Form
      submitForm={setUserName}
      title="Login"
      placeholder="Enter username"
      btnName="login"
    />
  );
}

export default Login;
