import styled, { css } from 'styled-components'
import { ButtonStyle } from '../Button/ButtonStyle'

export const DropDownWrapper = styled.div`
  position: relative;
  width: 18em;
  ${ButtonStyle} {
    width: 100%;
  }
`

export const DropDownTitle = styled.div`
  flex: 0 0 auto;
`

export const DropDownSelectedChoiceText = styled.div`
  flex: 1 0 auto;
  margin-left: 1em;
  text-align: left;
`

export const HeaderButtonWrapper = styled.div<{ isOpen: boolean }>`
  position: relative;

  ${ButtonStyle} {
    display: flex;
    flex-direction: row;
  }

  ${ButtonStyle}::after {
    content: '>';
    display: inline;
    position: absolute;
    top: 30%;
    right: 1em;
    ${(props) =>
      css`
        transform: rotate(${props.isOpen ? '-90deg' : '90deg'});
      `}

    transition: transform 0.3s ease-out;
  }
`

export const ChoicesWrapper = styled.div`
  position: absolute;
  top: 2.58em;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;

  ${ButtonStyle} {
    position: relative;
    background-color: #f2f2f2 !important;
    transition: filter 0.3s;
    transition: background-color 0.3s;
  }

  ${ButtonStyle}:hover {
    /* filter: contrast(50%); */
    background-color: #666666 !important;
  }

  ${ButtonStyle}::before {
    content: '';
    position: absolute;
    height: 0%;
    top: 0;
    left: 0;
    width: 6px;
    background-color: turquoise;

    transition: height 0.3s ease-out;
  }

  ${ButtonStyle}:hover::before {
    height: 100%;
  }

  &.choices-enter {
    opacity: 0%;
    transition: opacity 300ms;
  }

  &.choices-enter-active {
    opacity: 100%;
  }

  &.choices-exit {
    opacity: 100%;
    transition: opacity 300ms;
  }

  &.choices-exit-active {
    opacity: 0%;
  }
`
