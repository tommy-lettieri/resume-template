import React from 'react';
import _ from 'lodash';

export interface ContactPageProps {
    iframeWidth?: number;
    iframeHeight?: number;
    iframeSrc?: string;
    style?: React.CSSProperties;
    backgroundColor?: string;
}
export const ContactPage = ({
    iframeWidth = 640,
    // You should give some buffer so that mobile does not have a double scroll bar
    iframeHeight = 1000,
    iframeSrc,
    style,
    backgroundColor,
}: ContactPageProps) => {
    const propStyles = _.omitBy({
        backgroundColor: backgroundColor,
    }, _.isUndefined);

    const rootStyle = {
        ...style,
        ...propStyles,
    };

    return <div
        id="zrt-page-contact"
        className="zrt-page zrt-page-contact"
        style={rootStyle}
    >
        <h1>Contact me</h1>
        {/* <a href={src}>Form Link</a> */}
        <iframe
            title="contact"
            style={{
                maxWidth: '100%',
            }}
            src={iframeSrc}
            width={iframeWidth}
            height={iframeHeight}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
        >
            Loading...
        </iframe>
    </div>;
};