import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog"


export const Root = styled(AlertDialog.Root)`
    
    `

export const Trigger = styled(AlertDialog.Trigger)`
    border: none;
    cursor: pointer;
    padding: ${({isActive}) => isActive ? "1.2rem" : "none"};
    border-radius: ${({isActive}) => isActive ? "1rem" : "none"};
    font-weight: 500;
`

export const Overlay = styled(AlertDialog.Overlay)`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 1;
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
        border-radius: 1rem;
        padding: 2rem 4rem;

        > p {
            font-size: 1.5rem;
        }

        > div {
            display: flex;
            gap: 1rem;
            margin-top: 12rem;

            > button {
                cursor: pointer;
                padding: 1rem;
                border-radius: 1rem;
                border: none;
                
            }
            
            > button:nth-child(1) {
                background: none;
                transition: all ease-in 250ms;

                &:hover {
                    background: #ccc;
                }
            }

            > button:nth-child(2) {
                background: #db2929;
                font-weight: 500;
                transition: all ease-in 250ms;

                &:hover {
                    background: #ea1a1a;
                    color: #fff;
                }
            }
        }
    }

`