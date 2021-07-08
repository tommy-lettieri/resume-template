import axios from 'axios';
export const resumeTemplatesAxios = axios.create({
    baseURL: '/resume-template-files',
    timeout: 60000
});

export const getEducationData = () => resumeTemplatesAxios.get('/education.json');
export const getEmploymentData = () => resumeTemplatesAxios.get('/employment.json');
export const getHomeData = () => resumeTemplatesAxios.get('/home.json');
export const getPrivateData = () => resumeTemplatesAxios.get('/private.json');
