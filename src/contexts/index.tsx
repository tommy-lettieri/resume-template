import { createContext } from 'react';
import { GenericPageCommons } from '../components/GenericPage';
import { EducationPageProps, School } from '../DataTypes';
import { UseStateType } from '../utilities/ReactTypes';

export const ProjectsContext = createContext<UseStateType<GenericPageCommons | null | undefined> | null>(null);
export const SkillsContext = createContext<UseStateType<GenericPageCommons | null | undefined> | null>(null);
export const AchievementsContext = createContext<UseStateType<GenericPageCommons | null | undefined> | null>(null);
export const EmploymentContext = createContext<UseStateType<GenericPageCommons | null | undefined> | null>(null);
export const EducationContext = createContext<UseStateType<GenericPageCommons<School, EducationPageProps> | null | undefined> | null>(null);
