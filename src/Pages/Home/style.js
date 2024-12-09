import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`


    > main {
        > section {
            padding-top: 10rem;
            padding-bottom: 2rem;
        }
    
        > section:nth-child(1) {
            background: #f9f3f3;
            display: flex;
    
            > div {
                display: flex;
                justify-content: space-between;
    
                > div:nth-child(1) {
                    display: flex;
                    flex-direction: column;
                    width: 50%;
                    padding-top: 10rem;
                    gap: 1rem;
    
                    > p {
                        font-size: 1.6rem;
                        line-height: 1.7rem;
                        margin: 1rem 0;
                    }
                }
                @media (max-width:900px) {
                    flex-direction: column;

                    
                    > div:nth-child(1) {
                        width: 100%;
                        margin-bottom: 2rem;
                    }



                }
            }    
            }

    
        > section:nth-child(2) {
            background: #0d1a21;
            color: #fff;
            height: auto;
            padding-bottom: 2rem;

            > div {
                > ul {

                    margin-top: 2rem;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                    
                    > li {
                        border-radius: 1rem;
                        height: 50rem;
                        padding: 1rem 2rem;
                        list-style: none;
                        background: linear-gradient(#195171, #0d1a21);
                    }

                    @media (max-width:900px) {
                        grid-template-columns:  repeat(1, 1fr);
                        gap: 3rem;


                    }

                }

            }
        }


        > section:nth-child(3) {
            > div {
                display: flex;
                gap: 2rem;


                @media (max-width: 1100px) {
                    flex-direction: column;
                }
            }
        }
    }
`

export const Image = styled.img`
    border-radius: 2rem;
    background-position: center center;

    @media (max-width: 1000px) {
        width: 100%;
    }
`


export const RegisterNavigation = styled(Link)`

    text-decoration: none;
    background: rgba(30,141,204, 0.5);
    border-radius: 1rem;
    padding: 1rem 3rem;
    font-weight: 600;
    color: #000;
    
    `

export const SignInNavigation = styled(Link)`
    padding: 1rem 3rem;
    font-weight: 600;
    color: #000;

`

export const ButtonsDiv = styled.div`
    display: flex;
    gap: 1rem;
`