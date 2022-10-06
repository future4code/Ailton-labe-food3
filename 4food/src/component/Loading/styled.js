import styled from "styled-components";

export const ContainerLoad = styled.div`
  background-color: #e8222e;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgLoad = styled.img`
  width: 7.875rem;
  height: 4.063rem;
  object-fit: contain;
  animation: scaleButton 2.5s infinite ease-in-out;
  @keyframes scaleButton {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
