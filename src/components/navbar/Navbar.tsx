import {NavLink} from "react-router-dom";
import styled from "styled-components";


export const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarContainer>
                <StyledNavLink to='/Main'>
                    <span>Main</span>
                </StyledNavLink>

                <StyledNavLink to='/Skills'>
                    <span>Skills</span>
                </StyledNavLink>

                <StyledNavLink to='/Projects'>
                    <span>Projects</span>
                </StyledNavLink>

                <StyledNavLink to='/Contact'>
                    <span>Contact</span>
                </StyledNavLink>
            </NavbarContainer>
        </NavbarWrapper>
    )
}

const NavbarWrapper = styled.div`
  margin-right: 5.85%;

  @media (max-width: 717px) {
      display: none;
  }
  @media (max-width: 1076px) {
    .NavbarWrapper {
      width: 90%;
      margin-right: 0;
      align-items: center;
      display: flex;
      justify-content: space-evenly;
    }
  }
`
const NavbarContainer = styled.div`
  width: 85%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 2em;
`
const StyledNavLink = styled(NavLink)`
  padding: 15px 0;
  font-size: 15px;
  display: inline-block;
  color: #fdfeff;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  text-decoration: none;
`;




