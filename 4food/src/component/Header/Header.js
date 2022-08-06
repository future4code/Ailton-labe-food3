import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";
import { Container, GoBack, HeaderTitle, LogoutImg } from "./styled";
import LogoutImg1 from "../../assets/img/Logout.png";

export default function Header({ title, Logout, page }) {
  const navigate = useNavigate();
  return (
    <Container page={page}>
      <GoBack onClick={() => goToPage(navigate, -1)} />
      <HeaderTitle>{title} </HeaderTitle>
      {title === "Meu perfil" && (
        <LogoutImg onClick={Logout} src={LogoutImg1} alt="logout" />
      )}
    </Container>
  );
}
