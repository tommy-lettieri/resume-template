import { createContext } from 'react';
import { GenericPageCommons } from '../components/pages/GenericPage';
import { EducationPageProps, School, Employment } from '../DataTypes';
import { UseStateType } from '../utilities/ReactTypes';

export const ProjectsContext = createContext<UseStateType<GenericPageCommons | null | undefined> | null>(null);
export const SkillsContext = createContext<UseStateType<GenericPageCommons | null | undefined> | null>(null);
export const AchievementsContext = createContext<UseStateType<GenericPageCommons | null | undefined> | null>(null);
export const EmploymentContext = createContext<UseStateType<GenericPageCommons<Employment> | null | undefined> | null>(null);
export const EducationContext = createContext<UseStateType<GenericPageCommons<School, EducationPageProps> | null | undefined> | null>(null);
