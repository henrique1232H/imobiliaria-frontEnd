import styled from "styled-components";

export const Container = styled.body`
    
    height: 100vh;
    background: #f9f3f3;



`

export const AddImages = styled.div`
    background: #f9f3f3;
    border-radius: 1rem;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    width: 100%;



    > input {
        display: none;
    }

    > label {
        cursor: pointer;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1rem;

        > svg {
            font-size: 10rem;
            color: #badaff;
        }

        > h3 {
            font-size: 2rem;
            color: #badaff;
        }
    }
`

export const Main = styled.main`


    > div {
        background: #ccc;
        padding: 1rem 0;

        > div {
            background: #fff;
            border-radius: 1rem;
            padding: 1rem 2rem;
            height: 100vh;
            overflow-y: scroll;


            > section {
                margin-top: 1rem;
            }


            > section:nth-child(2) {

                
                > figure {
                    width: 100%;
                    > label > img {
                        width: 100%;
                        height: 70vh;
                        cursor: pointer;
                    };
                }
            }


            > section:nth-child(3) {
                display: flex;
                justify-content: space-between;
                
                
                > div > div > h4 {
                    display: inline-flex;
                    align-items: center;
                    gap: 1rem;
                    
                    > span {
                        
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        
                        > img {
                            height: 4rem;
                            border-radius: 50rem;
                        }
                    } 
                    
                    
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


               > ul {

                    margin-left: 2rem;
                   
                   > li {
                       
                       
                       > div {
                           display: flex;
                           align-items: center;
                           gap: 1rem;
        
                       }
                       
                   }
               } 
               
               
            }

    
        >  section > figure > img {
            width: 100%;
            height: auto;
            border-radius: 1rem;
        }


        > section:nth-child(6) {
            > h2 {
                margin-bottom: 2rem;
            }

        }

        > section:last-child {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-top: 5rem;
            
            > button {
                padding: 1rem;
                border: 1px solid #000;
                border-radius: 1rem;
                cursor: pointer;
                color:#fff;
                font-weight: 500;
                transition: background 200ms ease-in-out;
            }

        }
        } 
        
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


export const EditTags = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-x: auto;
    width: 100%;

    > div {
        display: flex;
        gap: 2rem;
        margin-top: 1rem;
    }

`