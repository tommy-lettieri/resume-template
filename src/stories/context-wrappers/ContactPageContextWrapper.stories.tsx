import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContactAPIWrapper } from '../../components/context-wrappers/ContactPageContextWrapper';

export default {
    title: 'Context Wrappers / Contact Page',
    component: ContactAPIWrapper,
    argTypes: {},
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof ContactAPIWrapper>;

const Template: ComponentStory<typeof ContactAPIWrapper> = (args) => <ContactAPIWrapper {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
