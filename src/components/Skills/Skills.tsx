import React from 'react';
import {Skill} from "components/Skills/Skill/Skill";
import styled from "styled-components";


export const Skills = () => {
    return (
        <StyledSkillsWrapper>
            <StyledSkillsContainer>
                <h4>My skills</h4>
                <StyledSkills>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </StyledSkills>
            </StyledSkillsContainer>

        </StyledSkillsWrapper>
    )
}

const StyledSkillsWrapper = styled.div`
  position: relative;
  background-color: rgba(40, 44, 52);
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledSkillsContainer = styled.div`
  width: 90%;
  background-color: white;
  padding: 1rem;
  > * h4 {
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
  }
`

const StyledSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
`