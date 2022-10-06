import React, { useContext, useEffect, useState } from "react";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
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
  Shipping,
  TotalPrice,
  Payment,
  TotalPriceValue,
  BtnConfirmDisable,
  CartEmpty,
  LabelP,
} from "./styled";
import { requestData } from "../../services/requestAPI";
import { GlobalContext } from "../../global/GlobalContext";
import { useProtectPage } from "../../hooks/useProtectPage";
import Swal from "sweetalert2";
import DetailCard from "../../component/DetailCard/DetailCard";
import { LoaderContainer, Space } from "../../global/GeneralStyled";
import { CircularProgress } from "@mui/material";

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
        products: [],
      });
      localStorage.setItem(
        "cart",
        JSON.stringify({
          restaurant: {},
          products: [],
        })
      );
      Swal.fire({
        icon: "success",
        title: "",
        text: "Compra realizada com sucesso",
        confirmButtonColor: "#e8222e",
      });
    }
  }, [order]);

  const arrayProducts = cart?.products?.map((item) => {
    return { id: item.id, quantity: item.quantity };
  });

  let totalPrice = cart.restaurant.shipping;
  for (const product of cart.products) {
    totalPrice += product.price * product.quantity;
  }

  return (
    <>
      <Header title={"Meu carrinho"} />
      {!data && (
        <LoaderContainer>
          <CircularProgress style={{ color: "red" }} />
        </LoaderContainer>
      )}
      {data && (
        <ContainerCart>
          <AddressUserCart>
            <InfoCart>Endereço de entrega</InfoCart>
            <Address>
              {data?.address?.street}, {data?.address?.number} -{" "}
              {data?.address?.neighbourhood}
            </Address>
          </AddressUserCart>
          {cart?.products?.length === 0 && (
            <CartEmpty>Carrinho vazio</CartEmpty>
          )}
          {cart?.products?.length > 0 && (
            <>
              <AddressRestaurantCart>
                <TitleRes>{cart.restaurant.name}</TitleRes>
                <InfoCart>{cart.restaurant.address}</InfoCart>
                <InfoCart>
                  {cart.restaurant.deliveryTime - 10} -{" "}
                  {cart.restaurant.deliveryTime}
                  min
                </InfoCart>
              </AddressRestaurantCart>
              <CardCart>
                {cart?.products?.map((item) => {
                  return (
                    <DetailCard
                      key={item.id}
                      product={item}
                      page={"cart"}
                      restaurant={cart?.restaurant}
                    />
                  );
                })}
              </CardCart>
            </>
          )}
          <Shipping>
            Frete R$
            {cart?.restaurant?.shipping
              ? cart?.restaurant?.shipping?.toFixed(2)
              : "0,00"}
          </Shipping>
          <TotalPrice>
            SUBTOTAL
            <TotalPriceValue>
              R${totalPrice ? totalPrice?.toFixed(2).replace(".", ",") : "0,00"}
            </TotalPriceValue>
          </TotalPrice>
          <Payment>
            <LabelP>Forma de Pagamento</LabelP>

            <FormControl fullWidth>
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
          </Payment>
          {cart?.products?.length > 0 && (
            <BtnConfirm onClick={submitLogin}>Confirmar</BtnConfirm>
          )}
          {cart?.products?.length === 0 && (
            <BtnConfirmDisable>Confirmar</BtnConfirmDisable>
          )}
        </ContainerCart>
      )}
      <Space />
      <Footer page={"cart"} />
    </>
  );
}
