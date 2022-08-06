import styled from "styled-components";
import { ButtonLogin } from "../../global/GeneralStyled";

export const ContainerCart = styled.div`
  position: relative;
`;
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
  width: 20.5rem;
  margin: 0 auto;
  margin-top: 1rem;
`;
export const BtnConfirmDisable = styled(BtnConfirm)`
  background-color: rgba(232, 34, 46, 0.5);
  position: fixed;
  bottom: 4rem;
  left: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Shipping = styled.p`
  text-align: right;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 1rem 1.5rem;
`;
export const TotalPrice = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
export const TotalPriceValue = styled.p`
  color: #e8222e;
  font-size: 1.125rem;
  font-weight: bold;
`;
export const Payment = styled.div`
  padding-left: 1.5rem;
`;
export const CartEmpty = styled.p`
  margin-top: 1.5rem;
  margin-bottom: 2.813rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  letter-spacing: -0.39px;
  text-align: center;
`;
export const LabelP = styled.p`
  height: 1.3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  letter-spacing: -0.39px;
  line-height: 0.5rem;
  border-bottom: 1px solid #000;
  margin-right: 1.5rem;
`;
