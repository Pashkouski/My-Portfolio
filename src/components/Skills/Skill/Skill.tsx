import React from 'react';
import styled from "styled-components";

export const Skill = () => {
    return (
        <StyledSkillWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 12h2v9H2v-9zm3 2h2v7H5v-7zm11-6h2v13h-2V8zm3 2h2v11h-2V10zM9 2h2v19H9V2zm3 2h2v17h-2V4z"/></svg>
            <h3>Lorem ipsum dolor sit </h3>
            <div className='info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis dolores dolorum eius eligendi explicabo impedit laboriosam maiores neque nulla, officia quae qui quod ratione repellendus, repudiandae similique tempora! Ipsam!</div>
        </StyledSkillWrapper>
    );
};

const StyledSkillWrapper = styled.div`
  width: 17em;
  border: 1px solid red;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;justify-content: space-evenly;
`