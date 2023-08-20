import React from 'react';
import {Navbar} from "components/navbar/Navbar";
import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <Navbar/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #0a101e;
  line-height: 1.6em;
  position: relative;
  z-index: 50;

  @media (max-width: 1076px) {
    .header {
      padding: 0.01rem;
      justify-content: center;
      align-items: center;
    }
  }
`