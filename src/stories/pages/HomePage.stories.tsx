import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HomePage } from '../../';

export default {
    title: 'Pages / Home',
    component: HomePage,
    argTypes: {
        backgroundColor: {
            control: 'color',
            defaultValue: '#EEEEEE'
        },
        missionStatement: { defaultValue: 'Default Mission Statement' },
        name: { defaultValue: 'Default Name'},
    },
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};

export const LongNameShortMission = Template.bind({});
LongNameShortMission.args = {
    name: 'abdefghijklmnopqrstuvwxyz abdefghijklmnopqrstuvwxyz abdefghijklmnopqrstuvwxyz abdefghijklmnopqrstuvwxyz abdefghijklmnopqrstuvwxyz abdefghijklmnopqrstuvwxyz abdefghijklmnopqrstuvwxyz',
    missionStatement: 'short'
};

export const ShortNameLongMission = Template.bind({});
ShortNameLongMission.args = {
    name: 'Short Name',
    missionStatement: 'abdefghijklmnopqrstuvwxyz abdefghijklmnopqrstuvwxyz abdefghijklmnopqrstuvwxyz abdefghijklmnopqrstuvwxyz abdefghijklmnopqrstuvwxyz abdefghijklmnopqrstuvwxyz abdefghijklmnopqrstuvwxyz'
};
