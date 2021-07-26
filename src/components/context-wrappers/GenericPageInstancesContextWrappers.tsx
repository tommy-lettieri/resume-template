import React from 'react';
import { GenericAPIWrapper } from './GenericPageContextWrapper';
import { ProjectsContext, AchievementsContext, EmploymentContext, EducationContext } from '../../contexts';
import { educationDataTransformer, EducationPageProps, Employment, employmentDataTransformer, School } from '../../DataTypes';
import { GenericCardData } from '../GenericCard';
import { GenericPageCommons } from '../pages/GenericPage';

export const EmploymentAPIWrapper = (propOverrides?: Partial<GenericPageCommons<Employment>>) => <GenericAPIWrapper DataContext={EmploymentContext} name='employment' dataArrayTransformer={employmentDataTransformer} propOverrides={propOverrides} />;
export const EducationAPIWrapper = (propOverrides: Partial<GenericPageCommons<School, EducationPageProps>>) => <GenericAPIWrapper DataContext={EducationContext} name='education' dataArrayTransformer={educationDataTransformer} propOverrides={propOverrides} />;
export const AchievementsAPIWrapper = (propOverrides: Partial<GenericPageCommons<GenericCardData>>) => <GenericAPIWrapper DataContext={AchievementsContext} name='achievements' propOverrides={propOverrides} />;
export const ProjectsAPIWrapper = (propOverrides: Partial<GenericPageCommons<GenericCardData>>) => <GenericAPIWrapper DataContext={ProjectsContext} name='projects' propOverrides={propOverrides} />;
