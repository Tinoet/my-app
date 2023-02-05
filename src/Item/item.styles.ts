import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction : column;
flex-direction: column;
width: 100%;
border: 1px solid lightblue;
height: 100%;
border-radius: 50px 20px;

Button{
    border-radius: 0 0 20px 20px;
}

img{
    max-height: 250px;
    object-fit:cover;
    border-radius: 20px 20px 0 0;
}

div{
font-family: Ariel, Helvetica, Sans-Serif;
padding: 1rem;
height: 100%;

}

`;