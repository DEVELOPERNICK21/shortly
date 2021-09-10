import styled from "styled-components";

export const MainSecondry = styled.main`
/* background: #f4f6f8; */
color: #000;
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
align-content: center;
flex-wrap: wrap;

@media only screen and (max-width: 768px) {
  height: 150vh;
}

@media only screen and (max-width: 468px) {
  width: 100vh;
  height: 350vh;
}


`;
export const LinkInput = styled.div`
width: 100%;
height: 20%;
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
top: 50em;
position: relative;
top: -10vh;
/* z-index: 20; */

@media only screen and (max-width: 468px) {
  height: 10%;
}
`;

export const SvgArea = styled.div`
background-image: url(${require("../../images/bg-shorten-desktop.svg")});
background-color: #3b3054;
background-repeat: no-repeat;
background-size: cover;
height: 18vh;
width: 80%;
margin: 0 0 10vh 0;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
border-radius: 1em;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
`;

export const FormArea = styled.form`
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: center;
align-items: center;
align-content: center;

@media only screen and (max-width: 768px) {
  
  
}

@media only screen and (max-width: 468px) {
  flex-direction: column;
  align-content: flex-end;
  justify-content: center;
  align-items: center;
  padding: 1vh 2vh;
}


`;
export const PutLink = styled.input`
box-sizing: border-box;
width: 2vh;
padding: 12px 20px;
resize: vertical;
margin: 8vh 2vh;
display: flex;
flex-direction: row;
border: 1px solid #ccc;
flex-grow: 3;
border-radius: 4px;
box-sizing: border-box;
justify-content: center;
align-items: center;
align-content: center;
flex-wrap: wrap;
position: inherit;


@media only screen and (max-width: 768px) {
  
  
}

@media only screen and (max-width: 468px) {
  /* width: 4vh; */
  padding: 2.5vh 35vh;
  margin: 0vh 0vh;
}


`;

export const ShortButton = styled.button`
width: 15vh;
background-color: #2acfcf;
color: white;
padding: 1vh 2vh;
margin: 8vh 2vh;
border: none;
border-radius: 4px;
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
align-items: center;
cursor: pointer;
flex-wrap: wrap;
/* position: relative; */

&:hover {
  background-color: #3ebbbb;
  
}


@media only screen and (max-width: 468px) {
  /* width: .2vh; */
  padding: 1.5vh 35vh;
  margin: 1vh 1vh;
}


`;

export const Validmsg = styled.h5`
color: red;


@media only screen and (max-width: 768px) {
  position: absolute;
  top: 90px;
}

@media only screen and (max-width: 468px) {
  position: absolute;
  top: 110px;
}
`


export const LinkHistory = styled.div`
width: 100%;
height: 20%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
top: 50em;

@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 468px) {
  height: 8%;
}

`;

export const ShowLinkHis = styled.div`
height: 6vh;
width: 80%;
height: auto;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
flex-wrap: wrap;
`;

export const Ulist = styled.ul`
width: 100%;
height: auto;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
flex-wrap: wrap;
`;
export const List = styled.li`
background-color: #fff;
width: 100%;
margin: 1vh;
border-radius: 0.5vh;
padding: 1vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);
`;

export const OrignalLink = styled.span`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
align-content: center;
flex-wrap: wrap;
`;

export const ShortLinks = styled.span`
width: 100%;
color: #2acfcf;
display: flex;
padding: 0 3vh 0 0;
flex-direction: row;
justify-content: flex-end;
align-items: center;
align-content: center;
flex-wrap: wrap;
`;

export const Copy = styled.button`
background-color: #2acfcf;
color: #fff;
margin-left: 1vh;
padding: 1vh 2vh;
font-size: 1vh;
border-radius: 0.5vh;

&:hover {
  background-color: #3ebbbb;
}

`;

export const HeadLine = styled.div`
width: 50%;
height: 20%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
position: relative;
bottom: 2em;
font-size: 1.2vw;
color: #333333;
line-height: 1;
font-weight: 700;
cursor: pointer;


@media only screen and (max-width: 768px) {
  height: 20%;
  width: 100%;
  font-size: 3vw;
  line-height: 4vh;
}

@media only screen and (max-width: 468px) {
  height: 10%;
  width: 100%;
  font-size: 5vw;
}

`;

export const SubIntro = styled.div`
justify-content: center;
color: #333333;
text-align: center;
color: #9d9aa7;
margin: -.8vh 0 0 0;
font-size: 1.3vw;
cursor: pointer;


@media only screen and (max-width: 768px) {
  margin:  0;
  height: 20%;
  width: 80%;
  font-size: 3vw;
}

@media only screen and (max-width: 468px) {
  height: 10%;
  width: 90%;
  font-size: 6vw;
}

`;

export const Cards = styled.div`
width: 95%;
height: 40%;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
align-content: center;
top: 50em;

@media only screen and (max-width: 468px) {
  height: 72%;
  flex-direction: column;
  text-align: center;
align-items: center;
align-content: center;

}


`;

export const Line = styled.div`
background-color: #2acfcf;
height: 1vh;
width: 65%;
z-index: 0;
position: absolute;

@media only screen and (max-width: 468px) {
  height: 5vh;
width: 120vh;
  transform: rotate(90deg);
}
`;

export const CardOne = styled.div`

z-index: 1;
background-color: #fff;
height: 70%;
width: 30%;
padding : 4vh;
display: flex;
font-size: 2.5vh;
flex-direction: column;
justify-content:space-evenly;
align-content: center;
align-items: flex-start;
box-sizing: border-box;
border-radius: 1vh;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

@media only screen and (max-width: 768px) {
  font-size: 1.8vh;
  height: 60%;
}

@media only screen and (max-width: 468px) {
  width: 100%; 
  height: 25%;
  border-radius: 3vh;
}

`;

export const Cardtwo = styled.div`
z-index: 1;
background-color: #fff;
height: 70%;
margin: 4vh 0 0 0;
width: 30%;
padding : 4vh;
font-size: 2.5vh;
display: flex;
flex-direction: column;
justify-content:space-evenly;
align-content: center;
align-items: flex-start;
border-radius: 1vh;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

@media only screen and (max-width: 768px) {
  font-size: 1.8vh;
  height: 60%;
}

@media only screen and (max-width: 468px) {
  width: 100%; 
  height: 26%;
  margin: 12vh 0 0 0;
}

`;

export const Cardthree = styled.div`
z-index: 1;
background-color: #fff;
height: 70%;
margin: 8vh 0 0 0;
width: 30%;
font-size: 2.5vh;
padding : 4vh;
display: flex;
flex-direction: column;
justify-content:space-evenly;
align-content: center;
align-items: flex-start;
border-radius: 1vh;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);


@media only screen and (max-width: 768px) {
  font-size: 1.8vh;
  height: 60%;
}

@media only screen and (max-width: 468px) {
  width: 100%; 
  height: 26%;
  margin: 12vh 0 0 0;
}
`;

export const CardSvgone = styled.div`
background-color: #292531;
height: 9%;
width: 5%;
border-radius: 50%;
display: flex;
margin: 0 0 25vh 0 ;
position: absolute;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;

@media only screen and (max-width: 768px) {
  margin: 0 0 35vh 0 ;
  width: 7%;
}

@media only screen and (max-width: 468px) {
  width: 40%;
  height: 26%;
  margin: 0 0 70vh 34vh ;
}
@media only screen and (max-width: 468px) {
  
}
`;

export const CardSvgtwo = styled.div`
background-color: #292531;
height: 9%;
width: 5%;
border-radius: 50%;
display: flex;
margin: 0 0 25vh 0 ;
position: absolute;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
@media only screen and (max-width: 768px) {
  margin: 0 0 35vh 0 ;
  width: 7%;
}

@media only screen and (max-width: 468px) {
  width: 40%;
  height: 25%;
  margin: 0 0 70vh 34vh ;
}
`;

export const CardSvgthree = styled.div`
background-color: #292531;
height: 9%;
width: 5%;
border-radius: 50%;
display: flex;
margin: 0 0 25vh 0 ;
position: absolute;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
@media only screen and (max-width: 768px) {
  margin: 0 0 35vh 0 ;
  width: 7%;
}

@media only screen and (max-width: 468px) {
  width: 40%;
  height: 25%;
  margin: 0 0 70vh 34vh ;
}

`;



export const CardHeading = styled.div`
font-size: 3vh;
padding: 4vh 0 0 0;
cursor: pointer;


@media only screen and (max-width: 900px) {
  font-size: 2.5vh;

}
@media only screen and (max-width: 768px) {
  font-size: 2vh;
  line-height: 1;
}

@media only screen and (max-width: 468px) {
  font-size: 7vh;
  width: 95%; 
}

`;
export const CardPara = styled.div`
font-size: 2vh;
color: #9d9aa7;
font-size: 2vh;
text-align: start;
cursor: pointer;


@media only screen and (max-width: 900px) and (min-width: 751px)  {
  font-size: 2vh;
  line-height: 1.5;
  
}
@media only screen and (max-width: 768px) {
  font-size: 1.8vh;
  line-height: 1.5;
}

@media only screen and (max-width: 468px) {
  font-size: 4vh;
  text-align: center;
  line-height: 2;
}

`;
