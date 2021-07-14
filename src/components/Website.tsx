import React from 'react';
import _ from 'lodash';
import { HomeAPIWrapper } from './context-wrappers/HomePageContextWrapper';
import { GenericAPIWrapper } from './context-wrappers/GenericPageContextWrapper';
import { ProjectsContext, SkillsContext, AchievementsContext, EmploymentContext, EducationContext } from '../contexts';
import { educationDataTransformer } from '../DataTypes';

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
            <GenericAPIWrapper DataContext={EducationContext} name='education' dataArrayTransformer={educationDataTransformer} />
            <GenericAPIWrapper DataContext={AchievementsContext} name='achievements' />
            <GenericAPIWrapper DataContext={ProjectsContext} name='projects' />
        </div>
    </div>;
};
