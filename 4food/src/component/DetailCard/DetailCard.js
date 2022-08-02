import React from 'react'
import { Category, Container, Description, Img, Price, Rectangle, Info, ButtonAdd, Quantity } from "./styled"
import { Title } from "../../global/GeneralStyled"

export default function DetailCard({product}) {
  return (
  
        <Rectangle>
          <Quantity>2</Quantity>
            <div>
            <Img src={product.photoUrl} />
            </div>
            <Info>
            <Category>{product.category}</Category>
            <Description>{product.description}</Description>
            <Price>R${product.price},00</Price>
            <ButtonAdd>Adicionar</ButtonAdd>
            </Info>

        </Rectangle>
  
  )
}
