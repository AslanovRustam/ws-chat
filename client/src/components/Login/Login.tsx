import React, { useContext, FC } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Form from "../Form/Form";
import s from "./login.module.scss";

const Login: FC = () => {
  const { setUserName } = useContext(ThemeContext);

  return (
    <div className={s.container}>
      <Form
        submitForm={setUserName}
        title="Login"
        placeholder="Enter username"
        btnName="login"
      />
    </div>
  );
};

export default Login;
