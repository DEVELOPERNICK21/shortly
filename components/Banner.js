import styled from "styled-components";
import Link from 'next/link'
import Image from 'next/image'
import mainImage from '../images/illustration-working.svg'

const MainSection = styled.main`
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
`

const MainLeft = styled.div`
width: 50%;
/* align-self: center; */
display: flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;
align-content: center;
flex-wrap: wrap;
`

const BanerHeading = styled.h1`
font-size: 4vw;
/* width: 70%; */
color: #333333;
line-height: 1;
font-weight: 700;
`
const SubHeading = styled.p`
color: #9d9aa7;
margin: -1em 0 0 0;
font-size: 1.3vw;
`
const GetStart = styled.span`
background-color: #2acfcf;
color: #fff;
margin: 1em 0 0 0;
height: 100%;
padding: .5em .8em .5em .8em;
font-size: 1.3vw;
/* width: 100%; */
border-radius: 5em;
`

const MainRight = styled.div`
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


function Banner() {
    return (
        <MainSection>
            <MainLeft>
                <BanerHeading>More than Just Shorter Links</BanerHeading>
                <SubHeading>
                    Build your brands recognition and get detailed insight on how your links are performing
                </SubHeading>
                <Link href="/" passHref>
                    <GetStart>Get Started</GetStart>
                </Link>
            </MainLeft>
            <MainRight>
                 <Image src={mainImage} height="500vh" width="750vh" alt="Illustration of Working Man" />
            </MainRight>
        </MainSection>
    )
}

export default Banner;
