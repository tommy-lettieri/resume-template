import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmploymentAPIWrapper } from '../../components/context-wrappers/GenericPageInstancesContextWrappers';

export default {
    title: 'Context Wrappers / Employment Page',
    component: EmploymentAPIWrapper,
    argTypes: {},
    parameters: {
    },
} as ComponentMeta<typeof EmploymentAPIWrapper>;

const Template: ComponentStory<typeof EmploymentAPIWrapper> = (args) => <EmploymentAPIWrapper {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
