import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Burger = () => {
    return (
        <StyledBurgerWrapper>
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
        </StyledBurgerWrapper>

    );
};

const StyledBurgerWrapper = styled.nav`
  display: none;
  position: absolute;

  justify-content: center;
  align-items: center;
  @media (max-width: 717px) {
    display: flex;
    background-color: #0A101EFF;
    height: 100vh;
    width: 100vh;
  }
`

const NavbarContainer = styled.section`
  position: absolute;
  background-color: #0A101EFF;
  height: 100vh;

  @media (max-width: 717px) {
    position: relative;
    text-align: center;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin-left: 50%;
    margin-right: auto;
  }
`

const StyledNavLink = styled(NavLink)`
  @media (max-width: 717px) {
    position: relative;
    top: 60%;
    left: 70%;
    transform: translate(-60%, -70%);
    padding: 15px 0;
    font-size: 15px;
    display: inline-block;
    color: #fdfeff;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-decoration: none;
  }
  @media (max-width: 717px) {
    
    
  }

`