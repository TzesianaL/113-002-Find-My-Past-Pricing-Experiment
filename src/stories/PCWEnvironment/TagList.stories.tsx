import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import TagList, {
  TagListProps,
} from 'Components/Environments/PCW/TagList/TagList'

export default {
  title: 'Environments/PCW Environment/Tag List',
  component: TagList,
  argTypes: {
    tags: {
      control: {
        type: 'array',
      },
    },
  },
} as Meta
const Template: Story<TagListProps> = (args) => <TagList {...args} />

export const BasicTagList = Template.bind({})

BasicTagList.args = {
  tags: [
    { text: 'Basic', color: 'yellow' },
    { text: 'Intermediate', color: 'blue' },
    { text: 'Advanced', color: 'green' },
  ],
}

const ThemeTemplate: Story = ({ primary, secondary, tertiary, ...args }) => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary,
          secondary,
          background: secondary,
          pcwTags: {
            primary,
            secondary,
            tertiary,
          },
        },
      }}
    >
      <TagList {...args} />
    </ThemeProvider>
  )
}

export const ThemeTagList = ThemeTemplate.bind({})

ThemeTagList.argTypes = {
  primary: {
    control: {
      type: 'color',
    },
  },
  secondary: {
    control: {
      type: 'color',
    },
  },
  tertiary: {
    control: {
      type: 'color',
    },
  },
}

ThemeTagList.args = {
  tags: [
    { text: '2 months free [placeholder]', tagColorType: 'secondary' },
    { text: '[Placeholder] Exclusive', tagColorType: '' },
    { text: '£75 [Placeholder] Voucher', tagColorType: '' },
  ],
  primary: '#C4C4C4',
  secondary: '#377460',
  tertiary: 'mediumorchid',
}
