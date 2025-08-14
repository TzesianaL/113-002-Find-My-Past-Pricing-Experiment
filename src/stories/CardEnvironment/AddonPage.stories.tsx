import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import AddonPage, {
  AddonPageProps,
} from 'Components/Environments/CardEnvironment/AddonPage/AddonPage'
import { AddonData } from 'types'
import { horizontalThreeColumnAddonLayout } from 'StandardLayouts/AddonLayouts'

export default {
  title: 'Environments/Card Environment/AddonPage',
  component: AddonPage,
} as Meta

const Addons: AddonData[] = [
  {
    id: 'addon1',
    title: 'Space Scooter',
    subtitle: 'For the discernable customer',
    features: [
      'Drive at a record breaking 0.25 mpg!',
      'Fires are limited to 23% of our customers',
    ],
    price: 23,
  },
  {
    id: 'addon2',
    title: 'Space Hopper',
    // subtitle: 'test SubTitle',
    features: [
      'Relive those halcyon days',
      'Explosions are possible - contact your GP for clarification',
    ],
    price: 12,
  },
  {
    id: 'addon3',
    title: 'test Title',
    subtitle: 'test SubTitle',
    features: ['test feature', 'test feature'],
    price: 69,
  },
]
const Template: Story<AddonPageProps> = (args) => <AddonPage {...args} />

export const BasicAddonPage = Template.bind({})
BasicAddonPage.args = {
  data: Addons,
  layout: horizontalThreeColumnAddonLayout,
  bannerName: 'Test Logo',
  bannerLogoSrc: 'Should be path to image',
}
