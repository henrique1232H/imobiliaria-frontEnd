import styled from "styled-components";

export const Container = styled.body`
    
    height: 100vh;
    background: #f9f3f3;
`

export const JobContainer = styled.div`
    background: yellow;
    height: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
`

export const Main = styled.main`

    .information {
        margin-top: 3rem;
        display: flex;
        gap:2rem;
        margin-bottom: 3rem;

        > div > div {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 3rem;

            > svg {
                background: ${({theme}) => theme.colors.primary[100]};
                padding: 0.4rem;
                border-radius: 1rem;
            }
        }

    }


    .options {
        display: flex;
        align-items: center;
        cursor:pointer;
        background: none;
        color: ${({theme}) => theme.colors.primary[300]};
        font-weight: 500;
        font-size: 1.2rem;
        transition: 150ms all ease-in;
        justify-content: space-between;

        > div {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

    }

    .back {
        transition: 150ms all ease-in;
    }

    .buttonsOptions {

        > button {
            border-radius: 1rem;
            display: flex;
            align-items: center;
            border: 1px solid ${({theme}) => theme.colors.primary[500]};
            box-shadow: 0px 0px 5px 0px ${({theme}) => theme.colors.primary[300]};
            padding: 0.5rem 1rem;
            cursor: pointer;
            font-size: 1.1rem;
        }

        > button:nth-child(1) {
            background: #fff;
            color: ${({theme}) => theme.colors.primary[700]}
        }

        > button:nth-child(2) {
            background: #f71616;
            color: #fff;
        }
    }

    .title {
        > h1 {
            font-size: 2rem;
            color: ${({theme}) => theme.colors.primary[700]};
            font-weight: 600;
        }

        > h2 {
            font-size: 1.3rem;
            color: ${({theme}) => theme.colors.quaternary[800]};
            font-weight: 300;
        }
    }

    .back:hover {
        color: ${({theme}) => theme.colors.primary[600]};
    }
    
    .banner {
        width: 100%;
        display: block;
        flex-direction: column;
        height: auto;
        margin-bottom: 3rem;

        .teste {
            position: relative;
            width: 100%;
            min-height: 40rem;
            overflow: hidden;

            > figure {
                position: absolute;
                inset: 0;
                margin: 0;
                z-index: 0;
                height: 100%;

                > img {
                    border-radius: 1rem;
                    width: 100%;
                    height: 100%;
                    min-height: 20rem;
                    object-fit: cover;
                    display: block;
                }
            }

            
        }

        > div {

            display: flex;
            justify-content: space-between;
            padding: 1rem;
            
            > div {
                z-index: 1;
            }

            > figure > img {
                width: 100%;
                z-index: -1;
            }
        }        
    }

    > div {
        background: ${({theme}) => theme.colors.primary[100]};
        padding: 2rem 0;

        > div {
            background: #fff;
            border-radius: 1rem;
            padding: 1rem 2rem;
            height: auto;



            > section:nth-child(3) {
                display: flex;
                justify-content: space-between;
                flex-direction: column;

                > p {
                    margin-top: 4rem;
                    font-size: 1.2rem;
                }

                > div {
                    display: flex;
                    align-items: start;
                    width: 100%;


                    @media (max-width: 1100px) {
                        margin-top: 1rem;
                        justify-content: start;
                        align-items: start;
                        flex-direction: column;
                        
                    }

            
                    > div:last-child {
                        width: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: end;

                        @media (max-width: 1100px) {
                            justify-content: start;
                            align-items: start;
                        }                        
                        > a {
                        padding: 1.2rem;
                    }

                    @media (max-width: 800px) {
                        justify-content: start;
                    }
                    }


                    > div:first-child {
                        width: 100%;
                        > div {
                            display: flex;
                            align-items: center;
                            margin-top: 1rem;

                            > h4 {
                                display: flex;
                                align-items: center;
                                gap: 1rem;
                                font-size: 1.4rem;

                                > span {
                                    display: flex;
                                    align-items: center;
                                    gap: 1rem;
                                }
                            }
                        }
                    }

                    > button {
                        margin-right: 1rem;
                    }



                }
                
                @media (max-width: 800px) {
                    flex-direction: column;
                    align-items: start;
                    
                }
            }

            > section:nth-child(4) {
                
                > div {
                    display: flex;
                }
            }

            > section:nth-child(5) {
               > h2 {
                margin: 2rem 0;
               }

               > ul > li {
                margin-left: 2rem;
               }
            }

    
        >  section > figure > img {
            width: 100%;
            height: auto;
            border-radius: 1rem;
        }
        } 
    
        
        @media (max-width: 1100px) {
            padding: 0;
            display: flex;
            flex-direction: column;
            background: none;
            margin: 0;
            align-items: start;

            > div {
                width: 100%;
                border-radius: 0;
                background: #f9f3f3;
            }
        }
    }

`


export const Title = styled.h1`
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: start;
    }
`

export const UserInteressed = styled.div`
    display: flex;
    border-radius: 1rem;
    padding: 1rem 1rem;
    justify-content: space-between;
    align-items: center;
    background: #ccc;

    > div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    > div:nth-child(2) {
        display: flex;
        gap: 1rem;
    }
`
export const DownloadButton = styled.button`
    background: ${({theme}) => theme.COLOR.BLUE_100};
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    transition: background 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        background: #009EE9;
        color: #fff;
    }
`

export const Images = styled.div`

    display: flex;
    margin-top: 2rem;
    flex-wrap: wrap;
    gap: 2rem;

    > img {
        height: 10rem;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

`
