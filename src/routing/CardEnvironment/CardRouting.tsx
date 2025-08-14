import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import BasketScreen from './pageDirectory/basketScreen'
import SplashScreen from '../sharedPages/SplashScreen'
import StoreScreen from './pageDirectory/storeScreen'
import AddonScreen from './pageDirectory/addonScreen'

const CardJourney: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SplashScreen nextPath="/storePage" />
      </Route>
      <Route path="/storePage">
        <StoreScreen />
      </Route>
      <Route path="/addOnPage">
        <AddonScreen nextPage="/basketPage" />
      </Route>
      <Route path="/basketPage">
        <BasketScreen />
      </Route>
    </Switch>
  )
}

export default CardJourney
