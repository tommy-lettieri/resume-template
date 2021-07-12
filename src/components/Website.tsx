import React from 'react';
import { EducationAPIWrapper } from './context-wrappers/EducationContext';
import { HomeAPIWrapper } from './context-wrappers/HomePageContextWrapper';
import { GenericAPIWrapper } from './context-wrappers/GenericPageContextWrapper';
import { ProjectsContext, SkillsContext, AchievementsContext, EmploymentContext } from '../contexts';

export interface WebsiteProps {
    style?: React.CSSProperties;
}

export const Website = ({
    style
}: WebsiteProps) => {
    return <div style = {{
        backgroundColor: '#EEEEEE',
        ...style
    }}>
        <HomeAPIWrapper />
        <div style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '1140px',
            padding: '20px',
        }} className="zrt-website">
            <GenericAPIWrapper DataContext={SkillsContext} name='skills' />
            <GenericAPIWrapper DataContext={EmploymentContext} name='employment' />
            <EducationAPIWrapper />
            <GenericAPIWrapper DataContext={AchievementsContext} name='achievements' />
            <GenericAPIWrapper DataContext={ProjectsContext} name='projects' />
        </div>
    </div>;
};
