import styled from "styled-components";

export const Container = styled.div`

    background: ${({theme}) => theme.colors.primary[100]};
    height: 100%;
    min-height:100vh;
    


    > main {
        margin: 3rem 0;

        > section > div {
            > h1 {
                font-size: 2.6rem;
                color: ${({theme}) => theme.colors.primary[600]};
            }

            > p {
                font-size: 1.3rem;
                margin: 1rem 0 0 0;
                color: ${({theme}) => theme.colors.primary[300]}
            }

        }

    }

`


export const EmptyJob = styled.div`
    background: #d3e0ef;
    margin-top: 3rem;
    padding: 1rem 4rem;
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