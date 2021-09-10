import styled from "styled-components";

export const Navigation = styled.nav`
  background: #ffffff;
  height: 12px;
  width: 100%;
  color: #000;
  padding: 3.5em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 20vh;
    width: 100%;
  }
  @media only screen and (max-width: 468px) {
    height: 30vh;
    width: 100vh  ;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  background-image: url(${require("../images/icons8-menu.svg")});
  background-color: #3333;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50px;
  width: 50px;
  
  @media only screen and (max-width: 768px) {
    display: inline-block;
    position: relative;
    left: 100px;
  }
  @media only screen and (max-width: 468px) {
    display: inline-block;
    position: relative;
    left: 100px;
  }
`;

export const Logo = styled.a`
  padding: 0rem 2rem;
  /* font-size: 1.6vw; */
  font-size: 30px;
  font-weight: 800;
  color: #333333;
  padding: 0.5em;

  @media only screen and (max-width: 768px) {
    display: inline-block;
    font-size: 40px;
    position: relative;
    padding-left: 2px;
    right: 20vh;
  }
  @media only screen and (max-width: 468px) {
    font-size: 1em;
    font-size: 50px;
    right: 100px;
  }
  `;

export const NavContent = styled.div`
  width: 80%;
  display: flex;
  padding: 0px 0px 0.2px 0px;
  flex-direction: row;
  font-weight: 900 bold;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: baseline;
  
  @media only screen and (max-width: 768px) {
    background-color: red;
    /* visibility: hidden; */
    width: 80%;
    background-color: #3b3054;
    position: absolute;
    top: 120px;
    z-index: 2 ;
    height: 600px;
    width: 600px;
    border-radius: 10px;
    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
  }
  @media only screen and (max-width: 468px) {
  }
  `;

export const NavLeft = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: baseline;
`;

export const NavRight = styled.div`
  /* background-color: red; */
`;
export const StyledLink = styled.a`
  padding: 0.5rem 1rem 0rem 1rem;
  color: #9d9aa7;
  font-size: 15px;
  font-weight: 800;
`;
export const Signup = styled.span`
  background-color: #2acfcf;
  color: #fff;
  /* height: 100%; */
  padding: 0.8em 1.2em 0.8em 1.2em;
  /* width: 100%; */
  border-radius: 30px;

  &:hover {
    background-color: #3ebbbb;
  }
`;
