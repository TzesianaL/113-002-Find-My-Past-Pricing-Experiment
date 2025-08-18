import styled from 'styled-components'

/**
 * Styled component is used to decorate the features component.
 * Props are passed from ThemeProvider component.
 */

export const FeaturesStyle = styled.ul`
  color: black;
  font-size: ${(props) => props.theme.fontSize}em;
  font-family: ${(props) => props.theme.fontFamily};

  padding-left: 2em;
  padding-right: 2em;
  /* padding: 0; */
  width: calc(100% - 4em);
  li {
    padding-left: 0.25em;
    // margin-bottom: 1.5em;

    ::marker {
      content: '${(props) => props.theme.featureBullet || '✓'}';
    }
  }
`
