import React from 'react';
import styled from "styled-components";



export const Contact = () => {

    return (
        <StyledOffersWrapper>
            <StyledOffersContainer>
                    <h4>Lorem ipsum dolo omnis quam, repellat sint unde ut voluptatem!</h4>
                    <StyledInnerForm>
                        <input type="text" placeholder={'Ваше имя'}/>
                        <input type="email" placeholder={"Ваш адрес электронной почты"}/>
                        <textarea name="contact" placeholder={'Ваше сообщение'}></textarea>
                    </StyledInnerForm>
                    <button> Lorem psum </button>
            </StyledOffersContainer>
        </StyledOffersWrapper>
    );
};

const StyledOffersWrapper = styled.section`
  background-color: rgba(40, 44, 52);
  display: flex;
  justify-content: center;
  position: relative
`
const StyledOffersContainer = styled.div`
  width: 90%;
  background-color: rgb(75, 74, 74);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 728px) {
    display: flex;
    flex-direction: column;
  }
`
const StyledInnerForm = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  gap: 0.5rem;

  > h4 {
    background-color: #424257;
    color: white;
    padding: 1rem;
  }

  > button {
    display: inline-block;
    padding: 0.6rem 5.6rem;
    background-color: #424257;
    color: white;
    margin-top: 1.5rem;
  }

  > input, textarea {
    width: 60%;
    min-width: 220px;
  }


/*  @media (max-width: 567px) {
    input, textarea {
      width: 80%;
    }
  }*/
`
/*

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 31vmax;
  padding: 1rem;
  > input {
    width: 100%;
  }
  > textarea {
    width: 100%;
  }
`
const StyledInnerContact = styled.div`
  padding: 1rem;
  width: 50%;
  h4 {
    background-color: #424257;
    color: white;
    padding: 0.8rem;
    width: 30vmax;
  }
`*/
