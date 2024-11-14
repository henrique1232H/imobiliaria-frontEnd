import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    > img {
        border-radius: 2rem;
        margin: 2rem 0;
    }

    > p {
        font-size: 1.5rem;
    }
`