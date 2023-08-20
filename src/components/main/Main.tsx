import React from 'react';
import {ParticleBackground} from "common/ParticleBackground/ParticleBackground";
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMainWrapper>
            <ParticleBackground/>
            <StyledMainContainer>
                <StyledBlockContainer>
                    <span>Lorem ipsum dolor. lorem</span>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum.</p>
                </StyledBlockContainer>
                <StyledPhotosContainer>

                </StyledPhotosContainer>
            </StyledMainContainer>
        </StyledMainWrapper>
    );
};

const StyledMainWrapper = styled.main`
  border: 1px solid rebeccapurple;
  background-color: #ffffff;
  /*    background-color: rgb(42, 42, 56);*/
  position: relative;
  @media (max-width: 1076px) {
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }
`
const StyledMainContainer = styled.div`
  position: relative;
  color: white;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  height: 93vh;
  border: 2px solid rgb(42, 42, 56);
`
const StyledBlockContainer = styled.div`
  max-width: 25rem;
  background-color: #2a2a38;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  margin: 0.2em;
  box-shadow: 0 0 10em rgb(86, 94, 119);
  padding: 0.2em;

  > * p {
    @media (max-width: 1076px) {
      margin: 0.2em;
      padding: 0;
    }
  }

  > * h2 {
    @media (max-width: 1076px) {
      margin: 0.2em;
      padding: 0;
    }
  }

  > * span {
    @media (max-width: 1076px) {
      margin: 0.2em;
      padding: 0;
    }
  }

  @media (max-width: 1076px) {
    max-width: 25rem;
    max-height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`
const StyledPhotosContainer = styled.div`
  padding: 1rem;
  max-width: 25rem;
  background-color: #2a2a38;
  width: 300px;
  height: 400px;
  box-shadow: 0 0 10em rgb(86, 94, 119);
  @media (max-width: 1076px) {
    max-width: 25rem;
    max-height: 70vh;
  }
`

