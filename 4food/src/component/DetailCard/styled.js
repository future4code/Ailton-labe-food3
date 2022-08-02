import styled from "styled-components";

export const Rectangle = styled.div`
  display: flex;
  width: 20.5rem;
  height: 7rem;
  margin: 0.438rem auto;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  position: relative;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 6rem;
  height: 100%;
  border-radius: 8px;
  background-color: #b8b8b8;
  object-fit: cover;
`;

export const Category = styled.span`
  color: #e8222e;
  height: 1.8rem;
  margin: 0.5rem 0 0;
  padding: 0.5rem 1rem 0;
`;
export const Description = styled.span`
  width: 12.5rem;
  height: 1.875rem;
  margin: 0 1rem 0.25rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;
export const Price = styled.span`
  width: 7.375rem;
  height: 1.188rem;
  margin: 0.25rem 0.5rem 0.938rem 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000;
`;
export const ButtonAdd = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  font-size: 0.75rem;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  width: 5.625rem;
  height: 1.938rem;
  border-radius: 8px 0 8px 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border: solid 1px #000;
`;

export const Quantity = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color:  #e8222e;
  display: flex;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  /* font-weight: 500; */
  width: 2.063rem;
  height: 2.063rem;
  border-radius: 0 8px 0 8px;
  right: 0;
  top: 0;
  position: absolute;
  border: solid 1px #e8222e;
`;
