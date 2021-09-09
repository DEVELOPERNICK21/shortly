import Link from "next/link";
import { Navigation, Logo, NavContent, NavLeft, NavRight, StyledLink, Signup} from './Navbar.element'

// const Navigation = styled.nav`
//   background: #ffffff;
//   /* background-color: skyblue; */
//   height: 12vh;
//   width: 100%;
//   color: #000;
//   padding: 3.2em;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;

//   @media only screen and (max-width: 767px ),( min-width: 400) {
//     background-color: red;
//     height: 20vh;
//     width: 100%;
//     color: yellow;
//     padding: 1.2em;
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-content: center;
//     align-items: center;
//   }
//   @media only screen and (max-width: 375px) {
//     background-color: skyblue;
//     height: 2vh;
//     width: 100%;
//     color: #000;
//     padding: 2em;
//     display: flex;
//     flex-direction: column;
//   }
// `;

// const Logo = styled.a`
//   padding: 0rem 2rem;
//   font-size: 1.6vw;
//   font-weight: 800;
//   color: #333333;
//   padding: 0.5em;

//   @media only screen and (max-width: 375px) {
//     font-size: 1em;
//   }

// `;

// const NavContent = styled.div`
//   /* background-color: purple; */
//   width: 80%;
//   display: flex;
//   padding: 0em 0em 0.2em 0em;
//   flex-direction: row;
//   font-size: 1vw;
//   font-weight: 900 bold;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-content: center;
//   align-items: baseline;

//   @media only screen and (max-width: 375px) {
//     background-color: red;
//     visibility: hidden;
//   /* font-weight: 900 bold; */

//   }

// `;

// const NavLeft = styled.div`
//   /* background-color: yellow; */
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: baseline;

// `;

// const NavRight = styled.div`
//   /* background-color: red; */
// `;
// const StyledLink = styled.a`
//   padding: 0.5rem 1rem 0rem 1rem;
//   color: #9d9aa7;
//   font-size: 0.8vw;
//   font-weight: 800;
// `;
// const Signup = styled.span`
//   background-color: #2acfcf;
//   color: #fff;
//   height: 100%;
//   padding: 0.5em 0.8em 0.5em 0.8em;
//   width: 100%;
//   border-radius: 5em;

//   &:hover {
//     background-color: #3ebbbb;
// }

// `;

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
  );
}

export default Navbar;
