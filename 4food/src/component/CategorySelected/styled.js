import styled from "styled-components";

export const Category = styled.p`
  color: ${({ select }) => (select ? "red" : "black")};
`;
