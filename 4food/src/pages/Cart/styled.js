import styled from "styled-components";
import { ButtonLogin } from "../../global/GeneralStyled";

export const ContainerCart = styled.div``;

export const AddressUserCart = styled.div`
  height: 4.75rem;
  background-color: #eee;
`;

export const InfoCart = styled.p`
  width: 20.5rem;
  height: 1.125rem;
  margin: 0.5rem 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;
export const Address = styled(InfoCart)`
  color: #000;
`;
export const TitleRes = styled(InfoCart)`
  color: #e8222e;
`;
export const AddressRestaurantCart = styled.div``;
export const CardCart = styled.div``;
export const BtnConfirm = styled(ButtonLogin)`
  position: absolute;
  bottom: 4.062rem;
`;
