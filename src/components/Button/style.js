import styled, { keyframes } from "styled-components"

const Animation = keyframes`
    0% {
        background-position: 100% 0;
    }

    50% {
        background-position: 50% 50%;
    }


    100% {
        background-position: 0 100%;
    }


`

export const Container = styled.button`
    width: 100%;

    padding: 1rem 0;
    border: none;
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    background-size: 200% 200%;
    border-radius: 1rem;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: #fff;

    &:hover {
        animation: ${Animation} 4s infinite ease-in-out alternate;
    }

    

`

