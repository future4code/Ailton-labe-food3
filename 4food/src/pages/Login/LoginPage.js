import React, { useEffect, useState } from "react";
import LogoIFuture from "../../assets/logo-future-eats-invert.png";
import { TextField, CircularProgress } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import {
  ContainerLogin,
  DivTitle,
  Form,
  ImgLogo,
  Title,
  ButtonLogin,
  DivSignUp,
  TextSignUp,
  TextOnClick,
} from "./styled";
import { goToPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { requestData } from "../../services/requestAPI";
import { useUnprotectPage } from "../../hooks/useUnprotectPage";

export default function LoginPage() {
  useUnprotectPage();
  const { form, handleInputChange, clear } = useForm({
    email: "",
    password: "",
  });
  const [data, setData] = useState("");
  const navigate = useNavigate();

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

  const submitLogin = (event) => {
    event.preventDefault();
    requestData("post", "login", form, "", setData);
  };

  return (
    <ContainerLogin>
      <ImgLogo src={LogoIFuture} />
      <DivTitle>
        <Title>Entrar</Title>
      </DivTitle>
      <Form onSubmit={submitLogin}>
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
            mt: "0.75rem",
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
        <ButtonLogin>Entrar</ButtonLogin>
      </Form>
      <DivSignUp>
        <TextSignUp>
          Não possui cadastro?{" "}
          <TextOnClick onClick={() => goToPage(navigate, "/signup")}>
            Clique aqui.
          </TextOnClick>
        </TextSignUp>
      </DivSignUp>
    </ContainerLogin>
  );
}
