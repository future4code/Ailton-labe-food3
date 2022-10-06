import styled from "styled-components";
import {
  Category,
  Description,
  Info,
  Price,
  Rectangle,
} from "../DetailCard/styled";

export const RectangleHistory = styled(Rectangle)`
  display: block;
`;
export const PriceHistory = styled(Price)`
  width: 100%;
`;
export const Month = styled.span`
  text-transform: capitalize;
`;
export const DescriptionDate = styled(Description)`
  color: #000;
  display: flex;
  align-items: center;
`;
export const CategoryHistory = styled(Category)``;
export const InfoHistory = styled(Info)``;
