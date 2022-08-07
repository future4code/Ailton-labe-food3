import React from "react";
import { ContainerLoad, ImgLoad } from "./styled";
import logo from "../../assets/img/logo2.png";

export default function Loading() {
  return (
    <ContainerLoad>
      <ImgLoad src={logo} />
    </ContainerLoad>
  );
}
