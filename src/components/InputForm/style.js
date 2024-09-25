import styled from "styled-components";


export const Container = styled.div`
    background: red;
    margin: 1rem 0;

    > input {
        width: 100%;
        border: none;
        border-bottom: 1px solid #ccc;
        padding: 1rem 0.3rem;
        outline: none;
    }

    > input:focus {
        color: #000;
        border-bottom: 1px solid #000;
    }


`