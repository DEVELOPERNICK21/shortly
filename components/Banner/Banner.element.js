import styled from "styled-components";


export const MainSection = styled.main`
background : #ffffff;
height: 100vh;
width: 100%;
padding:  0vh 20vh 20vh 18vh;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
align-content: center;
/* flex-wrap: wrap; */

@media only screen and (max-width: 768px) {
  flex-direction: column-reverse;
}

@media only screen and (max-width: 468px) {
  width: 100vh;
  min-height: 150vh;
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
/* flex-wrap: wrap; */

@media only screen and (max-width: 768px) {
  width: 100%;
  align-items: center;
  
}

@media only screen and (max-width: 468px) {
  width: 100%;
  align-items: center;
}


`

export const BanerHeading = styled.h1`
font-size: 4vw;
/* width: 70%; */
color: #333333;
line-height: 1;
font-weight: 700;
font-family: 'Poppins', sans-serif;

@media only screen and (max-width: 768px) {
  justify-content: center;
  text-align: center;
  font-size: 6vw;
}

@media only screen and (max-width: 468px) {
  justify-content: center;
  text-align: center;
  font-size: 10vw;
}


`
export const SubHeading = styled.p`
color: #9d9aa7;
margin: -1em 0 0 0;
font-size: 1.3vw;

@media only screen and (max-width: 768px) {
  width: 100%;
  text-align: center;
  font-size: 3vh;
}

@media only screen and (max-width: 468px) {
  width: 100%;
  text-align: center;
  font-size: 4vh;
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

@media only screen and (max-width: 768px) {
  /* width: 100%; */
  font-size: 2vh;
  padding: 1em 1.5em;
  text-align: center;
}

@media only screen and (max-width: 468px) {
  width: 50%;
  padding: 0 ;
  font-size: 3vh;
  padding: 1em 1.5em;
  text-align: center;
}


`

export const MainRight = styled.div`
/* background : red; */
width: auto;
height: auto;
padding-left:5em ;
display: flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;
align-content: center;
flex-wrap: wrap;
background-size: contain;

@media only screen and (max-width: 768px) {
  width: 100%;
  font-size: 2vh;
  /* padding: 10vh 0 0 0 ; */
}

@media only screen and (max-width: 468px) {
  width: 100%;
  padding: 0 ;
}


`
