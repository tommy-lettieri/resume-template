import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Website } from '../components/Website'; 

export default {
    title: 'Website',
    component: Website,
    argTypes: {},
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Website>;

const Template: ComponentStory<typeof Website> = (args) => <Website {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
