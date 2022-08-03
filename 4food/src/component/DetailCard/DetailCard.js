import React, { useState } from "react";

import {
  Category,
  Container,
  Description,
  Img,
  Price,
  Rectangle,
  Info,
  ButtonAdd,
  Quantity,
} from "./styled";
import { Title } from "../../global/GeneralStyled";
import QuantityDialog from "../QuantityDialog/QuantityDialog";

export default function DetailCard({ product }) {
  const [openButton, setOpenButton] = useState(false);

  const addToCart = () => {
    setOpenButton(true);
  };

  return (
    <Rectangle>
      <QuantityDialog openButton={openButton} setOpenButton={setOpenButton} />
      <Quantity>2</Quantity>
      <div>
        <Img src={product.photoUrl} />
      </div>
      <Info>
        <Category>{product.name}</Category>
        <Description>{product.description}</Description>
        <Price>R${product.price.toFixed(2)}</Price>
        <ButtonAdd onClick={addToCart}>Adicionar</ButtonAdd>
      </Info>
    </Rectangle>
  );
}
