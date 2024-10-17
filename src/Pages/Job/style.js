import styled from "styled-components";

export const Container = styled.body`
    
    height: 100vh;
    background: #f9f3f3;



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


            > section:nth-child(3) {
                display: flex;
                justify-content: space-between;
            }

            > section:nth-child(5) {
               > h2 {
                margin: 2rem 0;
               }
            }

    
        >  section > figure > img {
            width: 100%;
            height: auto;
            border-radius: 1rem;
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
