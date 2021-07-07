import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import { OptionalLinkWrapper } from './OptionalLinkWrapper';

export interface School {
    startDate?: Date;
    endDate?: Date;
    gpa?: number;
    name: string;
    major?: string;
    awards?: string;
    logoURL?: string;
    website?: string;
    namedBlurbs?: {
        [key: string]: string;
    }
}

interface SchoolCardProps {
    style?: React.CSSProperties;
    dateFormat?: string;
    school: School;
    gpaPrecision?: number;
    logoWidth?: number;
}

export const SchoolCard = ({
    dateFormat = 'MMMM yyyy',
    school,
    style,
    gpaPrecision = 2,
    logoWidth,
}: SchoolCardProps) => {
    let dateString = '';
    if (school.startDate && school.endDate) {
      dateString = `${moment(school.startDate).format(dateFormat)} - ${moment(school.endDate).format(dateFormat)}`
    } else if (!school.startDate && !school.endDate) {
      dateString = '';
    } else {
      dateString = moment(school.startDate || school.endDate).format(dateFormat);
    }

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

    return (
    <div style={{
        padding: '20px',
        ...style,
    }}>
        <div style= {{
            display: 'flex',
            flexDirection: 'row',
        }}>
            {school.logoURL && <OptionalLinkWrapper href={school.website}><div style={{height: '100%', display:'flex', alignItems: 'center', marginRight: '1em'}}><img style={{maxHeight: '100px', maxWidth: '250px', width: logoWidth}} src={school.logoURL} /> </div></OptionalLinkWrapper>}
            <div>
                <div style= {{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <OptionalLinkWrapper href={school.website}><h2 style={{margin: 0}}>{school.name}</h2></OptionalLinkWrapper>
                    {dateString && <div style={{marginTop: 'auto', marginLeft: '0.5em'}}>{dateString}</div>}
                </div>
                {school.major && <div>{school.major}</div>}
                {awardsLine && <div>{awardsLine}</div>}
                {school.namedBlurbs && <ul>{Object.entries(school.namedBlurbs).map(([key, value]) => <li>
                    <strong>{key}:</strong> {value}
                </li>)}</ul>}
            </div>
        </div>
    </div>)
}
