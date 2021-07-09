import React from 'react';
import { EducationAPIWrapper } from './context-wrappers/EducationContext';
import { EmploymentAPIWrapper } from './context-wrappers/EmploymentPageContextWrapper';
import { HomeAPIWrapper } from './context-wrappers/HomePageContextWrapper';
import { GenericAPIWrapper } from './context-wrappers/GenericPageContextWrapper';
import { ProjectsContext, SkillsContext, AchievementsContext } from '../contexts';

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
            <GenericAPIWrapper DataContext={SkillsContext} name='skills' />
            <EmploymentAPIWrapper />
            <EducationAPIWrapper />
            <GenericAPIWrapper DataContext={AchievementsContext} name='achievements' />
            <GenericAPIWrapper DataContext={ProjectsContext} name='projects' />
        </div>
    </div>
}