import React, { useState, useEffect } from "react";
import LogoIFuture from "../../assets/img/logo.png";
import {
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
} from "@mui/material";
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
  Title,
  ButtonLogin,
  ErrorText,
} from "../../global/GeneralStyled";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function SignUpPage() {
  useUnprotectPage();
  const navigate = useNavigate();
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [data, setData] = useState("");

  const { form, handleInputChange } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const [values, setValues] = useState({
    password: false,
    passwordConfirm: false,
  });

  const handleClickShowPassword = (name) => {
    setValues({ ...values, [name]: !values[name] });
  };

  const onChangePasswordConfirm = (event) => {
    setPasswordConfirm(event.target.value);
  };

  useEffect(() => {
    if (!!data) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("hasAddress", data.user.hasAddress);
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
        <FormControl
          variant="outlined"
          fullWidth
          sx={{
            m: 0,
            mb: "1rem",
          }}
        >
          <InputLabel>Senha</InputLabel>
          <OutlinedInput
            name={"password"}
            value={form.password}
            onChange={handleInputChange}
            label="Senha"
            pattern={"^.{6,}"}
            variant={"outlined"}
            fullWidth
            margin="dense"
            required
            type={values.password ? "text" : "password"}
            sx={{
              m: 0,
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => handleClickShowPassword("password")}
                  edge="end"
                >
                  {values.password ? <MdVisibility /> : <MdVisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl
          variant="outlined"
          fullWidth
          sx={{
            m: 0,
            mb: "1rem",
          }}
        >
          <InputLabel>Confirmar Senha</InputLabel>
          <OutlinedInput
            id="outlined-error-helper-text"
            name={"passwordConfirm"}
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
            label={"Confirmar Senha"}
            pattern={"^.{6,}"}
            variant={"outlined"}
            fullWidth
            margin="dense"
            sx={{
              m: 0,
            }}
            required
            type={values.passwordConfirm ? "text" : "password"}
            error={form.password !== passwordConfirm && passwordConfirm !== ""}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => handleClickShowPassword("passwordConfirm")}
                  edge="end"
                >
                  {values.passwordConfirm ? (
                    <MdVisibility />
                  ) : (
                    <MdVisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          {form.password !== passwordConfirm && passwordConfirm !== "" && (
            <ErrorText>Deve ser a mesma que a anterior</ErrorText>
          )}
        </FormControl>
        <ButtonLogin>Criar</ButtonLogin>
      </Form>
    </Container>
  );
}
