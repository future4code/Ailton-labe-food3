import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
#root,body{
  max-width: 100vw;
  min-height: 100vh;
}
#root{
  display: flex;
  flex-direction: column;
}
`;
