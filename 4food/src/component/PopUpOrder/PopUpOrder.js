import React from "react";
import Clock from "../../assets/img/clock.png";
import { OrderCard, PopUpCard, Img, Order, Restaurant, Price } from "./styled"

export default function PopUpOrder() {
  return (
    <OrderCard>
        <PopUpCard>
      <Img src={Clock} alt="clock" />
      <div>
        <Order>Pedido em andamento</Order>
        <Restaurant>Burguer Vila Madalena</Restaurant>
        <Price> SUBTOTAL R$67,00 </Price>
      </div>
      </PopUpCard>
    </OrderCard>
  );
}
