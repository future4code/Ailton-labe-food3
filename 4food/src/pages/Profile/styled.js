import styled from "styled-components";

export const InfoUser = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
`;
export const Address = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #eeeeee;
  min-height: 5.25rem;
  padding: 0 1rem;
  margin-top: 1rem;
  align-items: center;
`;
export const History = styled.div`
  margin: 1rem 1rem 0.5rem;
`;

export const Img = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`;
export const Info = styled.p`
  height: 1.300rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  letter-spacing: -0.39px;
  color: #000;
`;
export const TitleAddress = styled(Info)`
  color: #b8b8b8;
`;
export const InfoHistory = styled(Info)`
  line-height: 0.5rem;
  border-bottom: 1px solid #000;
`;

export const ZeroOrders = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  letter-spacing: -0.39px;
  text-align: center;
  margin-top: 1rem;
`
