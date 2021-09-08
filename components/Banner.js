import styled from "styled-components";
import Link from 'next/link'
import Image from 'next/image'
import mainImage from '../images/illustration-working.svg'

const MainSection = styled.main`
background : #ffffff;
color : #000;
height: 90vh;
width: 100%;
/* max-width: 80%; */
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`

const MainLeft = styled.div`
/* background : yellow; */

`

const MainRight = styled.div`
/* background : red; */

`

function Banner() {
    return (
        <MainSection>
            <MainLeft>
                <h1>More than Just Shorter Links</h1>
                <p>
                    Build your brand's recognition and get detailed insight on how your links are performing
                </p>
                <Link href="/" passHref>
                    <a>Get Started</a>
                </Link>
            </MainLeft>
            <MainRight>
                 <Image src={mainImage} alt="Illustration of Working Man" />
            </MainRight>
        </MainSection>
    )
}

export default Banner;
