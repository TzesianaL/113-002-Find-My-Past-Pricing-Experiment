import styled from 'styled-components'

export const TagListStyle = styled.div`
  width: calc(100% - 2px);
  border: 1px solid;
  border-top: none;
  border-color: #e0e0e0;
  background: white;
  display: flex;
  flex-wrap: wrap;
  height: 38px;
  @media only screen and (max-width: 600px) {
    height: 50px;
  }
`
export const TagStyle = styled.div<{
  tagColor?: string
  tagColorType?: 'primary' | 'secondary' | 'tertiary'
}>`
  width: max-content;
  background: ${(props) =>
    (props.tagColor ||
      (props.tagColorType &&
        props.theme.colors?.pcwTags?.[props.tagColorType]) ||
      props.theme.colors?.pcwTags?.primary) ??
    '#CC8899'};
  padding: 0.1em;
  margin: 2px 4px 2px 0;
  float: left;
  height: 28px;
  @media only screen and (max-width: 600px) {
    height: 40px;
  }
  font-size: small;
  padding: 0 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`
