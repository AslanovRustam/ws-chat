import React, { useContext, type FC } from "react";
import s from "./button.module.scss";
import { IButton } from "../../types/intrfaces";
import { ThemeContext } from "../../context/ThemeContext";

interface ButtonProps {
  name: string;
  onClick?: () => void;
  type?: IButton;
}

const Button: FC<ButtonProps> = ({ onClick, name, type }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${s.btn} ${theme && s[theme]}`}
    >
      {name}
    </button>
  );
};

export default Button;
