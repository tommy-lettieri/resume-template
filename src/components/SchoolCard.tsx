import React from 'react';
import _ from 'lodash';
import { GenericCard } from './GenericCard';

export interface School {
    startDate?: string | Date;
    endDate?: string | Date | null;
    gpa?: number;
    name: string;
    major?: string;
    awards?: string;
    logoURL?: string;
    website?: string;
    bullets?: string[];
}

interface SchoolCardProps {
    style?: React.CSSProperties;
    dateFormat?: string;
    school: School;
    gpaPrecision?: number;
    logoWidth?: number;
}

export const SchoolCard = ({
    school,
    gpaPrecision = 2,
    ...props
}: SchoolCardProps) => {
    let awardsLine = '';
    if (school.awards) {
        awardsLine += school.awards;
        if (school.gpa) {
            awardsLine += ' with a ';
        }
    }
    if (school.gpa) {
        awardsLine += `cumulative GPA of ${school.gpa.toFixed(gpaPrecision)}`;
    }
    awardsLine = _.upperFirst(awardsLine);

    school.bullets = school.bullets ?? [];
    awardsLine && school.bullets.unshift(awardsLine);
    school.major && school.bullets.unshift(school.major);

    return (
        <GenericCard
            data={school}
            {...props}
        />
    )
}
