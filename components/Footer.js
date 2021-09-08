import styled from "styled-components";
import Link from 'next/link'

const FooterSection = styled.footer `
background : #292531;
height: 30vh;
width: 100%;
color : #fff;
display:flex;
flex-direction: row ;
flex-wrap: wrap;
justify-content:space-evenly;
align-content: center;
align-items: center;
`
const FooterLogo = styled.div`
width: 30%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const CenterDiv = styled.div`
width: 40%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const SocailHandlers = styled.div`
width: 30%;
display: flex;
flex-direction: row;
justify-content: space-evenly;

`
function Footer() {
    return (
        <FooterSection>
            <FooterLogo>
                Shortly
            </FooterLogo>
            <CenterDiv>
                <div>
                    <h3>Features</h3>
                        <h5>Link Shortening</h5>                    
                        <h5>Link Shortening</h5>                    
                        <h5>Link Shortening</h5>                    
                </div>
                <div>
                    <h3>Resources</h3>
                        <h5>Blog</h5>                    
                        <h5>Developers</h5>                    
                        <h5>Support</h5>                    
                </div>
                <div>
                    <h3>Company</h3>
                        <h5>About</h5>                    
                        <h5>Our Team</h5>                    
                        <h5>Career</h5>                    
                        <h5>Contact</h5>                    
                </div>
            </CenterDiv>
            <SocailHandlers>
                <h2>FB</h2>
                <h2>tw</h2>
                <h2>pt</h2>
                <h2>IN</h2>
            </SocailHandlers>
        </FooterSection>
    )
}

export default Footer;
