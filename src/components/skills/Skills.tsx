import React from 'react';
import {Skill} from "components/skills/skill/Skill";
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

const StyledSkillsWrapper = styled.section`
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
  > h4 {
    display: flex;
    align-items: center;
    justify-content: center;
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