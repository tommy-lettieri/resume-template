import React from 'react';
import moment from 'moment';
import { OptionalLinkWrapper } from './OptionalLinkWrapper';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { resolveUrl } from '../utilities/ReactUtils';
import './GenericCard.css';

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
        <div className="zrt-generic-card" style={style}>
            <div className="zrt-generic-card-content">
                {data.logoURL && <OptionalLinkWrapper href={data.website}><div className="zrt-generic-card-img-container"><img alt='' style={{width: logoWidth}} src={resolveUrl(data.logoURL)} /> </div></OptionalLinkWrapper>}
                <div className="zrt-generic-card-content">
                    <div className="zrt-flex-row">
                        <OptionalLinkWrapper href={data.website}><h2 className="zrt-generic-card-name">{data.name}</h2></OptionalLinkWrapper>
                        {dateString && <div className="zrt-generic-card-date">{dateString}</div>}
                    </div>
                    {data.bullets && <ul className="zrt-generic-card-bullet">{data.bullets.map(bullet => <li key={bullet}><ReactMarkdown remarkPlugins={[gfm]} >{bullet}</ReactMarkdown></li>)}</ul>}
                </div>
            </div>
        </div>);
};
