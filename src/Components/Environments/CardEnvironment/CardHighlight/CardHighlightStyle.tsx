import styled from 'styled-components'

export const CardHighlightStyle = styled.div<{ isSelected?: boolean }>`
  border-color: ${(props) => (props.isSelected ? '#00b050' : '#00460f')};
  background-color: ${(props) => (props.isSelected ? '#00b050' : '#00460f')};
  color: white;
  border-top-left-radius: ${(props) =>
    props.theme.card?.borderRadius || '0.3em'};
  border-top-right-radius: ${(props) =>
    props.theme.card?.borderRadius || '0.3em'};
  position: absolute;
  // z-index: -1;
  text-align: left;
  width: 55%;
  /* width: ${(props) => props.theme.card?.width || '180px'}; */
  min-height: ${(props) => props.theme.highlight?.height || '0.5em'};
  padding: 0.5em 0 0.25em 0.7em;
  display: flex;
  flex-direction: column;
  top: -2em;
  left: -0.1em;
`
