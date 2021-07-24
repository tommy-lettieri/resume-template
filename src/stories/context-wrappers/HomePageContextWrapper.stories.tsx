import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HomeAPIProvider } from '../../components/context-wrappers/HomePageContextWrapper';

export default {
    title: 'Context Wrappers / Home Page',
    component: HomeAPIProvider,
    argTypes: {},
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof HomeAPIProvider>;

const Template: ComponentStory<typeof HomeAPIProvider> = (args) => <HomeAPIProvider {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
