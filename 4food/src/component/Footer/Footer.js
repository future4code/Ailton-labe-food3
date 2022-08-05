import React from 'react'
import { useNavigate } from "react-router-dom";
import { Container, IconImg, Icons } from './styled';
import { goToPage } from "../../routes/coordinator";
import Home from "../../assets/img/home.png"
import Home2 from "../../assets/img/home2.png"
import Cart from "../../assets/img/cart.png"
import Cart2 from "../../assets/img/cart2.png"
import Avatar from "../../assets/img/avatar.png"
import Avatar2 from "../../assets/img/avatar2.png"

export default function Footer({ page }) {
  const navigate = useNavigate();
  return (

    <Container>
      <Icons>
        <IconImg src={page === "home" ? Home : Home2} alt="Home" onClick={() => goToPage(navigate, "/")} />
        <IconImg src={page === "cart" ? Cart : Cart2} alt="Carrinho" onClick={() => goToPage(navigate, "/cart")} />
        <IconImg src={page === "profile" ? Avatar : Avatar2} alt="Perfil" onClick={() => goToPage(navigate, "/profile")} />
      </Icons>
    </Container>
  )
}
