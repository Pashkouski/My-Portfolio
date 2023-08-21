import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

export const Work = () => {
    return (
        <StyledSkillWrapper>
            <StyledWorkInner>
                <NavLink to={'/work2'}>
                    <div>
                        {/*                        <img className={s.img}
                             src="https://htstatic.imgsmail.ru/pic_image/0efda7a7a24673153e86521d430076e3/840/526/2269298/"
                             alt=""/>*/}
                        <button>more details</button>
                    </div>
                </NavLink>
            </StyledWorkInner>
            <StyledProjectName> Lorem ipsum dolor sit amet.</StyledProjectName>
            <div>
                <i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis dolores
                    dolorum eius eligendi explicabo impedit laboriosam maiores neque nulla, officia quae qui quod
                    ratione
                    repellendus, repudiandae similique tempora! Ipsam!
                </i>

            </div>
        </StyledSkillWrapper>
    );
};

const StyledSkillWrapper = styled.div`
  min-width: 17rem;
  max-width: 25rem;
  border: 1px solid red;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1.5rem;`

const StyledWorkInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url("https://htstatic.imgsmail.ru/pic_image/0efda7a7a24673153e86521d430076e3/840/526/2269298/");
  min-height: 20vmin;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
const StyledProjectName = styled.div`
`

