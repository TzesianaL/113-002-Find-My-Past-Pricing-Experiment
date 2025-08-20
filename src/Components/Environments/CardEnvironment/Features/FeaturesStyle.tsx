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

export const DropdownHeader = styled.div`
  background-color: #f5f0eb;
  padding: 12px 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize}em;
  color: black;
  user-select: none;

  span:first-child {
    flex-grow: 1;
    text-align: center;
  }

  span:last-child {
    position: absolute;
    right: 16px;
  }

  &:hover {
    background-color: #f0ebe6;
  }
`

export const DropdownContent = styled.div<{ isExpanded: boolean }>`
  max-height: ${(props) => (props.isExpanded ? 'auto' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: #f5f0eb;
`
