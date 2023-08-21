import React, {useState} from 'react';
import {Navbar} from "components/navbar/Navbar";
import styled from "styled-components";
import {Burger} from "components/header/burger/Burger";

export const Header = () => {
    const [active, setActive] = useState(false)

    return (
        <StyledHeader>
            <Navbar/>
            {active && <Burger/>}
            <div>
                <button onClick={() => setActive(!active)}> + </button>
            </div>
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
  > div > button {
    display: none;
  }
  
  @media (max-width > 717px) {
    > div > button {
      display: none;
    }
  }

  @media (max-width: 717px) {
    > div > button {
      display: flex;
      justify-content: end;
    }
  }

  @media (max-width: 1076px) {
    .header {
      padding: 0.01rem;
      justify-content: center;
      align-items: center;
    }
  }
`