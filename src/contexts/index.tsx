import { createContext } from 'react';
import { GenericPageProps } from '../components/GenericPage';
import { UseStateType } from '../utilities/ReactTypes';

type DataContextType = Omit<GenericPageProps, 'pageName'>;
export const ProjectsContext = createContext<UseStateType<DataContextType | null | undefined> | null>(null);
export const SkillsContext = createContext<UseStateType<DataContextType | null | undefined> | null>(null);
export const AchievementsContext = createContext<UseStateType<DataContextType | null | undefined> | null>(null);
export const EmploymentContext = createContext<UseStateType<DataContextType | null | undefined> | null>(null);
