import CardContent from "@mui/material/CardContent";
import styled from "styled-components";
import Card from "@mui/material/Card";

export const CardContainer = styled(Card)`
  margin: 0 auto;
`;

export const CardInfo = styled(CardContent)`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  color: #b8b8b8;
  padding: 16px 0;
`;

export const Title = styled.span`
  color: #e8222e;
  width: 18.5rem;
  height: 1.125rem;
  padding-top: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;

export const DetailsTitle = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  border-bottom: 1px solid black;
  width: 20.5rem;
  padding-bottom: 0.5rem;
  margin: 0.5rem auto;
`;
