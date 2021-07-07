import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmploymentPage } from '../components/EmploymentPage';

export default {
  title: 'Individual Pages/Employment',
  component: EmploymentPage,
  argTypes: {
    employments: {
      defaultValue: [{
        startDate: new Date(),
        endDate: null,
        name: 'Employment 2',
        namedBlurbs: {'c': 'd'}
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
} as ComponentMeta<typeof EmploymentPage>;

const Template: ComponentStory<typeof EmploymentPage> = (args) => <EmploymentPage {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
