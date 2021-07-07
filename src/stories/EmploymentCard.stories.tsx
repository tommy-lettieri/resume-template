import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmploymentCard } from '../components/EmploymentCard';

export default {
  title: 'Components/Employment Card',
  component: EmploymentCard,
  argTypes: {
    employment: {
      defaultValue: {
        name: 'Default Employment Name',
        namedBlurbs: {
          'Responsibilities': 'Give an overview of what you did there.',
          'Languages': 'For programmers what languages did you work with.',
          'Frameworks': 'Specify any frameworks you used like ExpressJS',
          'Databases': 'List out different databases you have worked with (i.e. PostgreSQL)',
        },
        startDate: new Date(),
        endDate: null,
      }
    }
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof EmploymentCard>;

const Template: ComponentStory<typeof EmploymentCard> = (args) => <EmploymentCard {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};

export const StartDate = Template.bind({});
StartDate.args = {
  employment: {
    name: 'Set Name',
    namedBlurbs: {},
    startDate: new Date()
  }
};

export const EndDate = Template.bind({});
EndDate.args = {
  employment: {
    name: 'Set Name',
    namedBlurbs: {},
    endDate: new Date()
  }
};

export const ToPresent = Template.bind({});
ToPresent.args = {
  employment: {
    name: 'Set Name',
    namedBlurbs: {},
    startDate: new Date(),
    endDate: null,
  }
};
