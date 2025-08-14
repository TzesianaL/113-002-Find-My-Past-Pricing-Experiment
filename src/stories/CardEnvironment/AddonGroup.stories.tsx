import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import AddonGroup, {
  AddonGroupProps,
} from 'Components/Environments/CardEnvironment/AddonGroup/AddonGroup'
import { AddonData } from 'types'
import { horizontalThreeColumnAddonLayout } from 'StandardLayouts/AddonLayouts'

export default {
  title: 'Environments/Card Environment/AddonGroup',
  component: AddonGroup,
} as Meta
/**
 * To be deleted when add ons data structure has been created
 */
const addons: AddonData[] = [
  {
    id: 'Addon_1',
    title: 'test Title',
    subtitle: 'test SubTitle',
    features: ['test feature', 'test feature'],
    price: 23,
  },
  {
    id: 'Addon_2',
    title: 'test Title',
    subtitle: 'test SubTitle',
    features: ['test feature', 'test feature'],
    price: 23,
  },
  {
    id: 'Addon_3',
    title: 'test Title',
    subtitle: 'test SubTitle',
    features: ['test feature', 'test feature'],
    price: 23,
  },
]
const Template: Story<AddonGroupProps> = (args) => <AddonGroup {...args} />

export const BasicAddonGroup = Template.bind({})
BasicAddonGroup.args = {
  data: addons,
  layout: horizontalThreeColumnAddonLayout,
}

export const MutexAddonGroup = Template.bind({})
MutexAddonGroup.args = {
  data: addons.map((addon) => ({
    ...addon,
    id: `Mutex_${addon.id}`,
    mutex: true,
  })),
  layout: horizontalThreeColumnAddonLayout,
}

export const MixedMutexAddonGroup = Template.bind({})
MixedMutexAddonGroup.args = {
  data: addons.map((addon, i) => ({
    ...addon,
    id: `Mixed_${addon.id}`,
    mutex: i >= 1,
  })),
  layout: horizontalThreeColumnAddonLayout,
}
