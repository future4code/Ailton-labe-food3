import styled from "styled-components";
import { ButtonLogin } from "../../global/GeneralStyled";

export const ContainerCart = styled.div``;

export const AddressUserCart = styled.div`
  height: 4.75rem;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoCart = styled.p`
  width: 20.5rem;
  margin: 0.1rem 1rem;
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
  padding: 0.3rem 0;
  color: #e8222e;
`;
export const AddressRestaurantCart = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CardCart = styled.div``;
export const BtnConfirm = styled(ButtonLogin)`
  bottom: 4.062rem;
`;
