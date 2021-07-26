export * from './components/pages/GenericPage';
export * from './components/pages/HomePage';
export * from './components/pages/SkillsPage';

export * from './components/Footer';
export * from './components/GenericCard';
export * from './components/SkillsGraphCard';
export * from './components/OptionalLinkWrapper';
export * from './components/Website';

declare global {
    interface Window {
        RESUME_VERSION?: string;
    }
}