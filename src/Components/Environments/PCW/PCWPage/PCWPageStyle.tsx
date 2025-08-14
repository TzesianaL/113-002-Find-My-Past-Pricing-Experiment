import styled, { css } from 'styled-components'

export const PCWPageStyle = styled.div<{
  blur?: boolean
  blurDuration?: number
}>`
  display: flex;
  flex-direction: column;

  ${(props) => `
    transition: all ${props.blurDuration || 0}s ease-in-out;
  `}

  ${(props) =>
    props.blur &&
    css`
      filter: blur(2px) saturate(0.8);
    `};
`
export const HeaderStyle = styled.div``

export const FooterStyle = styled.p`
  font-size: ${(props) => props.theme.footer?.fontSize || 1}em;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding: 2em 0em 2em 2em;
  font-size: normal;
`
export const HeaderWrapper = styled.div`
  padding-left: 20px;
  background: rgb(158, 224, 148);
`
export const ContentStyle = styled.div`
  width: min-content;
  margin: auto;
`
