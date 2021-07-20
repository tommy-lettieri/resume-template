export * from './components/HomePage';
export * from './components/OptionalLinkWrapper';
export * from './components/Website';

declare global {
    interface Window {
        RESUME_VERSION?: string;
    }
}