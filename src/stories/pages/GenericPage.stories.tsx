import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GenericPage } from '../../';

export default {
    title: 'Pages / Generic',
    component: GenericPage,
    argTypes: {
        dataArray: {
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
        },
        pageName: {
            defaultValue: 'Default Page Name'
        }
    },
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof GenericPage>;

const Template: ComponentStory<typeof GenericPage> = (args) => <GenericPage {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
