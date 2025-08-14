import styled from 'styled-components'

export const BasketPageStyle = styled.div`
  width: 100%;
  display: flex;
  background: #f2f2f2;
  flex-direction: column;
  /* align-items: center; */
  padding-bottom: 3em;

  .introText {
    font-size: 1em;
    max-width: 50em;
    @media screen and (max-width: 600px) {
      max-width: 17em;
    }
  }

  .footerText {
    /* font-size: small; */
    font-size: 1em;
    max-width: 50em;
  }
`

export const HeaderWrapper = styled.div`
  padding-left: 20px;
  background: rgb(158, 224, 148);
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    margin: auto;
    margin-top: 3em;
  }
  width: 40%;
  margin-top: 3em;
  align-items: center;
  .cardWrapper {
    width: 75%;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  button {
    margin: 0.5em 1em;
  }
`
