import { CircularProgress, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header/Header";
import { ButtonLogin, Form, LoaderContainer } from "../../global/GeneralStyled";
import { useForm } from "../../hooks/useForm";
import { useProtectPage } from "../../hooks/useProtectPage";
import { goToPage } from "../../routes/coordinator";
import { requestData } from "../../services/requestAPI";

export default function EditAddressPage() {
  useProtectPage();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [edit, setEdit] = useState(false);
  const { form, handleInputChange } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (data) {
      form.street = data.address.street;
      form.number = data.address.number;
      form.neighbourhood = data.address.neighbourhood;
      form.city = data.address.city;
      form.state = data.address.state;
      form.complement = data.address.complement;
    } else {
      requestData("get", "profile/address", "", token, setData);
    }
  }, [data]);

  useEffect(() => {
    if (edit) {
      goToPage(navigate, "/profile");
    }
  }, [edit]);

  const submitEditAddress = (e) => {
    e.preventDefault();
    requestData("put", "address", form, token, "", setEdit);
  };

  return (
    <div>
      <Header title={"Endereço"} />
      {!data && (
        <LoaderContainer>
          <CircularProgress style={{ color: "red" }} />
        </LoaderContainer>
      )}
      {data && (
        <Form onSubmit={submitEditAddress}>
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
      )}
    </div>
  );
}
