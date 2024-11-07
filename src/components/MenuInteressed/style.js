import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog"


export const Container = styled.div`
    background: red;

`

export const Trigger = styled(AlertDialog.Trigger)`
    background: #000;
    border-radius: 1rem;
    padding: 1rem;
    color: #fff;
    border: none;
    cursor: pointer;
`

export const Overlay = styled(AlertDialog.Overlay)`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0,0,0,0.9);
    inset: 0;

`

export const Content = styled(AlertDialog.Content)`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
        height: auto;
        background: #fff;
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        border-radius: 1rem;
        padding: 2rem 4rem;

        > div {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        > p {
            font-size: 1.5rem;
        }

    }

`