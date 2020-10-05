import styled from "styled-components"

export const StyledButton = styled.button`
  background: ${props => (props.outline ? "#fff" : props.theme.cyanLight)};
  border-radius: 4px;
  border: ${props => (props.outline ? "1px solid #000" : "none")};
  padding: 0.3rem 0.6rem;
  display: flex;
  align-items: center;
  transition: ${props => props.theme.defaultTransition};
  cursor: pointer;
  a {
    color: ${props => (props.outline ? "#000000e6" : "#000000A3")};
    text-shadow: none;
    text-decoration: none;
    background-image: none;
  }
  svg {
    margin-right: 0.4rem;
  }
  :hover {
    background: ${props =>
      props.outline ? props.theme.offWhite : props.theme.cyanLightOpacity60};
  }
`
