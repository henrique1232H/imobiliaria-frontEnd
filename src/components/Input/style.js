import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border-radius: 1rem;
    background: #fff;
    padding: 1.2rem 2rem;
    display: flex;
    align-items: center;
    border-style: ${({isActive}) => isActive ? "solid" : "none"};
    border-width: ${({isActive}) => isActive ? "1px" : "none"};
    border-color: ${({isActive}) => isActive ? "#000" : "none"};
    
    > input {
        width: 100%;
        border: none;
        background: none;
        padding: 0.4rem;
        outline: none;
    }

`