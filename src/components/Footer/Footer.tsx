import React from 'react';
import styled from "styled-components";


export const Footer = () => {
    return (
        <StyledFooterWrapper>
            <StyledFooterContainer>
                <StyledInnerBlock>
                    <h4>Alex Alex</h4>

                    <StyledContactBlock>
                        <img src="#" alt=""/>
                        <img src="#" alt=""/>
                        <img src="#" alt=""/>
                        <img src="#" alt=""/>
                    </StyledContactBlock>
                    <h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                </StyledInnerBlock>

            </StyledFooterContainer>
        </StyledFooterWrapper>
    );
};

const StyledFooterWrapper = styled.footer`
  background-color: rgba(40, 44, 52);
  display: flex;
  justify-content: center;
  position: relative
`
const StyledFooterContainer = styled.div`
  width: 90%;
  background-color: rgb(124, 123, 123);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`
const StyledInnerBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  padding: 1rem;
  > h4 {
    background-color: #424257;
    color: white;
    padding: 1rem;
  }
  > button {
    display: inline-block;
    padding: 1rem 6rem;
    background-color: #424257;
    color: white;
    margin-top: 1.5rem;
  }
`

const StyledContactBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 60vmin;
  border: 1px solid red;
  padding: 0.1rem;
  margin: 1rem;
  > img {
    min-width: 8vmin;
    height: 8vmin;
    background-color: #61dafb;
    padding-bottom: 1px;
    border-radius: 50%;
  }
`