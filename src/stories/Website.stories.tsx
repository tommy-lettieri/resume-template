import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Website } from '../components/Website' 

export default {
  title: 'API Pages/Website',
  component: Website,
  argTypes: {
    employments: {
      defaultValue: [{
        startDate: new Date(),
        endDate: null,
        name: 'Employment 2',
        bullets: ['c', 'd']
      }, {
        startDate: new Date(),
        endDate: new Date(),
        name: 'Employment 1',
      }]
    }
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Website>;

const Template: ComponentStory<typeof Website> = (args) => <Website {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
