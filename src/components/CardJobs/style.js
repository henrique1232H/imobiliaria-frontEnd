import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    background: #fff4;
    border-radius: 1rem;
    margin-top: 2rem;
    text-decoration: none;
    color: #000;
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

        > span {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            font-weight: 400;
            width: 10rem;
            margin: 1rem 1rem;
            border-radius: 5rem;
            padding:0 0.5rem;
        }
    }


    &:hover {
        box-shadow: 1px 1px 10px 1px #ccc;
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
    }


    @media (max-width: 900px) {
        flex-direction: column;
        padding:0;

        .img {
            width:100%;
            background: yellow;
            border-radius: 1rem 1rem 1rem 1rem;
        }
    }
`