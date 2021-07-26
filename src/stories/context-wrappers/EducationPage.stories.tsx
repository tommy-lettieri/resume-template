import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EducationAPIWrapper } from '../../components/context-wrappers/GenericPageInstancesContextWrappers';

export default {
    title: 'Context Wrappers / Education Page',
    component: EducationAPIWrapper,
    argTypes: {},
    parameters: {
    },
} as ComponentMeta<typeof EducationAPIWrapper>;

const Template: ComponentStory<typeof EducationAPIWrapper> = (args) => <EducationAPIWrapper {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
