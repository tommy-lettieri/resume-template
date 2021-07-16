import React from 'react';

export interface ContactPageProps {
    iframeWidth?: number;
    iframeHeight?: number;
    iframeSrc?: string;
}
export const ContactPage = ({
    iframeWidth = 640,
    // You should give some buffer so that mobile does not have a double scroll bar
    iframeHeight = 1000,
    iframeSrc
}: ContactPageProps) => {
    return <div
        id="zrt-page-contact"
    >
        <h1>Contact</h1>
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