import React, { useState, useEffect } from "react";
import LogoIFuture from "../../assets/img/logo.png";
import { TextField, CircularProgress, OutlinedInput } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { goToPage } from "../../routes/coordinator";
import { requestData } from "../../services/requestAPI";
import { useNavigate } from "react-router-dom";
import { useUnprotectPage } from "../../hooks/useUnprotectPage";
import Header from "../../component/Header/Header";
import { Logo } from "./styled";
import {
  Container,
  DivTitle,
  Form,
  ImgLogo,
  Title,
  ButtonLogin,
} from "../../global/GeneralStyled";

export default function SignUpPage() {
  useUnprotectPage();
  const navigate = useNavigate();
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [data, setData] = useState("");

  const { form, handleInputChange, clear } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const onChangePasswordConfirm = (event) => {
    setPasswordConfirm(event.target.value);
  };

  useEffect(() => {
    if (!!data) {
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
    if (form.password === passwordConfirm) {
      requestData("post", "signup", form, "", setData);
    } else {
      alert("Algo deu errado!");
    }
  };

  return (
    <Container>
      <Header />
      <Logo src={LogoIFuture} />
      <DivTitle>
        <Title>Cadastrar</Title>
      </DivTitle>
      <Form onSubmit={submitSignUp}>
        <TextField
          name={"name"}
          value={form.name}
          onChange={handleInputChange}
          label={"Nome"}
          placeholder={"Nome e sobrenome"}
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
          placeholder={"email@email.com"}
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
          placeholder={"000.000.000-00"}
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
          pattern={"^.{6,}"}
          title={"Senha deve conter no mínimo 6 caracteres"}
          placeholder={"Mínimo 6 caracteres"}
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
          placeholder={"Confirme a senha anterior"}
          pattern={"^.{6,}"}
          title={"Senha deve conter no mínimo 6 caracteres"}
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
