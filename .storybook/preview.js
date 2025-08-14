import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import styled from 'styled-components'
import { GlobalStyle } from 'shared/global.ts'
import rootReducer from 'redux/reducers'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
}

const Styling = styled.style`
  @font-face {
    font-family: 'AIAFont';
    src: url('src/fonts/AIAEverest-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`

const store = createStore(rootReducer)

export const decorators = [
  (Story) => (
    <>
      <Styling />
      <GlobalStyle />
      <Provider store={store}>
        <Story />
      </Provider>
    </>
  ),
]
