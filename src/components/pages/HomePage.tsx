import React from 'react';
import { resolveUrl } from '../../utilities/ReactUtils';
import './HomePage.css';

export interface HomePageProps {
    /**
     * The name of the person this resume website belongs to
     */
    name: string;
    title?: string;
    missionStatement?: string;
    professionalSummary?: string;
    style?: React.CSSProperties;
    backgroundImageURL?: string;
    backgroundColor?: string;
    links?: {
        name: string;
        logoURL: string;
        url: string;
    }[];
}

/**
 * Primary UI component for user interaction
 */
export const HomePage = ({
    name,
    style,
    backgroundImageURL,
    backgroundColor,
    missionStatement,
    title,
    links,
    professionalSummary,
}: HomePageProps) => {
    const propStyles: React.CSSProperties = {};
    if (backgroundImageURL) {
        propStyles.backgroundImage = `URL(${backgroundImageURL})`;
    }

    if (backgroundColor) {
        propStyles.backgroundColor = backgroundColor;
    }

    return (
        <div
            className="zrt-page-home"
            id="zrt-page-home"
            style={{
                ...style,
                ...propStyles,
                // This style remains here to avoid overwriting
                display: 'flex',
            }}
        >
            <div className="zrt-home-content">
                <h1 className="zrt-home-name">{name}</h1>
                {title && <h2>{title}</h2>}
                {professionalSummary &&
                <h3 className="zrt-home-mission-statement">{professionalSummary}</h3>}
                {missionStatement &&
                <h3 className="zrt-home-mission-statement">{missionStatement}</h3>}
                {links && <div className="zrt-home-links-container">
                    {links.map(link => <a key={link.name} className="zrt-home-link" title={link.name} href={link.url} target="_blank" rel="noreferrer"><img src={resolveUrl(link.logoURL)} alt={link.name} /></a>)}
                </div>}
            </div>
        </div>
    );
};
