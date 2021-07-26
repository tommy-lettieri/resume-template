import React from 'react';
import { HomeAPIWrapper } from './context-wrappers/HomePageContextWrapper';
import { SkillsAPIWrapper } from './context-wrappers/SkillsPageContextWrapper';
import { ContactAPIWrapper } from './context-wrappers/ContactPageContextWrapper';
import { GenericAPIWrapper } from './context-wrappers/GenericPageContextWrapper';
import { ProjectsContext, AchievementsContext, EmploymentContext, EducationContext } from '../contexts';
import { educationDataTransformer, employmentDataTransformer } from '../DataTypes';
import { FooterAPIWrapper } from './Footer';
import { Header } from './Header';
import './website.css';

export interface WebsiteProps {
    style?: React.CSSProperties;
}

export const Website = ({
    style
}: WebsiteProps) => {
    return <div className='zrt-website' style = {style}>
        <Header />
        <HomeAPIWrapper />
        <div style={{
        }} className="zrt-website-content">
            <GenericAPIWrapper DataContext={EmploymentContext} name='employment' dataArrayTransformer={employmentDataTransformer} />
            <GenericAPIWrapper DataContext={EducationContext} name='education' dataArrayTransformer={educationDataTransformer} />
            <SkillsAPIWrapper />
            <GenericAPIWrapper DataContext={AchievementsContext} name='achievements' />
            <GenericAPIWrapper DataContext={ProjectsContext} name='projects' />
            <ContactAPIWrapper />
        </div>
        <FooterAPIWrapper />
    </div>;
};
