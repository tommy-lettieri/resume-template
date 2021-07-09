import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import { OptionalLinkWrapper } from './OptionalLinkWrapper';

export interface GenericCardData {
    startDate?: string | Date;
    endDate?: string | Date | null;
    logoURL?: string;
    website?: string;
    name: string;
    namedBlurbs?: {
        [key: string]: string;
    }
}

interface GenericCardProps {
    style?: React.CSSProperties;
    dateFormat?: string;
    data: GenericCardData;
    logoWidth?: number;
}

export const GenericCard = ({
    dateFormat = 'MMMM yyyy',
    data,
    style,
    logoWidth,
}: GenericCardProps) => {
    let dateString = '';
    if (data.startDate && (data.endDate || data.endDate === null)) {
      dateString = `${moment(data.startDate).format(dateFormat)} - ${data.endDate ? moment(data.endDate).format(dateFormat) : 'present'}`
    } else if (!data.startDate && !data.endDate) {
      dateString = '';
    } else {
      dateString = moment(data.startDate || data.endDate).format(dateFormat);
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
            {data.logoURL && <OptionalLinkWrapper href={data.website}><div style={{height: '100%', display:'flex', alignItems: 'center', marginRight: '1em'}}><img style={{maxHeight: '100px', maxWidth: '250px', width: logoWidth }} src={data.logoURL} /> </div></OptionalLinkWrapper>}
            <div>
                <div style= {{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <OptionalLinkWrapper href={data.website}><h2 style={{margin: 0}}>{data.name}</h2></OptionalLinkWrapper>
                    {dateString && <div style={{marginTop: 'auto', marginLeft: '0.5em'}}>{dateString}</div>}
                </div>
                {data.namedBlurbs && <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>{Object.entries(data.namedBlurbs).map(([key, value]) => <li>
                    <strong>{key}:</strong> {value}
                </li>)}</ul>}
            </div>
        </div>
    </div>)
}
