import styled from "styled-components";

export const Container = styled.div`
    background:#f9f3f3;
    height: auto;
    padding: 4rem 2rem;

    > main {
        background: #fff;
        border-radius: 1rem;
        padding: 1rem 1rem;
        height: 100%;
    }

`


export const Form = styled.form`

    > section {
        > h2 {
            margin-top: 1rem;
            color: ${({theme}) => theme.COLOR.BLUE_200}
        }

        > p {
            font-size: 1.3rem;
        }

        
        > div {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
            margin-top: 1rem;

            
            
            > label > h3 {
                font-size: 2rem;
            }

            > p {
                font-size: 1.3rem;
            }
    
            > textarea {
                padding: 1rem 2rem;
                border: 1px solid #ccc;
                border-radius: 0.4rem;
                resize: none;
                height: 10rem;
                outline: none;
    
            }
    
            > textarea::placeholder {
                color: #ccc;
            }

            > textarea:focus {
                border: 2px solid ${({theme}) => theme.COLOR.BLUE_200};
            }
        }
        
    }

    > section:nth-child(4), > section:nth-child(5) {

        > div {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(1, 1fr);
            column-gap: 2rem;
            background: 1rem;
            
                        
            > div {
                display: flex;
                flex-direction: column;
                gap: 0.2rem;
                margin-top: 1rem;

                > label > h3 {
                    font-size: 2rem;
                }
    
                > p {
                    font-size: 1.3rem;
                }

            }
            
            @media (max-width:800px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }

        .full {
            display: flex;
        }
    }

    > section:nth-child(7) {
        > div {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;

            > label {
                font-size: 1.3rem;
            }
        }
    }
    
    > section:nth-child(2) {
        > div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 2rem;
        }
    }


`


export const Select = styled.select`
    padding: 1rem 2rem;
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 0.4rem;
    cursor: pointer;

    &:focus {
        border: 2px solid ${({theme}) => theme.COLOR.BLUE_200};
    }
`

export const Input = styled.input`
    padding: 1rem 2rem;
    border: 1px solid #ccc;
    border-radius: 0.4rem;
    outline: none;
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &::placeholder {
        color: #ccc;
    }

    &:focus {
        border: 2px solid ${({theme}) => theme.COLOR.BLUE_200};
    }
`

export const IsApartament = styled.div`
            display: grid !important;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(1, 1fr);
            column-gap: 2rem !important;
                                
            > div {
                display: flex;
                flex-direction: column;
                gap: 0.2rem;
                margin-top: 1rem;

                > label > h3 {
                    font-size: 2rem;
                }
    
                > p {
                    font-size: 1.3rem;
                }

            }
            
            @media (max-width:800px) {
                grid-template-columns: repeat(1, 1fr);
            }

`