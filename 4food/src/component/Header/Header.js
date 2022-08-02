import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/coordinator";
import { Container, GoBack } from "./styled";

export default function Header({ title }) {
  const navigate = useNavigate()
  return (
    <Container>
      <GoBack onClick={()=> goToPage(navigate, -1)} />
      <h2>{title} </h2>
    </Container>
  );
}
