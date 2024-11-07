import styled from "styled-components";

export const Container = styled.div`
    background:#f9f3f3;
    height: 100vh;
    padding: 4rem 2rem;

    > main {
        background: #fff;
        border-radius: 1rem;
        padding: 1rem 1rem;
        height: 100%;
    }

`


export const Form = styled.form`
    > div {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;

        > input {
            padding: 0.4rem;
            border: 1px solid #000;
            border-radius: 0.4rem;
        }
    }

    > div:nth-child(8) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }

`