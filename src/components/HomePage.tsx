import React from 'react';

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
                { missionStatement &&
        <h4 className="zrt-mission-statement">
            {missionStatement}
        </h4>}
            </div>
        </div>
    );
};
