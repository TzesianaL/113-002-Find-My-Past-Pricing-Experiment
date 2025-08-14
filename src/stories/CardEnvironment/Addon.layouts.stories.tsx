import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {
  cardAddonLayout,
  horizontalThreeColumnAddonLayout,
} from 'StandardLayouts/AddonLayouts'
import Addon from 'Components/Environments/CardEnvironment/Addon/Addon'
import { AddonData } from 'types'

export default {
  title: 'Environments/Card Environment/Addon/Layouts',
  component: Addon,
} as Meta

const addOnData1: AddonData = {
  id: 'addon1',
  title: 'Feature 1',
  subtitle: 'Test Subtitle here descripting stuff',
  features: ['test feature', 'test feature 2'],
}

const addOnData2: AddonData = {
  id: 'addon2',
  title: 'Feature 2',
  subtitle: 'Electric Boogaloo',
  features: ['Fun things', 'Charizard!', 'Meowth', "Farfetch'd"],
}

export const HorizontalThreeColumnLayout: Story = () => (
  <>
    <Addon layout={horizontalThreeColumnAddonLayout} data={addOnData1} />
    <Addon layout={horizontalThreeColumnAddonLayout} data={addOnData2} />
  </>
)

export const CardLayout: Story = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
    }}
  >
    <Addon layout={cardAddonLayout} data={addOnData1} />
    <Addon layout={cardAddonLayout} data={addOnData2} />
  </div>
)
