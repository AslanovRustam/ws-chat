import React, { useState, ChangeEvent, FormEvent, FC } from "react";
import Button from "../Button/Button";
import "./form.module.scss";
import Text from "../Text/Text";

interface FormProps {
  submitForm: (value: string) => void;
  title?: string;
  placeholder?: string;
  btnName: string;
}

const Form: FC<FormProps> = ({ submitForm, title, placeholder, btnName }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {title && <Text text={title} />}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <Button type="submit" name={btnName} />
    </form>
  );
};

export default Form;
