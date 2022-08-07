import React, { useEffect, useState } from "react";
import LogoIFuture from "../../assets/img/logo.png";
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
import { goToPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { requestData } from "../../services/requestAPI";
import { useUnprotectPage } from "../../hooks/useUnprotectPage";
import Loading from "../../component/Loading/Loading";

export default function LoginPage() {
  useUnprotectPage();
  const [load, setLoad] = useState(true);
  const { form, handleInputChange } = useForm({
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
    setTimeout(() => {
      setLoad(false)
    }, 2500);
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

  const submitLogin = (event) => {
    event.preventDefault();
    requestData("post", "login", form, "", setData);
  };

  return (
    <>
      {load && <Loading />}
      {!load && (
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
              placeholder={"email@email.com"}
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
                id={"password"}
                name={"password"}
                value={form.password}
                onChange={handleInputChange}
                variant="outlined"
                pattern={"^.{6,}"}
                title={"Senha deve conter no mínimo 6 caracteres"}
                label="Senha"
                placeholder={"Mínimo 6 caracteres"}
                type={values.showPassword ? "text" : "password"}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {values.showPassword ? (
                        <MdVisibility />
                      ) : (
                        <MdVisibilityOff />
                      )}
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
      )}
    </>
  );
}
