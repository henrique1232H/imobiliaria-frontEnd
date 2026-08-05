import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    padding: 0.6rem 2rem;
    font-size: 1rem;
    border-radius: 2rem;
    width: ${({card}) => card ?? "auto"};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    p {
        font-weight: 600
    }


    > span {
        display: block;
        height: 1rem;
        width: 1rem;
        background: red;
        border-radius: 5rem;
    }

`