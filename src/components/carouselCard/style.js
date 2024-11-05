import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    width: 90%;
    border-radius: 1rem;
    background: #f9f3f3;
    cursor: pointer;
    height: 22rem;
    margin-left: 2rem;

    > figure {
        position: relative;

        > button {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: none;
            border: none;
            cursor: pointer;

            > svg {
                font-size: 3rem;
            }

        }
    }

    > figure > img {
        height: auto;
        width: 100%;

    }
`

export const Player = styled.div`

`