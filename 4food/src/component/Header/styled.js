import styled from "styled-components"
import { MdOutlineArrowBackIosNew } from "react-icons/md";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    margin: ${({ page }) => page === 'not found' ? '0' : '0 0 0.3rem'} ;
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: ${({ page }) => page === 'not found' ? '#e8222e' : '#fff'};

`
export const HeaderTitle = styled.h2`
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        letter-spacing: -0.39px;
        display: flex;
        font-weight: 500;
        font-size: 1rem;
        text-align: center;
        margin: 0 auto;
`

export const GoBack = styled(MdOutlineArrowBackIosNew)`
    width: 1.44rem;
    height: 1.5rem;
    margin: 0.625rem 3.373rem 0.625rem 1rem;
    object-fit: contain;
    position: absolute;
`

export const LogoutImg = styled.img`
height: 1.5rem;
position: absolute;
right: 0;
margin: 0.8rem 1rem 0.625rem 3.373rem ;
`
