import React from 'react';
import { resolveUrl } from '../utilities/ReactUtils';

export interface HomePageProps {
    /**
     * The name of the person this resume website belongs to
     */
    name: string;
    title?: string;
    missionStatement?: string;
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
    style = { height: '100vh' },
    backgroundImageURL,
    backgroundColor = '#CCCCCC',
    missionStatement,
    title,
    links,
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
            className="zrt-home-root"
            id="zrt-page-home"
            style={{
                ...style,
                ...propStyles,
                display: 'flex',
            }}
        >
            <div
                className="zrt-home-content"
                style={{
                    margin: 'auto',
                    textAlign: 'center',
                    maxWidth: '75%'
                }}
            >
                <h1 className="zrt-name">
                    {name}
                </h1>
                {title && <h3>{title}</h3>}
                {missionStatement &&
                    <h4 className="zrt-mission-statement">
                        {missionStatement}
                    </h4>
                }
                {links && <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {links.map(link => <a key={link.name} title={link.name} href={link.url} target="_blank" rel="noreferrer"><img src={resolveUrl(link.logoURL)} alt={link.name} style={{ maxHeight: '32px', padding: '10px' }} /></a>)}
                </div>}
            </div>
        </div>
    );
};
