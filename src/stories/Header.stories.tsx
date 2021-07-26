import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '..';

export default {
    title: 'Components / Header',
    component: Header,
    argTypes: {
    },
    parameters: {
    },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
