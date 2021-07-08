import React from 'react';
import { EducationAPIWrapper } from './context-wrappers/EducationContext';
import { EmploymentAPIWrapper } from './context-wrappers/EmploymentPageContextWrapper';
import { HomeAPIWrapper } from './context-wrappers/HomePageContextWrapper';
export const Website = () => {
    return <>
        <HomeAPIWrapper />
        <div style={{marginLeft: '25%', marginRight: '25%'}}>
            <EmploymentAPIWrapper />
            <EducationAPIWrapper />
        </div>
    </>
}