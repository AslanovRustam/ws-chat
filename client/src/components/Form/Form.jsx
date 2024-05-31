import { useState } from "react";
import Button from "../Button/Button";

function Form({ submitForm, title, placeholder, btnName }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {title && <p>{title}</p>}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <Button type="submit" name={btnName} />
    </form>
  );
}

export default Form;
