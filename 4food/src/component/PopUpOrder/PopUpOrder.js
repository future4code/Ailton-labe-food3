import React from "react";
import Clock from "../../assets/img/clock.png";
import { OrderCard, PopUpCard, Img, Order, Restaurant, Price } from "./styled"

export default function PopUpOrder({order}) {
  return (
    <OrderCard>
        <PopUpCard>
      <Img src={Clock} alt="clock" />
      <div>
        <Order>Pedido em andamento</Order>
        <Restaurant>{order?.order?.restaurantName}</Restaurant>
        <Price> SUBTOTAL R${order?.order?.totalPrice.toFixed(2).replace(".", ",")}</Price>
      </div>
      </PopUpCard>
    </OrderCard>
  );
}
