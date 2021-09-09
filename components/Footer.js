import styled from "styled-components";
import Link from 'next/link'
import Image from 'next/image'
import FbIcon from '../images/icons8-facebook.svg'
import twitterIcon from '../images/icons8-twitter.svg'
import PintrestIcon from '../images/icons8-pinterest.svg'
import InstaIcon from '../images/icons8-instagram-logo.svg'

const FooterSection = styled.footer `
background : #292531;
/* background-color: red; */
height: 30vh;
width: 100%;
color : #fff;
padding: 2vh;
display:flex;
flex-direction: row ;
flex-wrap: wrap;
justify-content:space-evenly;
align-content: center;
align-items: center;
`
const FooterLogo = styled.div`
/* background-color: purple; */
width: 30%;
height: 100%;
padding: 5vh;
font-weight: 700;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: flex-start;
align-content: center;
`

const CenterDiv = styled.div`
/* background-color: yellow; */
width: 40%;
height: 100%;
padding: 1vh;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
align-content: center;
flex-wrap: wrap;
`

const UlistNav = styled.ul`
/* background-color: purple; */
width: 33%;
line-height: 2;
height: 100%;
display: flex;
flex-direction: column;
padding: 2vh;
/* justify-content: space-evenly;  */
align-content: center;
align-items: center;

`
const HeadSpan = styled.span`
/* background-color: red; */
padding: .5vh;
display: flex;
font-size: 2vh;
font-weight: 600;
flex-direction: column;
justify-content:center; 
align-content: center;
align-items: center;
`
const ListNav = styled.li`
/* background-color: black; */
list-style: none;
color: #9d9aa7;
font-size: 1.8vh;
display: flex;
line-height: 1;
padding: 1vh;
flex-direction: column;
justify-content: center; 
align-content: center;
align-items: center;

`
const SocailHandlers = styled.div`
width: 30%;
height: 100%;
display: flex;
padding: 4vh 0 0 0 ;
flex-direction: row;
justify-content: space-evenly;
align-content: center;
align-items: flex-start;
`


function Footer() {
    return (
        <FooterSection>
            <FooterLogo>
                Shortly
            </FooterLogo>
            <CenterDiv>
                <UlistNav>
                    <HeadSpan>Features</HeadSpan>
                        <ListNav>Link Shortening</ListNav>                    
                        <ListNav>Branded Links</ListNav>                    
                        <ListNav>Analytics</ListNav>                    
                </UlistNav>
                <UlistNav>
                    <HeadSpan>Resources</HeadSpan>
                        <ListNav>Blog</ListNav>                    
                        <ListNav>Developers</ListNav>                    
                        <ListNav>Support</ListNav>                    
                </UlistNav>
                <UlistNav>
                    <HeadSpan>Company</HeadSpan>
                        <ListNav>About</ListNav>                    
                        <ListNav>Our Team</ListNav>                    
                        <ListNav>Career</ListNav>                    
                        <ListNav>Contact</ListNav>                    
                </UlistNav>
            </CenterDiv>
            <SocailHandlers>
            <Image src={FbIcon} height="30vh" width="30vh" alt="FaceBook Logo" />
            <Image src={twitterIcon} height="30vh" width="30vh" alt="FaceBook Logo" />
            <Image src={PintrestIcon} height="30vh" width="30vh" alt="FaceBook Logo" />
            <Image src={InstaIcon} height="30vh" width="30vh" alt="FaceBook Logo" />
            </SocailHandlers>
        </FooterSection>
    )
}

export default Footer;
