import styled from "styled-components";

export const MainSecondry = styled.main`
background: #f4f6f8;
color: #000;
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
align-content: center;
flex-wrap: wrap;
`;
export const LinkInput = styled.div`
/* background-color: red;    */
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
/* background-color: pink; */
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: center;
align-items: center;
align-content: center;
flex-wrap: wrap;
`;
export const PutLink = styled.input`
/* background-color: pink; */
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

`;

export const Validmsg = styled.h5`
color: red;
`


export const LinkHistory = styled.div`
/* background-color: yellow; */
width: 100%;
height: 20%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
top: 50em;
`;

export const ShowLinkHis = styled.div`
/* background-color: red; */
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
/* background-color: purple; */
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
/* background-color: yellow; */
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
align-content: center;
flex-wrap: wrap;
`;

export const ShortLinks = styled.span`
/* background-color: pink; */
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
/* background-color: skyblue; */
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
`;

export const SubIntro = styled.div`
/* background-color: red; */
justify-content: center;
color: #333333;
text-align: center;
color: #9d9aa7;
margin: -.8vh 0 0 0;
font-size: 1.3vw;
`;

export const Cards = styled.div`
/* background-color: pink; */
width: 90%;
height: 40%;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
align-content: center;
top: 50em;
`;

export const Line = styled.div`
background-color: #2acfcf;
height: 1vh;
width: 65%;
z-index: 0;
position: absolute;
`;

export const CardOne = styled.div`
z-index: 1;
background-color: #fff;
height: 70%;
width: 30%;
padding : 4vh;
display: flex;
flex-direction: column;
justify-content:space-evenly;
align-content: center;
align-items: flex-start;
border-radius: 1vh;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);

`;

export const Cardtwo = styled.div`
z-index: 1;
background-color: #fff;
height: 70%;
margin: 4vh 0 0 0;
width: 30%;
padding : 4vh;
display: flex;
flex-direction: column;
justify-content:space-evenly;
align-content: center;
align-items: flex-start;
border-radius: 1vh;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);

`;

export const Cardthree = styled.div`
z-index: 1;
background-color: #fff;
height: 70%;
margin: 8vh 0 0 0;
width: 30%;
padding : 4vh;
display: flex;
flex-direction: column;
justify-content:space-evenly;
align-content: center;
align-items: flex-start;
border-radius: 1vh;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);

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
`;
export const CardHeading = styled.div`
/* background-color: yellow; */
font-size: 3vh;
font-weight: 700;
padding: 4vh 0 0 0;
`;
export const CardPara = styled.div`
/* background-color: purple; */
color: #9d9aa7;
line-height: 1.3;
text-align: start;

`;
