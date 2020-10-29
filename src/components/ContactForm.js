import React from "react";
import styled from "styled-components";

import { StyledButton } from "./styles/ButtonStyles";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.offWhite};
  section {
    width: 100%;
    padding: 0 ${props => props.theme.lSize} ${props => props.theme.lSize};
    @media (${props => props.theme.tabletLandscapeUp}) {
      padding: ${props => props.theme.mSize} 0 ${props => props.theme.xlSize};
      width: 70vw;
    }
  }
  form {
    .input-group {
      display: flex;
      flex-direction: column-reverse;
    }
    textarea,
    input {
      /* transition: all 0.3s ease-in-out; */
      transition: ${props => props.theme.defaultTransition};
      line-height: 1rem;
      margin-bottom: ${props => props.theme.lSize};
    }
    textarea {
      background: #fff;
      border: 2px solid black;
      padding: ${props => props.theme.mSize} ${props => props.theme.mSize} 0;
      border-radius: 4px;
      width: 100%;
      @media (${props => props.theme.tabletLandscapeUp}) {
        width: 88%;
      }
      height: 6rem;
      line-height: 1.6;
    }
    input {
      padding: ${props => props.theme.lSize} ${props => props.theme.mSize} 0;
      height: 2.8rem;
      margin-top: -0.8rem;
      background: none;
      border: none;
      border-bottom: 2px solid black;
      width: 100%;
      border-radius: 0;
      @media (${props => props.theme.tabletLandscapeUp}) {
        width: 20rem;
      }
    }
    input:focus {
      border-bottom: 2px solid ${props => props.theme.cyan};
      outline: none;
    }
    textarea:focus {
      border: 2px solid ${props => props.theme.cyan};
      outline: none;
    }
    label {
      font-size: 20px;
    }
    input:focus + label,
    textarea:focus + label {
      color: ${props => props.theme.cyan};
    }
    button {
      margin-top: ${props => props.theme.mSize};
    }
  }
`;

const ContactForm = () => {
  return (
    <ContactWrapper>
      <section id="contact">
        <h2>Contact</h2>
        <form
          name="Contact Form"
          method="POST"
          data-netlify="true"
          action="/thank-you"
        >
          <input type="hidden" name="form-name" value="Contact Form" />
          <div className="input-group">
            <input type="text" name="name" required />
            <label>Name</label>
          </div>
          <div className="input-group">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className="input-group">
            <textarea name="message" />
            <label>Message</label>
          </div>
          <StyledButton type="submit">Submit</StyledButton>
        </form>
      </section>
    </ContactWrapper>
  );
};

export default ContactForm;
