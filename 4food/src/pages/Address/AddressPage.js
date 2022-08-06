import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { goToPage } from "../../routes/coordinator";
import { requestData } from "../../services/requestAPI";
import { useNavigate } from "react-router-dom";
import { useProtectPage } from "../../hooks/useProtectPage";
import {
  Container,
  DivTitle,
  Form,
  Title,
  ButtonLogin,
} from "../../global/GeneralStyled";

export default function AddressPage() {
  useProtectPage();
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const { form, handleInputChange } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  useEffect(() => {
    if (!!data) {
      localStorage.setItem("token", data.token);
      goToPage(navigate, "/");
    }
  }, [data]);

  const submitAddress = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    requestData("put", "address", form, token, setData);
  };
  return (
    <Container>
      <DivTitle>
        <Title>Meu endereço</Title>
      </DivTitle>
      <Form onSubmit={submitAddress}>
        <TextField
          name={"street"}
          value={form.street}
          onChange={handleInputChange}
          label={"Logradouro"}
          placeholder={"Rua / Av."}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          sx={{
            m: 0,
            mt: "0.75rem",
            mb: "1rem",
          }}
        />
        <TextField
          name={"number"}
          value={form.number}
          onChange={handleInputChange}
          label={"Número"}
          placeholder={"Número"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          sx={{
            m: 0,
            mb: "1rem",
          }}
        />
        <TextField
          name={"complement"}
          value={form.complement}
          onChange={handleInputChange}
          label={"Complemento"}
          placeholder={"Apto. / Bloco"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          sx={{
            m: 0,
            mb: "1rem",
          }}
        />
        <TextField
          name={"neighbourhood"}
          value={form.neighbourhood}
          onChange={handleInputChange}
          label={"Bairro"}
          placeholder={"Bairro"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          sx={{
            m: 0,
            mb: "1rem",
          }}
        />
        <TextField
          name={"city"}
          value={form.city}
          onChange={handleInputChange}
          label={"Cidade"}
          placeholder={"Cidade"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          sx={{
            m: 0,
            mb: "1rem",
          }}
        />
        <TextField
          name={"state"}
          value={form.state}
          onChange={handleInputChange}
          label={"Estado"}
          placeholder={"Estado"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          sx={{
            m: 0,
            mb: "1rem",
          }}
        />
        <ButtonLogin>Salvar</ButtonLogin>
      </Form>
    </Container>
  );
}
