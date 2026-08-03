import styled from "styled-components";

export const Container = styled.div`

    background: ${({theme}) => theme.colors.primary[100]};
    height: 100%;
    min-height:100vh;
    


    > main {
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

`


export const EmptyJob = styled.div`
    background: #d3e0ef;
    margin-top: 3rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;

    color: #000;

    > svg {
        font-size: 15rem;
        color: #fff;
    }

`