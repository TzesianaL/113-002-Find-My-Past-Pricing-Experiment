import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import PCWBasketScreen from './pageDirectory/PCWBasketScreen'
import SplashScreen from '../sharedPages/SplashScreen'
import PCWTableScreen from './pageDirectory/PCWTableScreen'

const PCWJourney: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SplashScreen nextPath="/tableScreen" />
      </Route>
      <Route path="/tableScreen">
        <PCWTableScreen nextPath="/basketPage" />
      </Route>
      <Route path="/basketPage">
        <PCWBasketScreen />
      </Route>
    </Switch>
  )
}

export default PCWJourney
