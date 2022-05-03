import React from 'react';
import Button from './index';

export default {
  title: 'Button',
  component: Button,

  argTypes: {
    children: {
      description: '버튼에 들어갈 설명',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Example = Template.bind({});

Example.args = {
  children: '다음',
};
