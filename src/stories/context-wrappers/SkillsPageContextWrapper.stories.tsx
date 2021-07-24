import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SkillsAPIWrapper } from '../../components/context-wrappers/SkillsPageContextWrapper';

export default {
    title: 'Context Wrappers / Skills Page',
    component: SkillsAPIWrapper,
    argTypes: {},
    parameters: {
    },
} as ComponentMeta<typeof SkillsAPIWrapper>;

const Template: ComponentStory<typeof SkillsAPIWrapper> = (args) => <SkillsAPIWrapper {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
