import styled from "styled-components";

export default styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 ${props => props.theme.lSize};
`;
