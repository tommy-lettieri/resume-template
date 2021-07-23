import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SkillsGraphCard } from '../components/SkillsGraphCard';

export default {
    title: 'Components/Skills Card',
    component: SkillsGraphCard,
    argTypes: {
    },
    parameters: {
    },
} as ComponentMeta<typeof SkillsGraphCard>;

const Template: ComponentStory<typeof SkillsGraphCard> = (args) => <SkillsGraphCard {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
