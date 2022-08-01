import CardContent from "@mui/material/CardContent";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const CardInfo = styled(CardContent)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #b8b8b8;
`;
export const Title = styled.span`
  color: #e8222e;
  width: 18.5rem;
  height: 1.125rem;
  margin: 0.75rem 1rem 0.25rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.5rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  margin-left: 1rem;
`;
