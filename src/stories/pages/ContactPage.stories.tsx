import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContactPage } from '../..';

export default {
    title: 'Pages / Contact',
    component: ContactPage,
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof ContactPage>;

const Template: ComponentStory<typeof ContactPage> = (args) => <ContactPage {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
