import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SkillsGraphCard } from '../';

export default {
    title: 'Components / Skills Card',
    component: SkillsGraphCard,
    argTypes: {
        name: { defaultValue: 'Default Name'},
        data: {
            defaultValue: {
                a: 5,
                b: 5,
                c: 5,
                d: 4,
                e: 4,
                f: 4,
                g: 3,
                h: 3,
                i: 3,
            }
        },
    },
    parameters: {
    },
} as ComponentMeta<typeof SkillsGraphCard>;

const Template: ComponentStory<typeof SkillsGraphCard> = (args) => <SkillsGraphCard {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
