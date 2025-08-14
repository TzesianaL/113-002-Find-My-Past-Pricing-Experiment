import styled from 'styled-components'

export const CellStyle = styled.div<{
  shaded: boolean
  listType: boolean
}>`
  display: flex;
  flex-direction: column;
  text-align: ${(props) => (props.listType ? 'left' : 'center')};
  align-items: ${(props) => (props.listType ? 'flex-start' : 'center')};
  justify-content: center;
  color: ${(props) => props.theme.pcwCell?.textColor || '#000000'};
  background: ${(props) =>
    props.shaded
      ? '#DCDCDC'
      : props.theme.pcwCell?.backgroundColor || '#ffffff'};
  @media (max-width: 600px) {
    min-width: 180px;
  }
  min-width: 100px;
  height: 90px;
  border: 1px solid;
  border-color: lightgray;
  word-wrap: break-word;
  font-weight: bolder;
  font-size: small;
`
