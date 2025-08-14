import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Title, { TitleProps } from 'Components/Shared/Title/Title'

export default {
  title: 'Shared/Title',
  component: Title,
} as Meta

const Template: Story<TitleProps> = (args) => (
  <Title {...args}>Title Text</Title>
)

export const BasicTitle = Template.bind({})
