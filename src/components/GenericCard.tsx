import React from 'react';
import moment from 'moment';
import { OptionalLinkWrapper } from './OptionalLinkWrapper';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { PUBLIC_URL } from '../environment';


export interface GenericCardData {
    startDate?: string | Date;
    endDate?: string | Date | null;
    logoURL?: string;
    website?: string;
    name: string;
    bullets?: string[];
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
        dateString = `${moment(data.startDate).format(dateFormat)} - ${data.endDate ? moment(data.endDate).format(dateFormat) : 'present'}`;
    } else if (!data.startDate && !data.endDate) {
        dateString = '';
    } else {
        dateString = moment(data.startDate || data.endDate).format(dateFormat);
    }

    return (
        <div style={{
            padding: '20px',
            marginBottom: '20px',
            backgroundColor: '#FFFFFF',
            ...style,
        }}>
            <div style= {{
                display: 'flex',
                flexDirection: 'row',
                flexFlow: 'wrap',
            }}>
                {data.logoURL && <OptionalLinkWrapper href={data.website}><div style={{height: '100%', display:'flex', alignItems: 'baseline', marginRight: '1em'}}><img alt='' style={{maxHeight: '100%', maxWidth: '250px', width: logoWidth }} src={data.logoURL.startsWith('/') ? `${PUBLIC_URL}${data.logoURL}` : data.logoURL} /> </div></OptionalLinkWrapper>}
                <div
                    style={{
                        overflow: 'hidden',
                        maxWidth: '100%',
                        flexShrink: 1,
                        flexBasis: '180px',
                        flexGrow: 1,
                    }}
                >
                    <div style= {{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <OptionalLinkWrapper href={data.website}><h2 style={{margin: 0}}>{data.name}</h2></OptionalLinkWrapper>
                        {dateString && <div style={{marginTop: 'auto', marginLeft: '0.5em'}}>{dateString}</div>}
                    </div>
                    {data.bullets && <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>{data.bullets.map(bullet => <li key={bullet}><ReactMarkdown remarkPlugins={[gfm]} >{bullet}</ReactMarkdown></li>)}</ul>}
                </div>
            </div>
        </div>);
};
