import React, { useContext, useEffect, useState } from "react";

import {
  Category,
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
import { GlobalContext } from "../../global/GlobalContext";

export default function DetailCard({ product, restaurant }) {
  const [openButton, setOpenButton] = useState(false);
  const { setCart, cart } = useContext(GlobalContext);
  const [qntProduct, setQntProduct] = useState(1);
  const [confirmAdd, setConfirmAdd] = useState(false);
  const [existe, setExiste] = useState({ bool: false, index: 0 });

  const addToCart = () => {
    setOpenButton(true);
  };
  useEffect(() => {
    if (confirmAdd) {
      const spreadCart = { ...cart };
      spreadCart.restaurant = {
        name: restaurant.name,
        address: restaurant.address,
        deliveryTime: restaurant.deliveryTime,
        id: restaurant.id,
      };
      spreadCart.products.push({
        quantity: qntProduct,
        ...product,
      });
      setCart(spreadCart);
    }
  }, [confirmAdd]);

  useEffect(() => {
    const spreadCart = { ...cart };
    for (let i = 0; i < spreadCart.products.length; i++) {
      if (spreadCart.products[i].id === product.id) {
        setExiste({ bool: true, index: i });
      }
    }
  }, [cart]);

  return (
    <Rectangle>
      <QuantityDialog
        openButton={openButton}
        setOpenButton={setOpenButton}
        qntProduct={qntProduct}
        setQntProduct={setQntProduct}
        setConfirmAdd={setConfirmAdd}
      />
      {existe.bool && (
        <Quantity>{cart.products[existe.index].quantity}</Quantity>
      )}
      <div>
        <Img src={product.photoUrl} />
      </div>
      <Info>
        <Category>{product.name}</Category>
        <Description>{product.description}</Description>
        <Price>R${product.price.toFixed(2)}</Price>
        {!existe.bool && <ButtonAdd onClick={addToCart}>Adicionar</ButtonAdd>}
        {existe.bool && <ButtonAdd>Remover</ButtonAdd>}
      </Info>
    </Rectangle>
  );
}
