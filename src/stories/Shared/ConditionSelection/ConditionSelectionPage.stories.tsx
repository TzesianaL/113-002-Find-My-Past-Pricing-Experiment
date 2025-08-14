import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ConditionSelectionPage } from 'Components/Shared/ConditionSelection/ConditionSelectionPage'
import { action } from '@storybook/addon-actions'
import { store } from 'redux/store'
import { Provider } from 'react-redux'

const meta: Meta = {
  title: 'Shared/Condition Selection/ConditionSelectionPage',
  component: ConditionSelectionPage,
}

export default meta

interface TemplateProps {
  conditions: number[]
}

const conditionNames = ['bob', 'baseline test', 'a/b test']
const template: Story<TemplateProps> = ({ conditions }) => {
  const conditionObject = conditions.reduce((obj, conditionId) => {
    return {
      ...obj,
      [conditionId]: { conditionName: conditionNames[conditionId] },
    }
  }, {})

  return (
    <Provider store={store}>
      <ConditionSelectionPage
        dataFile={{ conditions: conditionObject }}
        onClick={action('Continue button hit')}
      />
    </Provider>
  )
}

export const basic = template.bind({})
basic.args = {
  conditions: [0, 1, 2],
}
