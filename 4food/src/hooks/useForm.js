import { useState } from "react";

export const useForm = (inicialState) => {
  const [form, setForm] = useState(inicialState);
  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };
  return { form, handleInputChange };
};
