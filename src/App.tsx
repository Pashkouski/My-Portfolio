import './App.css';

import {Header} from "components/header";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Main} from "components/main/Main";
import styled from "styled-components";
import {Skills} from "components/skills/Skills";
import {Works} from "components/works/Works";
import {Footer} from "components/footer/Footer";
import {Contact} from "components/contact/Contact";


export function App() {
    return (
        <BrowserRouter>
            <StyledApp>
                <StyledAppWrapper>
                    <Header/>
                    <StyledAppContainer>
                        <Main/>
                        <Skills/>
                        <Works/>
                        <Contact/>
                        <Footer/>
                    </StyledAppContainer>
                </StyledAppWrapper>
            </StyledApp>
        </BrowserRouter>
    );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(40, 44, 52, 0.32);
  margin: 0;
  padding: 0;
`

const StyledAppWrapper = styled.div`
  align-items: center;
  @media (max-width: 1076px) {
    .container {
      width: 100%;
      align-items: center;
    }
  }
`

const StyledAppContainer = styled.div`
  position: relative;
`

