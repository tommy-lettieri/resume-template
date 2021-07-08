import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import { OptionalLinkWrapper } from './OptionalLinkWrapper';

export interface Employment {
    startDate?: string | Date;
    endDate?: string | Date | null;
    logoURL?: string;
    website?: string;
    name: string;
    namedBlurbs?: {
        [key: string]: string;
    }
}

interface EmploymentCardProps {
    style?: React.CSSProperties;
    dateFormat?: string;
    employment: Employment;
    logoWidth?: number;
}

export const EmploymentCard = ({
    dateFormat = 'MMMM yyyy',
    employment,
    style,
    logoWidth,
}: EmploymentCardProps) => {
    let dateString = '';
    if (employment.startDate && (employment.endDate || employment.endDate === null)) {
      dateString = `${moment(employment.startDate).format(dateFormat)} - ${employment.endDate ? moment(employment.endDate).format(dateFormat) : 'present'}`
    } else if (!employment.startDate && !employment.endDate) {
      dateString = '';
    } else {
      dateString = moment(employment.startDate || employment.endDate).format(dateFormat);
    }

    return (
    <div style={{
        padding: '20px',
        ...style,
    }}>
        <div style= {{
            display: 'flex',
            flexDirection: 'row',
        }}>
            {employment.logoURL && <OptionalLinkWrapper href={employment.website}><div style={{height: '100%', display:'flex', alignItems: 'center', marginRight: '1em'}}><img style={{maxHeight: '100px', maxWidth: '250px', width: logoWidth }} src={employment.logoURL} /> </div></OptionalLinkWrapper>}
            <div>
                <div style= {{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <OptionalLinkWrapper href={employment.website}><h2 style={{margin: 0}}>{employment.name}</h2></OptionalLinkWrapper>
                    {dateString && <div style={{marginTop: 'auto', marginLeft: '0.5em'}}>{dateString}</div>}
                </div>
                {employment.namedBlurbs && <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>{Object.entries(employment.namedBlurbs).map(([key, value]) => <li>
                    <strong>{key}:</strong> {value}
                </li>)}</ul>}
            </div>
        </div>
    </div>)
}
