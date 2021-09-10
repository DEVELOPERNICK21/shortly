import Link from "next/link";
import { Navigation, Logo, NavContent, NavLeft, NavRight, StyledLink, Signup, MenuIcon} from './Navbar.element'

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
          <MenuIcon ></MenuIcon>

    </Navigation>
  );
}

export default Navbar;
