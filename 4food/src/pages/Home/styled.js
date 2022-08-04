import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 0 auto;
`;

export const InputSearch = styled.div`
  width: 328px;
  margin: 0 auto;
  margin-bottom: 0.5rem;
`;

export const FilterCategory = styled.div`
  display: flex;
  gap: 2.5rem;
  font-size: 1rem;
  overflow-x: scroll;
  padding: 0.75rem 2.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

`;
