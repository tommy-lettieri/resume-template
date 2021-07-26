import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HomeAPIWrapper } from '../../components/context-wrappers/HomePageContextWrapper';

export default {
    title: 'Context Wrappers / Home Page',
    component: HomeAPIWrapper,
    argTypes: {},
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof HomeAPIWrapper>;

const Template: ComponentStory<typeof HomeAPIWrapper> = (args) => <HomeAPIWrapper {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
