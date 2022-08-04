import React, { useContext, useState } from "react";
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
import { requestData } from "../../services/requestAPI";
import { GlobalContext } from "../../global/GlobalContext";
import { useProtectPage } from "../../hooks/useProtectPage";

export default function Cart() {
  useProtectPage();
  const [radio, setRadio] = useState("money");
  const [order, setOrder] = useState();
  const { setCart, cart } = useContext(GlobalContext);
  const token = localStorage.getItem("token");
  const submitLogin = (event) => {
    const body = { products: [...arrayProducts], paymentMethod: radio };
    requestData(
      "post",
      `restaurants/${cart.restaurant.id}/order`,
      body,
      token,
      setOrder
    );
  };
  console.log("Cart", cart.products);

  const arrayProducts = cart?.products?.map((item) => {
    return { id: item.id, quantity: item.quantity };
  });
  console.log("ArrayProdutcs", arrayProducts);
  console.log(radio);
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
            defaultValue="money"
            name="radio-buttons-group"
            onChange={(event) => {
              setRadio(event.target.value);
            }}
          >
            <FormControlLabel
              value="money"
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
              value="creditcard"
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
        <BtnConfirm onClick={submitLogin}>Confirmar</BtnConfirm>
      </ContainerCart>
      <Footer page={"cart"} />
    </>
  );
}
