import { EFSInputProvider } from '@dectech/react-library'
import { StandaloneProductRangeApp } from 'AppComponents/StandaloneProductRangeApp'
import { EFSContinueProvider } from 'hooks/useEFSContinue'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import './fonts/Vodafone-Bold.ttf'
import './fonts/Vodafone-Rg-Regular.ttf'
import './index.css'

ReactDOM.render(
  <EFSInputProvider efsDataID="efsData">
    <EFSContinueProvider>
      <Provider store={store}>
        <React.StrictMode>
          <StandaloneProductRangeApp />
        </React.StrictMode>
      </Provider>
    </EFSContinueProvider>
  </EFSInputProvider>,
  document.getElementById('root')
)
