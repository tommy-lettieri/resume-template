import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OptionalLinkWrapper } from '..';

export default {
    title: 'Components / OptionalLinkWrapper',
    component: OptionalLinkWrapper,
    argTypes: {
        children: {
            defaultValue: 'This would be child component'
        }
    },
    parameters: {
    },
} as ComponentMeta<typeof OptionalLinkWrapper>;

const Template: ComponentStory<typeof OptionalLinkWrapper> = (args) => <OptionalLinkWrapper {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
