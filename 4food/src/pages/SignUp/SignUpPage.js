import React, { useState, useEffect } from "react";
import LogoIFuture from "../../assets/logo-future-eats-invert.png";
import { TextField, CircularProgress, OutlinedInput } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { goToPage } from "../../routes/coordinator";
import { requestData } from "../../services/requestAPI";
import { useNavigate } from "react-router-dom";

import {
  Container,
  DivTitle,
  Form,
  ImgLogo,
  Title,
  ButtonLogin
} from "../../global/GeneralStyled";

export default function SignUpPage() {
  const navigate = useNavigate()
  const[passwordConfirm, setPasswordConfirm] = useState("")
  const [data, setData] = useState("");

  const { form, handleInputChange, clear } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const onChangePasswordConfirm = (event) => {
    setPasswordConfirm(event.target.value)
  }

  useEffect(() => {
    if (!!data) {
      console.log(data);
      localStorage.setItem("token", data.token);
      if (!!data.user.hasAddress) {
        goToPage(navigate, "/");
      } else {
        goToPage(navigate, "/address");
      }
    }
  }, [data]);

  const submitSignUp = (event) => {
    event.preventDefault();
    if(form.password === passwordConfirm){
      requestData("post", "signup", form, "", setData);
    } else {
      alert('Algo deu errado!')
    }
  }

  return (
    <Container>
      <ImgLogo src={LogoIFuture} />
      <DivTitle>
        <Title>Cadastrar</Title>
      </DivTitle>
      <Form onSubmit={submitSignUp}>
        <TextField
          name={"name"}
          value={form.name}
          onChange={handleInputChange}
          label={"Nome"}
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
          name={"email"}
          value={form.email}
          onChange={handleInputChange}
          label={"E-Mail"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          type={"email"}
          sx={{
            m: 0,
            mb: "1rem",
          }}
        />
        <TextField
          name={"cpf"}
          value={form.cpf}
          onChange={handleInputChange}
          label={"CPF"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          pattern="([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})"
          sx={{
            m: 0,
            mb: "1rem",
          }}
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={handleInputChange}
          label={"Senha"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          type={"password"}
          sx={{
            m: 0,
            mb: "1rem",
          }}
        />
        <TextField
          name={"passwordConfirm"}
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
          label={"Confirmar Senha"}
          variant={"outlined"}
          fullWidth
          margin="normal"
          required
          type={"password"}
          sx={{
            m: 0,
            mb: "1rem",
          }}
        />
        <ButtonLogin>Criar</ButtonLogin>
      </Form>
    </Container>
  );
}
