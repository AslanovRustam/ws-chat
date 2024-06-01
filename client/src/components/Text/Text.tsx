import React, { type FC } from "react";
import s from "./text.module.scss";

interface TextProps {
  text: string;
}

const Text: FC<TextProps> = ({ text }) => {
  return <p className={s.text}>{text}</p>;
};

export default Text;
