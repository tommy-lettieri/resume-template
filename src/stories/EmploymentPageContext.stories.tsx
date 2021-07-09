import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmploymentAPIWrapper } from '../components/context-wrappers/EmploymentPageContextWrapper' 

export default {
  title: 'API Pages/Employment Context',
  component: EmploymentAPIWrapper,
  argTypes: {
    employments: {
      defaultValue: [{
        startDate: new Date(),
        endDate: null,
        name: 'Employment 2',
        namedBlurbs: ['c', 'd']
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
} as ComponentMeta<typeof EmploymentAPIWrapper>;

const Template: ComponentStory<typeof EmploymentAPIWrapper> = (args) => <EmploymentAPIWrapper {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
