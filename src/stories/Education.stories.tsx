import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EducationPage } from '../components/EducationPage';

export default {
  title: 'Individual Pages/Education',
  component: EducationPage,
  argTypes: {
    schools: {
      defaultValue: [{
        startDate: new Date(),
        endDate: new Date(),
        gpa: 4.0,
        name: 'Really Good School 2'
      }, {
        gpa: 3.96,
        name: 'Really Good School 1'
      }]
    }
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof EducationPage>;

const Template: ComponentStory<typeof EducationPage> = (args) => <EducationPage {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
