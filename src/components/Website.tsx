import React from 'react';
import { HomeAPIWrapper } from './context-wrappers/HomePageContextWrapper';
import { ContactAPIWrapper } from './context-wrappers/ContactPageContextWrapper';
import { GenericAPIWrapper } from './context-wrappers/GenericPageContextWrapper';
import { ProjectsContext, SkillsContext, AchievementsContext, EmploymentContext, EducationContext } from '../contexts';
import { educationDataTransformer, employmentDataTransformer } from '../DataTypes';
import { FooterAPIWrapper } from './Footer';
import { Header } from './Header';
import { SkillsGraphCard } from './SkillsGraphCard';

export interface WebsiteProps {
    style?: React.CSSProperties;
}

export const Website = ({
    style
}: WebsiteProps) => {
    return <div style = {{
        backgroundColor: '#DDDDDD',
        ...style,
    }}>
        <Header />
        <HomeAPIWrapper />
        <div style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '1140px',
            padding: '20px',
            // To account for footer
            paddingBottom: '70px',
        }} className="zrt-website">
            <GenericAPIWrapper DataContext={EmploymentContext} name='employment' dataArrayTransformer={employmentDataTransformer} />
            <GenericAPIWrapper DataContext={EducationContext} name='education' dataArrayTransformer={educationDataTransformer} />
            <div style={{backgroundColor: '#EEEEEE', padding: '20px', marginBottom: '20px'}}>
                <h1>Skills</h1>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom:'20px', }}>
                    <SkillsGraphCard saturation={0.25} name={'Languages'} width={'540px'} />
                    <SkillsGraphCard saturation={0.25} name={'Databases'} width={'540px'} />
                    <SkillsGraphCard saturation={0.25} name={'Frameworks'} width={'540px'} />
                    <SkillsGraphCard saturation={0.25} name={'Mobile Platforms'} width={'540px'} />
                </div>
            </div>
            <GenericAPIWrapper DataContext={SkillsContext} name='skills' />
            <GenericAPIWrapper DataContext={AchievementsContext} name='achievements' />
            <GenericAPIWrapper DataContext={ProjectsContext} name='projects' />
            <ContactAPIWrapper />
        </div>
        <FooterAPIWrapper />
    </div>;
};
