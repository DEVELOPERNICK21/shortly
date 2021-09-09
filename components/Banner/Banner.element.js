import styled from "styled-components";


export const MainSection = styled.main`
background : #ffffff;
/* background : skyblue; */
height: 100vh;
width: 100%;
padding:  0vh 20vh 20vh 18vh;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
align-content: center;
flex-wrap: wrap;

@media only screen and (max-width: 375px) {
background-color:red;  
display: flex;
}

`

export const MainLeft = styled.div`
width: 50%;
/* align-self: center; */
display: flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;
align-content: center;
flex-wrap: wrap;

@media only screen and (max-width: 375px) {
    width: 100%;
    display: flex;
    position: relative;
    top: 50vh;
  }


`

export const BanerHeading = styled.h1`
font-size: 4vw;
/* width: 70%; */
color: #333333;
line-height: 1;
font-weight: 700;

@media only screen and (max-width: 375px) {
    font-size:  1em;
    background-color: yellow;
    width: 100%;
  }

`
export const SubHeading = styled.p`
color: #9d9aa7;
margin: -1em 0 0 0;
font-size: 1.3vw;
@media only screen and (max-width: 375px) {
    font-size:  1em;
    background-color: purple;
    width: 100%;
  }

`
export const GetStart = styled.button`
border: none;
background-color: #2acfcf;
color: #fff;
margin: 1em 0 0 0;
height: 100%;
padding: .5em .8em .5em .8em;
font-size: 1.3vw;
/* width: 100%; */
border-radius: 5em;

&:hover {
    background-color: #3ebbbb;
}
`

export const MainRight = styled.div`
/* background : red; */
width: 50%;
height: 100%;
padding-left:5em ;
display: flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;
align-content: center;
flex-wrap: wrap;
background-size: contain;
`
