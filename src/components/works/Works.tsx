import React from 'react';
import {Work} from "components/works/work/Work";
import styled from "styled-components";


export const Works = () => {
    return (
        <StyledWorksWrapper>
            <StyledBlockWorksContainer>
                <h4>My Work</h4>
                <StyledWorksContainer>
                    <Work/>
                    <Work/>
                </StyledWorksContainer>
            </StyledBlockWorksContainer>
        </StyledWorksWrapper>
    )
}

const StyledWorksWrapper = styled.section`
  background-color: rgba(40, 44, 52);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative
`
const StyledBlockWorksContainer = styled.div`
  width: 90%;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 1rem;

  > h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
  }
`
const StyledWorksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
`