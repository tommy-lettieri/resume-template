import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmploymentCard } from '../components/EmploymentCard';

export default {
    title: 'Components/Employment Card',
    component: EmploymentCard,
    argTypes: {
        employment: {
            defaultValue: {
                name: 'Default Employment Name',
                namedBlurbs: {
                    'Responsibilities': 'Give an overview of what you did there.',
                    'Languages': 'For programmers what languages did you work with.',
                    'Frameworks': 'Specify any frameworks you used like ExpressJS',
                    'Databases': 'List out different databases you have worked with (i.e. PostgreSQL)',
                },
                startDate: new Date(),
                endDate: null,
            }
        }
    },
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof EmploymentCard>;

const Template: ComponentStory<typeof EmploymentCard> = (args) => <EmploymentCard {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};

export const AllData = Template.bind({});
AllData.args = {
    employment: {
        name: 'Default Employment Name',
        namedBlurbs: {
            'Responsibilities': 'Give an overview of what you did there.',
            'Languages': 'For programmers what languages did you work with.',
            'Frameworks': 'Specify any frameworks you used like ExpressJS',
            'Databases': 'List out different databases you have worked with (i.e. PostgreSQL)',
        },
        startDate: new Date(),
        endDate: null,
        website: window.location.href,
        logoURL: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v286batch2-aew-company-logo-17_4.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=e93e1706e26a78ff1238b3ca63b10bdf',
    },
    logoWidth: 100,
    dateFormat: 'MMMM yyyy',
    style: undefined
};

export const StartDate = Template.bind({});
StartDate.args = {
    employment: {
        name: 'Set Name',
        namedBlurbs: {},
        startDate: new Date()
    }
};

export const EndDate = Template.bind({});
EndDate.args = {
    employment: {
        name: 'Set Name',
        namedBlurbs: {},
        endDate: new Date()
    }
};

export const ToPresent = Template.bind({});
ToPresent.args = {
    employment: {
        name: 'Set Name',
        namedBlurbs: {},
        startDate: new Date(),
        endDate: null,
    }
};
