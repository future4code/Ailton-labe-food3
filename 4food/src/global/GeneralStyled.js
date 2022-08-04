import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImgLogo = styled.img`
  width: 6.5rem;
  height: 3.625rem;
  margin: 0 auto;
  margin-top: 4.25rem;
  object-fit: contain;
`;

export const DivTitle = styled.div`
  height: 2.625rem;
  margin: 1rem 0 0;
  padding: 0.75rem 2rem;
`;

export const Title = styled.p`
  width: 18.5rem;
  height: 1.125rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`;

export const Form = styled.form`
  padding: 0 1rem;
`;

export const ButtonLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8222e;
  border: none;
  border-radius: 2px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: black;
  height: 2.625rem;
  width: 100%;
`;

export const DivSignUp = styled.div`
  margin-top: 0.5rem;
  height: 2.625rem;
  padding: 0.75rem 2rem;
`;

export const TextSignUp = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: black;
`;

export const TextOnClick = styled.strong`
  font-size: 1rem;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
`;
export const Space = styled.div`
  height: 3.562rem;
  width: 100%;
`;
