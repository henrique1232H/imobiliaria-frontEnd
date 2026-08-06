import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    background: #fff;
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
        height: auto;
        min-height: 10rem;
        background: ${({theme}) => theme.colors.primary[100]};
        width: 30%;
        border-radius: 1rem 0 0 1rem;
        position: relative;

        > span {
            margin-top: 1rem;
            margin-left: 1rem;
        }
    

        > div {
            position: absolute;
            color: ${({theme}) => theme.colors.primary[600]};
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 100%;
            height: 100%
        }

        > span {
            z-index: 0;
        }

        > img {
            position:absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
            border-radius: 1rem 0 0 1rem;
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
        margin-top: 2rem;


        .head {
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            margin-bottom: 2rem;

            > div:nth-child(1) {
                > h2 {
                    font-size: 1.2rem;
                    font-weight: 400;
                }

                > h1 {
                    font-size: 1.5rem;
                    font-weight: 700;

                }
            }
            
            > div:nth-child(2) {
                margin-top: 1rem;
            }
        }

        .linha {
            display: block;
            height:10px;
            border-bottom: 1px solid ${({theme}) => theme.colors.quaternary[100]};
            width: 100%;
            margin-bottom: 1rem;
        }

        .body {
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            padding-bottom: 1rem;



            > div:nth-child(1) {
                display: flex;
                gap: 2rem;

                > span > h4 {
                    font-weight: 400;
                }

                > span > h3 {
                    color: ${({theme}) => theme.colors.primary[500]};
                }
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
            border-radius: 1rem 1rem 1rem 1rem;
            min-height: 18rem;

            > img {
                border-radius: 1rem 1rem 1rem 1rem;
            }
        }

        .head {
            flex-direction: column;

            
        }
    }
`