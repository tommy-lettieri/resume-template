import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SkillsPage } from '../components/SkillsPage';

export default {
    title: 'Individual Pages/Skills Page',
    component: SkillsPage,
    argTypes: {
    },
    parameters: {
    },
} as ComponentMeta<typeof SkillsPage>;

const Template: ComponentStory<typeof SkillsPage> = (args) => <SkillsPage {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
