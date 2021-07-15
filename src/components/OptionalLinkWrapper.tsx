import React from 'react';

interface OptionalLinkWrapperProps {
    href?: string;
    children: React.ReactNode;
}

export const OptionalLinkWrapper = ({
    href,
    children
}: OptionalLinkWrapperProps) => {
    if (href) {
        return <a href={href} style={{color: 'inherit'}} target='_blank' rel="noreferrer">{children}</a>;
    } else {
        return <>{children}</>;
    }
};