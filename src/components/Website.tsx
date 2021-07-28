import React from 'react';
import { HomeAPIWrapper } from './context-wrappers/HomePageContextWrapper';
import { SkillsAPIWrapper } from './context-wrappers/SkillsPageContextWrapper';
import { ContactAPIWrapper } from './context-wrappers/ContactPageContextWrapper';
import { FooterAPIWrapper } from './Footer';
import { Header } from './Header';
import { EmploymentAPIWrapper, EducationAPIWrapper, AchievementsAPIWrapper, ProjectsAPIWrapper } from './context-wrappers/GenericPageInstancesContextWrappers';
import './Website.css';

export interface WebsiteProps {
    style?: React.CSSProperties;
}

export const Website = ({
    style
}: WebsiteProps) => {
    return <div className='zrt-website' style = {style}>
        <Header />
        <HomeAPIWrapper dummyHeader={<Header  dummy={true} />} dummyFooter={<FooterAPIWrapper dummy={true}/>}/>
        <div className="zrt-website-content">
            <EmploymentAPIWrapper />
            <EducationAPIWrapper />
            <SkillsAPIWrapper />
            <AchievementsAPIWrapper />
            <ProjectsAPIWrapper />
            <ContactAPIWrapper />
        </div>
        <FooterAPIWrapper />
    </div>;
};
