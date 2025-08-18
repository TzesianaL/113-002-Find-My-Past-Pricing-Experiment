import styled from 'styled-components'

/**
 * Styled component is used to decorate Button component.
 * Props are passed from ThemeProvider component.
 */
export const ButtonStyle = styled.button`
  color: ${(props) =>
    props.theme.button?.color || props.theme.colors?.primary || '#ffffff'};

  ${(props) =>
    props.disabled
      ? `
      background-color: ${props.theme.button?.inactiveColor || 'gray'};
      pointer: default;
    `
      : `  
    background-color: ${
      props.theme.button?.backgroundColor ||
      props.theme.colors?.background ||
      '#003D59'
    };
    cursor: pointer;
  `}

  font-size: ${(props) => props.theme.fontSize || '1'}rem;
  font-family: ${(props) => props.theme.titleFontFamily};
  width: ${(props) => props.theme.button?.width};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 0px;
  border-radius: ${(props) => props.theme.button?.borderRadius || '6px'};
  padding: 0.7em 1em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);

  &:active {
    background-color: ${(props) =>
      props.theme.button?.activeBackgroundColor || 'lightgray'};
  }
`
