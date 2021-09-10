import styled from "styled-components";

export const FooterSection = styled.footer `
background : #292531;
height: 30vh;
width: 100%;
color : #fff;
padding: 2vh;
display:flex;
flex-direction: row ;
justify-content:space-evenly;
align-content: center;
align-items: center;

@media only screen and (max-width: 468px) {
    width: 100vh;
    flex-direction: column ;
    height: auto;
}

`
export const FooterLogo = styled.div`
/* background-color: purple; */
width: 30%;
height: 100%;
padding: 5vh;
font-weight: 700;
display: flex;
font-size: 4vh;
flex-direction: row;
justify-content: space-evenly;
align-items: flex-start;
align-content: center;
cursor: pointer;

@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 468px) {
    align-items: center;
    flex-direction: column ;
    font-size: 7vh;
}


`

export const CenterDiv = styled.div`
width: 40%;
height: 100%;
padding: 1vh;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
align-content: center;
/* flex-wrap: wrap; */

@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 468px) {
    width: 100%;
    flex-direction: column;
}

`

export const UlistNav = styled.ul`
width: 33%;
line-height: 2;
height: 100%;
display: flex;
flex-direction: column;
padding: 2vh;
align-content: center;
align-items: center;
cursor: pointer;


@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 468px) {
}



`
export const HeadSpan = styled.span`
padding: .5vh;
display: flex;
font-size: 2vh;
font-weight: 600;
flex-direction: column;
justify-content:center; 
align-content: center;
align-items: center;
@media only screen and (max-width: 468px) {
    font-size: 4vh;
}

`
export const ListNav = styled.li`
list-style: none;
color: #9d9aa7;
font-size: 1.5vh;
display: flex;
line-height: 1;
padding: 1vh;
flex-direction: column;
justify-content: center; 
align-content: center;
align-items: center;
cursor: pointer;

&:hover {
color: #8d8d8d;
}

@media only screen and (max-width: 468px) {
    font-size: 2.8vh;
}

`
export const SocailHandlers = styled.div`
width: 30%;
height: 100%;
display: flex;
padding: 4vh 0 0 0 ;
flex-direction: row;
justify-content: space-evenly;
align-content: center;
align-items: flex-start;

@media only screen and (max-width: 468px) {
    width: 80%;
}

`
