import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProjectsAPIWrapper } from '../../components/context-wrappers/GenericPageInstancesContextWrappers';

export default {
    title: 'Context Wrappers / Projects Page',
    component: ProjectsAPIWrapper,
    argTypes: {},
    parameters: {
    },
} as ComponentMeta<typeof ProjectsAPIWrapper>;

const Template: ComponentStory<typeof ProjectsAPIWrapper> = (args) => <ProjectsAPIWrapper {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
