import styled from "styled-components";
import Link from 'next/link'

const Navigation = styled.nav `
background : #ffffff;
/* background-color: skyblue; */
height: 12vh;
width: 100%;
color : #000;
padding: 3.2em;
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-content: center;
align-items: center;
`

const Logo = styled.a`
padding: 0rem 2rem;
font-size: 1.6vw ;
font-weight: 800;
color: #333333;
padding: .5em;
`

const NavContent = styled.div `
/* background-color: purple; */
width: 80%;
display:flex;
padding: 0em 0em .2em 0em;
flex-direction: row;
font-size: 1vw;
font-weight: 900 bold;
flex-wrap: wrap;
justify-content:space-between;
align-content: center;
align-items: baseline;
`

const NavLeft = styled.div `
/* background-color: yellow; */
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-content: center;
align-items: baseline;
`


const NavRight = styled.div`
/* background-color: red; */
`
const StyledLink = styled.a`
padding: .5rem 1rem  0rem 1rem;
color: #9d9aa7;
font-size: .8vw;
font-weight: 800;
`
const Signup = styled.span`
background-color: #2acfcf;
color: #fff;
height: 100%;
padding: .5em .8em .5em .8em;
width: 100%;
border-radius: 5em;
`


function Navbar() {
    return (
        <Navigation>
                    <Link href="/" passHref>
                        <Logo>Shortly</Logo>
                    </Link>
            <NavContent>
                    <NavLeft>
                        <StyledLink href="#0" passHref>
                            Feature
                        </StyledLink>
                        <StyledLink href="#1" passHref>
                            Pricing
                        </StyledLink>
                        <StyledLink href="#2" passHref>
                            Resources
                        </StyledLink>
                    </NavLeft>
                    <NavRight>
                    <StyledLink href="#2" passHref>
                            Login
                        </StyledLink>
                        <StyledLink href="#2" passHref>
                            <Signup>Signup</Signup>
                        </StyledLink>
                    </NavRight>
            
            </NavContent>
           
        </Navigation>
    )
}

export default Navbar;
