import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GenericPage } from '../components/GenericPage';

export default {
  title: 'Individual Pages/Generic',
  component: GenericPage,
  argTypes: {
    Generics: {
      defaultValue: [{
        startDate: new Date(),
        endDate: null,
        name: 'Generic 2',
        bullets: ['c', 'd']
      }, {
        startDate: new Date(),
        endDate: new Date(),
        name: 'Generic 1',
      }]
    }
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof GenericPage>;

const Template: ComponentStory<typeof GenericPage> = (args) => <GenericPage {...args} />;

export const TomTom = Template.bind({});
TomTom.args = {
  Generics: [{
    startDate: new Date(),
    endDate: null,
    name: 'Generic 2',
    bullets: ['c', 'd']
  }, {
    startDate: new Date(),
    endDate: new Date(),
    name: 'Generic 1',
  }]
};


export const DefaultStory = Template.bind({});
DefaultStory.args = {};
