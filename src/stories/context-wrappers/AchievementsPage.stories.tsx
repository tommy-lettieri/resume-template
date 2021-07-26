import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AchievementsAPIWrapper } from '../../components/context-wrappers/GenericPageInstancesContextWrappers';

export default {
    title: 'Context Wrappers / Achievements Page',
    component: AchievementsAPIWrapper,
    argTypes: {},
    parameters: {
    },
} as ComponentMeta<typeof AchievementsAPIWrapper>;

const Template: ComponentStory<typeof AchievementsAPIWrapper> = (args) => <AchievementsAPIWrapper {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
