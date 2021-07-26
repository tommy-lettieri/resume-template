import React from 'react';
import { GenericAPIWrapper } from './GenericPageContextWrapper';
import { ProjectsContext, AchievementsContext, EmploymentContext, EducationContext } from '../../contexts';
import { educationDataTransformer, employmentDataTransformer } from '../../DataTypes';

export const EmploymentAPIWrapper = () => <GenericAPIWrapper DataContext={EmploymentContext} name='employment' dataArrayTransformer={employmentDataTransformer} />;
export const EducationAPIWrapper = () => <GenericAPIWrapper DataContext={EducationContext} name='education' dataArrayTransformer={educationDataTransformer} />;
export const AchievementsAPIWrapper = () => <GenericAPIWrapper DataContext={AchievementsContext} name='achievements' />;
export const ProjectsAPIWrapper = () => <GenericAPIWrapper DataContext={ProjectsContext} name='projects' />;
