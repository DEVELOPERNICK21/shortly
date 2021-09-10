import Link from 'next/link'
import Image from 'next/image'
import mainImage from '../../images/illustration-working.svg'
import {MainSection, MainLeft, BanerHeading, SubHeading, GetStart, MainRight} from './Banner.element'

function Banner() {
    return (
        <MainSection>
            <MainLeft>
                <BanerHeading>More than just shorter links</BanerHeading>
                <SubHeading>
                    Build your brands recognition and get detailed insight on how your links are performing
                </SubHeading>
                <Link href="/" passHref>
                    <GetStart>Get Started</GetStart>
                </Link>
            </MainLeft>
            <MainRight>
                 <Image src={mainImage} height="500vh" width="750vh"  alt="Illustration of Working Man" />
            </MainRight>
        </MainSection>
    )
}

export default Banner;
