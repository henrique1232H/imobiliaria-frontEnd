import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    background: #fff4;
    border-radius: 1rem;
    margin-top: 2rem;
    text-decoration: none;
    color: #000;
    border: 1px solid #ccc;
    display: flex;
    gap: 3rem;
    width: 100%;
    padding-right: 10px;
    transition: 250ms all ease-in;

    .img {
        display: block;
        height: 50%;
        min-height: 20rem;
        background: red;
        width: 30%;
        border-radius: 1rem 0 0 1rem;
        position: relative;

        > img {
            position:absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
            border-radius: 1rem 0 0 1rem;
        }


        > span {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            font-weight: 600;
            width: 10rem;
            margin: 1rem 1rem;
            border-radius: 5rem;
            padding: 0.7rem 0.5rem;
            z-index: 1;
        }
    }


    &:hover {
        box-shadow: 1px 1px 10px 1px ${({theme}) => theme.colors.tertiary[300]};

        .body {
            > button {
                background:  ${({theme}) => theme.colors.tertiary[200]};
            }
        }
    }


    > section {
        width: 100%;


        .head {
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;

            > div:nth-child(1) {
                > h2 {
                    font-size: 1.2rem;
                    font-weight: 300;
                }

                > h1 {
                    font-size: 1.5rem;
                    font-weight: 400;

                }
            }
            
            > div:nth-child(2) {
                margin-top: 1rem;
            }
        }

        > span {
            display: block;
            height:10px;
            border-bottom: 1px solid gray;
            width: 100%;
        }

        .body {
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;

            > div:nth-child(1) {
                display: flex;
                gap: 2rem;
            }

            > button {
                background: none;
                border: 1px solid #ccc;
                color: ${({theme}) => theme.colors.quaternary[700]};
                border-radius: 1rem;
                cursor: pointer;
                padding: 1rem 1rem;
                transition: 250ms all ease-in;
            }
        }   
    }


    @media (max-width: 900px) {
        flex-direction: column;
        padding-right: 0;
        gap: 0;

        section {
            padding: 1rem 3rem;
        }

        .img {
            width:100%;
            background: yellow;
            border-radius: 1rem 1rem 1rem 1rem;

            > img {
                border-radius: 1rem 1rem 1rem 1rem;
            }
        }

        .head {
            flex-direction: column;

            
        }
    }
`