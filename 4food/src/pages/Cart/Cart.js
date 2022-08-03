import React from "react";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { grey } from "@mui/material/colors";
import {
  ContainerCart,
  AddressUserCart,
  AddressRestaurantCart,
  InfoCart,
  Address,
  TitleRes,
  CardCart,
  BtnConfirm,
} from "./styled";
import { Title } from "@mui/icons-material";

export default function Cart() {
  return (
    <>
      <Header title={"Meu carrinho"} />
      <ContainerCart>
        <AddressUserCart>
          <InfoCart>Endereço de entrega</InfoCart>
          <Address> Rua: dsafsaqwkqwjkhqwkj</Address>
        </AddressUserCart>
        <AddressRestaurantCart>
          <TitleRes> Nome </TitleRes>
          <InfoCart> Endereço</InfoCart>
          <InfoCart>tempo</InfoCart>
        </AddressRestaurantCart>

        <CardCart> Carrinho vazio</CardCart>

        <FormControl fullWidth>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ color: "black", borderBottom: 1, width: "90%" }}
          >
            Forma de Pagamento
          </FormLabel>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Dinheiro"
              control={
                <Radio
                  sx={{
                    color: grey[900],
                    "&.Mui-checked": {
                      color: grey[900],
                    },
                  }}
                />
              }
              label="Dinheiro"
            />
            <FormControlLabel
              value="Cartao"
              control={
                <Radio
                  sx={{
                    color: grey[900],
                    "&.Mui-checked": {
                      color: grey[900],
                    },
                  }}
                />
              }
              label="Cartão"
            />
          </RadioGroup>
        </FormControl>
        <BtnConfirm>Confirmar</BtnConfirm>
      </ContainerCart>
      <Footer page={"cart"} />
    </>
  );
}
