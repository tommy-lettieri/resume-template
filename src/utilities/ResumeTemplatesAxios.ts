import axios, { AxiosResponse } from 'axios';
import { IEducation, IEmployment, IHome } from '@z87/resume-template-cli';

export const resumeTemplatesAxios = axios.create({
    baseURL: '/resume-template-files',
    timeout: 60000
});

export const getEducationData = (): Promise<AxiosResponse<IEducation>> => resumeTemplatesAxios.get('/education.json');
export const getEmploymentData = (): Promise<AxiosResponse<IEmployment>> => resumeTemplatesAxios.get('/employment.json');
export const getHomeData = (): Promise<AxiosResponse<IHome>> => resumeTemplatesAxios.get('/home.json');
export const getPrivateData = (): Promise<AxiosResponse<unknown>> => resumeTemplatesAxios.get('/private.json');
