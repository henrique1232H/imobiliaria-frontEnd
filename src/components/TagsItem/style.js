import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
    background: ${({isNew}) => isNew ? "#ccc" : "#0b4f76"};
    padding: 1rem;
    border-radius: 1rem;
    border-width: ${({isNew}) => isNew ? "1px" : "none"};
    border-style: ${({isNew}) => isNew ? "dashed" : "none"};


    > input {
        background: none;
        border: none;
        width: auto;
        outline: none;
        color: ${({isNew}) => isNew ? "#000" : "#fff"};
    }

    > input:focus {
        border-bottom: 1px solid #000;
    }

    > input::placeholder {
        color: #fff;
    }

    > button {
        background: none;
        display: flex;
        align-items: center;
        border: none;
        padding: 0.5rem;
        cursor: pointer;
    }
`