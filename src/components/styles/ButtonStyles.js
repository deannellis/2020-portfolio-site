import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const StyledButton = styled.button`
  background: ${props => (props.outline ? "#fff" : props.theme.cyanLight)};
  border-radius: 4px;
  border: ${props => (props.outline ? "1px solid #0000003D" : "none")};
  padding: ${props => props.theme.sSize} ${props => props.theme.mSize};
  @media (${props => props.theme.tabletLandscapeUp}) {
    padding: ${props => props.theme.xsSize} ${props => props.theme.sSize};
  }
  display: flex;
  align-items: center;
  transition: ${props => props.theme.defaultTransition};
  box-shadow: ${props => props.theme.headerShadow};
  cursor: pointer;
  a {
    color: ${props => (props.outline ? "#000000e6" : "#000000A3")};
    text-shadow: none;
    text-decoration: none;
    background-image: none;
    display: flex;
    align-items: center;
  }
  svg {
    margin-right: ${props => props.theme.xsSize};
  }
  :hover {
    background: ${props =>
      props.outline ? "#fff" : props.theme.cyanLightOpacity60};
    border-color: ${props => (props.outline ? props.theme.magenta : "none")};
    transition: ${props => props.theme.defaultTransition};
    color: ${props => (props.outline ? props.theme.magenta : "#000")};
  }
`;
