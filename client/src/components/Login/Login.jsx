import Form from "../Form/Form";

function Login({ setUserName }) {
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
