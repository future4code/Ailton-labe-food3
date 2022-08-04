import React, { useContext, useEffect, useState } from "react";
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
import Swal from "sweetalert2";
import DetailCard from "../../component/DetailCard/DetailCard";
import { Space } from "../../global/GeneralStyled";

export default function Cart() {
  useProtectPage();
  const [radio, setRadio] = useState("money");
  const [order, setOrder] = useState();
  const [data, setData] = useState();
  const { cart, setCart } = useContext(GlobalContext);

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

  useEffect(() => {
    requestData("get", "profile/address", "", token, setData);
    if (order) {
      setCart({ 
        restaurant: {}, 
        products: [] 
      });
      Swal.fire({
        icon: "success",
        title: "",
        text: "Compra realizada com sucesso",
        confirmButtonColor: "#e8222e",
      });
    }
  }, [order]);

  console.log(order);
  const arrayProducts = cart?.products?.map((item) => {
    return { id: item.id, quantity: item.quantity };
  });
  return (
    <>
      <Header title={"Meu carrinho"} />
      <ContainerCart>
        <AddressUserCart>
          <InfoCart>Endereço de entrega</InfoCart>
          <Address>
            {data?.address?.street}, {data?.address?.number} -{" "}
            {data?.address?.neighbourhood}
          </Address>
        </AddressUserCart>
        <AddressRestaurantCart>
          <TitleRes>{cart.restaurant.name}</TitleRes>
          <InfoCart>{cart.restaurant.address}</InfoCart>
          <InfoCart>
            {cart.restaurant.deliveryTime - 10} - {cart.restaurant.deliveryTime}
            min
          </InfoCart>
        </AddressRestaurantCart>

        <CardCart>
          {cart?.products?.map((item) => {
            return (
              <DetailCard
                key={item.id}
                product={item}
                restaurant={cart?.restaurant}
              />
            );
          })}
        </CardCart>

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
      <Space />
      <Footer page={"cart"} />
    </>
  );
}
