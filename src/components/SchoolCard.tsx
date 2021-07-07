import React from 'react';
import moment from 'moment';
import _ from 'lodash';

export interface School {
    startDate?: Date;
    endDate?: Date;
    gpa?: number;
    name: string;
    major?: string;
    awards?: string;
    logoURL?: string;
}

interface SchoolCardProps {
    style?: React.CSSProperties;
    dateFormat?: string;
    school: School;
    gpaPrecision?: number;
}

export const SchoolCard = ({
    dateFormat = 'MMMM yyyy',
    school,
    style,
    gpaPrecision = 2,
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
        maxHeight: '100px',
        ...style,
    }}>
        <div style= {{
            display: 'flex',
            flexDirection: 'row',
            maxHeight: '100px',
        }}>
            {school.logoURL && <div style={{display:'flex', alignItems: 'center', marginRight: '0.5em'}}><img style={{maxHeight: '100%', maxWidth: '250px'}} src={school.logoURL} /> </div>}
            <div>
                <div style= {{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <h2 style={{margin: 0}}>{school.name}</h2>
                    {dateString && <div style={{marginTop: 'auto', marginLeft: '0.5em'}}>{dateString}</div>}
                </div>
                {school.major && <div>{school.major}</div>}
                {awardsLine && <div>{awardsLine}</div>}
            </div>
        </div>
    </div>)
}
