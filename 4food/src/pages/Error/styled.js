import styled from "styled-components";

export const ErrorContainer = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  background-color: #e8222e;
`;
export const TitleError = styled.h1`
  font-size: 200px;
  font-weight: 900;
  margin-bottom: -20px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
export const DescriptionError = styled.p`
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 100px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
