import styled from "styled-components";


export const SubscribeArea = styled.div `
height: 25vh;
width: 100%;
background : #3b3054;
color : #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
flex-wrap: wrap;

@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 468px) {
    width: 100vh;
    height: auto;
    flex-direction: column;
}
`


export const SubsSvg = styled.div`
background-image: url(${require("../../images/bg-boost-desktop.svg")});
background-color: #3b3054;
background-repeat: no-repeat;
background-size: cover;
color: #fff;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
flex-wrap: wrap;


`

export const SubscribeBut = styled.button`
background-color: #2acfcf;
color: #fff;
margin: 1em 0 0 0;
padding: .4em .8em .4em .8em;
border: none;
font-size: 1.3vw;
border-radius: 5em;
&:hover {
    background-color: #3ebbbb;
}
@media only screen and (max-width: 768px) {
    margin: 1em 0 0 0;
    padding: 1.5vh 3vh;
    
}

@media only screen and (max-width: 468px) {
    margin:2em 0 2em 0;
    padding: 1em 4em 1em 4em;
    font-size: 3vh;
    font-weight: 700;
}



`


export const BoosLine = styled.h1`
color: #fff;
font-size: 5vh;
font-weight: 700;

@media only screen and (max-width: 468px) {
    font-size: 8vh;

}
`
