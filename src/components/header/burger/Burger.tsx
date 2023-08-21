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

const StyledBurgerWrapper = styled.div`
  display: none;
  @media (max-width: 717px) {
    display: block;
    background-color: black;
  }
`

const NavbarContainer = styled.div`
  position: absolute;
  @media (min-width > 717px) {
    position: absolute;

    right: -50px;
  }
  @media (max-width: 717px) {
    position: absolute;
    box-shadow: black;
    top: 50px;
    right: 50px;
    width: 100px;
    height: 100px;
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
`

const StyledNavLink = styled(NavLink)`
  @media (max-width: 717px) {
    padding: 15px 0;
    font-size: 15px;
    display: inline-block;
    color: #fdfeff;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-decoration: none;
  }

`