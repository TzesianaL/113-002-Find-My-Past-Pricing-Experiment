import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import SplashImg, {
  SplashImgProps,
} from 'Components/Shared/SplashPage/SplashImage/SplashImage'
import img from '../../images/logo.png'

export default {
  title: 'Environments/Card Environment/SplashScreen/SplashImage',
  component: SplashImg,
} as Meta

const Template: Story<SplashImgProps> = (args) => <SplashImg {...args} />

export const Basic = Template.bind({})

Basic.args = {
  imageSrc: img,
}
