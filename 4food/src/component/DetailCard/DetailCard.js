import React from 'react'
import { Category, Container, Description, Img, Price, Rectangle, Info, ButtonAdd, Quantity } from "./styled"
import { Title } from "../../global/GeneralStyled"

export default function DetailCard({ product }) {
  console.log('categotias', product.category)
  return (

    <Rectangle>
      <Quantity>2</Quantity>
      <div>
        <Img src={product.photoUrl} />
      </div>
      <Info>
        <Category>{product.name}</Category>
        <Description>{product.description}</Description>
        <Price>R${product.price.toFixed(2)}</Price>
        <ButtonAdd>Adicionar</ButtonAdd>
      </Info>

    </Rectangle>

  )
}
