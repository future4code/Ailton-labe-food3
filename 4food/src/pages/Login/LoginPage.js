import React, { useEffect, useState } from "react";
import LogoIFuture from "../../assets/logo-future-eats-invert.png";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import {
  TextField,
  CircularProgress,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useForm } from "../../hooks/useForm";
import {
  Container,
  DivTitle,
  Form,
  ImgLogo,
  Title,
  ButtonLogin,
  DivSignUp,
  TextSignUp,
  TextOnClick,
} from "../../global/GeneralStyled";
import clsx from "clsx";
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

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
    <Container>
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
        {/* <TextField
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
        /> */}

        <FormControl variant="outlined" fullWidth sx={{
            m: 0,
            mb: "1rem",
          }}>
          <InputLabel>Senha</InputLabel>
          <OutlinedInput
            id={"password"}
            name={"password"}
            value={form.password}
            onChange={handleInputChange}
            variant="outlined"
            label="Senha"
            type={values.showPassword ? "text" : "password"}
            title={"Digite sua senha"}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {values.showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

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
    </Container>
  );
}
