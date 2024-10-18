import styled, { keyframes } from "styled-components";

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

export const Container = styled.div`

    display: flex;
    justify-content: space-between;

    > div {
        width: 50%;
        height: 100vh;
        background: red;
        background-color: #8EC5FC;
        background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
        background-size: 200% 200%;
        animation: ${Animation} 4s infinite ease-in-out alternate;


    }


    @media (max-width: 1000px) {
        > div {
            display: none;
            background: none;
        }
    }

    
`

export const Form = styled.form`
    width: 50%;
    padding: 10rem 4rem;
    display: flex;
    flex-direction: column;
    position: relative;

    .checkbox {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin: 1rem 0;
    }


    @media (max-width: 1000px) {
        width: 100%;
        height: 100vh;
        justify-content: center;

    }

`