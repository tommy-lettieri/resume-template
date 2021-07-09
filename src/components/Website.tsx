import React from 'react';
import { EducationAPIWrapper } from './context-wrappers/EducationContext';
import { EmploymentAPIWrapper } from './context-wrappers/EmploymentPageContextWrapper';
import { HomeAPIWrapper } from './context-wrappers/HomePageContextWrapper';

export interface WebsiteProps {
    style?: React.CSSProperties;
}

export const Website = ({
    style
}: WebsiteProps) => {
    return <div style = {{
        backgroundColor: '#EEEEEE',
        paddingBottom: '20px',
        ...style
    }}>
        <HomeAPIWrapper />
        <div style={{marginLeft: '25%', marginRight: '25%'}}>
            <EmploymentAPIWrapper />
            <EducationAPIWrapper />
        </div>
    </div>
}