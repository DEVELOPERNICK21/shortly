import styled from "styled-components";
import Link from 'next/link'

const SubscribeArea = styled.div `
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
`


const SubsSvg = styled.div`
background-image: url(${require("../images/bg-boost-desktop.svg")});
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

const SubscribeBut = styled.button`
background-color: #2acfcf;
color: #fff;
margin: 1em 0 0 0;
padding: .4em .8em .4em .8em;
border: none;
font-size: 1.3vw;
border-radius: 5em;
`


const BoosLine = styled.h1`
color: #fff;
font-size: 5vh;
font-weight: 700;
`




function Subscribe() {
    return (
        <SubscribeArea>
            <SubsSvg>
                <BoosLine>Boost your links today</BoosLine>
                <SubscribeBut type="submit">Get Started</SubscribeBut>
            </SubsSvg>
        </SubscribeArea>
    )
}

export default Subscribe;
