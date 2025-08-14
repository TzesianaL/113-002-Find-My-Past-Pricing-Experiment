import React from 'react'
import 'jest-styled-components'
import * as renderer from 'react-test-renderer'
import { testingItems } from 'stories/CardEnvironment/SplashPage/__fixtures__/splashpage.fixtures'
import SplashPage from './SplashPage'

describe('<SplashPage/>', () => {
  it('should render correctly SplashPage', () => {
    const tree = renderer
      .create(
        <SplashPage
          storeLogo="tets storelogo"
          storeName="test store name"
          pageTitle="test page title"
          items={testingItems}
          buttonText="test button text"
          onClick={() => {}}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
