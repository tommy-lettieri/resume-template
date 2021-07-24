import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContactAPIProvider } from '../../components/context-wrappers/ContactPageContextWrapper';

export default {
    title: 'Context Wrappers / Contact Page',
    component: ContactAPIProvider,
    argTypes: {},
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof ContactAPIProvider>;

const Template: ComponentStory<typeof ContactAPIProvider> = (args) => <ContactAPIProvider {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
