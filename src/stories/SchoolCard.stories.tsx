import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SchoolCard } from '../components/SchoolCard';

export default {
  title: 'Components/School Card',
  component: SchoolCard,
  argTypes: {
    school: {
      defaultValue: {
        startDate: new Date(),
        endDate: new Date(),
        gpa: 4.0,
        name: 'Default Name'
      }
    }
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SchoolCard>;

const Template: ComponentStory<typeof SchoolCard> = (args) => <SchoolCard {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};

export const StartDateOnly = Template.bind({});
StartDateOnly.args = {
  school: {
    name: 'test',
    gpa: 1.23,
    startDate: new Date('1/2/1994'),
  },
};

export const EndDateOnly = Template.bind({});
EndDateOnly.args = {
  school: {
    name: 'test',
    gpa: 1.23,
    endDate: new Date('3/4/2019'),
  }
};

export const NoDates = Template.bind({});
NoDates.args = {
  school: {
    name: 'test',
    gpa: 1.23,
  }
};

export const BothDates = Template.bind({});
BothDates.args = {
  school: {
    name: 'test',
    gpa: 1.23,
    startDate: new Date('1/2/1994'),
    endDate: new Date('3/4/2019'),
  }
};
