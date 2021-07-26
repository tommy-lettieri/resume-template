import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from '../';

export default {
    title: 'Components / Footer',
    component: Footer,
    argTypes: {
    },
    parameters: {
    },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};

export const LongStrings = Template.bind({});
LongStrings.args = {
    // This would happen with double digit major, minor, patch
    // 11 commits past the tag where commit is git ABC (should only happen on stage)
    version: 'v11.11.11-11-GABC',
    // Wednesday date
    buildTime: '1/15/20'
};

export const ExpectedCase = Template.bind({});
ExpectedCase.args = {
    version: 'v1.9.10',
    buildTime: '9/28/19'
};
