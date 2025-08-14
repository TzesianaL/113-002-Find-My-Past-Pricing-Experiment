import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { ConditionSelector } from 'Components/Shared/ConditionSelection/ConditionSelector'
import { Provider } from 'react-redux'
import { store } from 'redux/store'

const meta: Meta = {
  title: 'Shared/Condition Selection/ConditionSelector',
  component: ConditionSelector,
}

export default meta

interface TemplateProps {
  conditions: number[]
}

// TODO: Make this fire an action
const template: Story<TemplateProps> = ({ conditions }) => {
  const conditionObject = conditions.reduce((obj, conditionId) => {
    return {
      ...obj,
      [conditionId]: {
        conditionName: `Condition ${conditionId}`,
      },
    }
  }, {})

  return (
    <Provider store={store}>
      <ConditionSelector
        dataFile={{ conditions: conditionObject }}
        onChange={action('Condition changed')}
      />
    </Provider>
  )
}

export const basic = template.bind({})
basic.args = {
  conditions: [0, 1, 2],
}
