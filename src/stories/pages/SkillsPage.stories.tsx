import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SkillsPage } from '../../components/pages/SkillsPage';

export default {
    title: 'Pages / Skills',
    component: SkillsPage,
    argTypes: {
        graphDataArray: { defaultValue: [] }
    },
    parameters: {
    },
} as ComponentMeta<typeof SkillsPage>;

const Template: ComponentStory<typeof SkillsPage> = (args) => <SkillsPage {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
