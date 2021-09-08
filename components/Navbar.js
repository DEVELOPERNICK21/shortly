import styled from "styled-components";
import Link from 'next/link'

const Navigation = styled.nav `
height: 12vh;
width: 100%;
background : #ffffff;
color : #000;
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`
const NavContent = styled.nav `
display:flex;
width: 80%;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

const NavLeft = styled.nav `

`

const NavRight = styled.nav`

`
const StyledLink = styled.a`
padding: 0rem 2rem;
`

function Navbar() {
    return (
        <Navigation>
            <NavContent>
            <NavLeft>
                <Link href="/" passHref>
                    <StyledLink>Shortly</StyledLink>
                </Link>
            <Link href="#0" passHref>
                    <StyledLink>Feature</StyledLink>
                </Link>
                <Link href="#1" passHref>
                    <StyledLink>Pricing</StyledLink>
                </Link>
                <Link href="#2" passHref>
                    <StyledLink>Resources</StyledLink>
                </Link>
            </NavLeft>
            <NavRight>
            <Link href="#2" passHref>
                    <StyledLink>Login</StyledLink>
                </Link>
                <Link href="#2" passHref>
                    <StyledLink>Signup</StyledLink>
                </Link>
            </NavRight>
            </NavContent>
           
        </Navigation>
    )
}

export default Navbar;
