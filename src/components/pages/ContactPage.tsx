import React from 'react';

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
    backgroundColor = '#EEEEEE',
}: ContactPageProps) => {
    return <div
        id="zrt-page-contact"
        style={{
            ...style,
            marginBottom:'20px',
            backgroundColor: backgroundColor,
            padding: '20px',    
        }}
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