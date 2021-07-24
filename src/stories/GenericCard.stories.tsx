import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GenericCard } from '../components/GenericCard';

export default {
    title: 'Components / Generic Card',
    component: GenericCard,
    argTypes: {
        data: {
            defaultValue: {
                name: 'Default Name',
                bullets: [
                    'Since this is markdown you can have a bunch of control here. **Bold** *Italics*',
                    '**Extra Curriculars:** For schools you might want to include something like clubs you were in',
                    '**Responsibilities:** If this is a job what were you responsibile for?',
                    '**Languages** For programmers what languages did you work with?',
                    '**Frameworks:** For programmers what specify any frameworks you used like ExpressJS',
                    '**Databases** For programmers what list out different databases you have worked with (i.e. PostgreSQL)',
                    `
* If you really want to you could make the bullets just a single mark down string...
* These last two bullets are actually from a single string
#### And you can do things like headers
| or | tables |
| --- | --- |
| d1 | d2 |
| d3 | d4 |
          `
                ],
                startDate: new Date(),
                endDate: null,
                website: window.location.href,
                logoURL: '/placeholder.png',
            },
        },
        logoWidth: { defaultValue: 100 },
        dateFormat: { defaultValue: 'MMMM yyyy'},
        style: { defaultValue: { backgroundColor: '#EEEEEE' } }
    },
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof GenericCard>;

const Template: ComponentStory<typeof GenericCard> = (args) => <GenericCard {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};

export const StartDate = Template.bind({});
StartDate.args = {
    data: {
        name: 'Set Name',
        startDate: new Date()
    }
};

export const EndDate = Template.bind({});
EndDate.args = {
    data: {
        name: 'Set Name',
        endDate: new Date()
    }
};

export const ToPresent = Template.bind({});
ToPresent.args = {
    data: {
        name: 'Set Name',
        startDate: new Date(),
        endDate: null,
    }
};
