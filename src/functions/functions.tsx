import React from 'react'
import { SplashItem, SplashImageItem, Periods, EnvironmentType } from 'types'
import CardJourney from 'routing/CardEnvironment/CardRouting'
import PCWJourney from 'routing/PCWRouting/PCWRouting'

export const handleConsoleLogClick = (): void => {
  // console.info('The button was clicked.')
}

/**
 *
 * Function declares whether props are type of ImageItem or TextItem.
 */

export function isImageItem(item: SplashItem): item is SplashImageItem {
  return Object.prototype.hasOwnProperty.call(item as SplashImageItem, 'src')
}

export function getPeriodText(periodType: Periods): string {
  if (periodType === 'upfront') {
    return 'upfront'
  }
  return `per ${periodType}`
}

export function convertPricePeriods(
  price: number,
  inputType?: Periods,
  outputType?: Periods
): number {
  if (inputType === undefined || outputType === undefined) {
    return price
  }

  let dailyInputPrice
  switch (inputType) {
    case 'day':
      dailyInputPrice = price
      break
    case 'week':
      dailyInputPrice = price / 7
      break
    case 'fortnight':
      dailyInputPrice = price / 14
      break
    case 'month':
      dailyInputPrice = price / 28
      break
    case 'quarter':
      dailyInputPrice = price / 112
      break
    default:
      dailyInputPrice = price / 365
      break
  }

  switch (outputType) {
    case 'day':
      return dailyInputPrice
    case 'week':
      return dailyInputPrice * 7
    case 'fortnight':
      return dailyInputPrice * 14
    case 'month':
      return dailyInputPrice * 28
    case 'quarter':
      return dailyInputPrice * 112
    default:
      return dailyInputPrice * 365
  }
}

export const getEnvironmentJourney = (
  environment: EnvironmentType
): React.FC => {
  switch (environment) {
    case 'Card':
      return CardJourney

    case 'PCW':
      return PCWJourney

    default:
      throw Error(`Environment ${environment} not found`)
  }
}
