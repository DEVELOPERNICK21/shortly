import { FooterSection, FooterLogo, CenterDiv, UlistNav, HeadSpan, ListNav, SocailHandlers} from './Footer.element'
import Link from 'next/link'
import Image from 'next/image'
import FbIcon from '../../images/icons8-facebook.svg'
import twitterIcon from '../../images/icons8-twitter.svg'
import PintrestIcon from '../../images/icons8-pinterest.svg'
import InstaIcon from '../../images/icons8-instagram-logo.svg'


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
