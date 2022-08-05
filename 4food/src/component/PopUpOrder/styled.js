import styled from "styled-components";

export const OrderCard = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 7.375rem;
  justify-content: center;
  background-color: #e8222e;
  bottom: 2.96rem;
  align-items: center;
`;

export const PopUpCard = styled.div`
  display: flex;
  margin: 0 1.5rem;
  align-items: center;
  justify-content: center;
`;
export const Img = styled.img`
  width: 2rem;
  height: 2rem;
  margin: 0.125rem 1.5rem 0 0;
  object-fit: contain;
`;
export const Order = styled.p`
  width: 16rem;
  height: 1.125rem;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  margin-bottom: 4px;
  color: #fff;
`;
export const Restaurant = styled(Order)`
  color: #000;
  

`;
export const Price = styled(Order)`
  font-weight: bold;
  color: #000;
`;
