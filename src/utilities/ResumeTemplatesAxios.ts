import axios, { AxiosResponse } from 'axios';
import { IEducation, IEmployment, IHome } from '@z87/resume-template-cli';
import { PUBLIC_URL } from '../environment';

export const resumeTemplatesAxios = axios.create({
    baseURL: `${PUBLIC_URL}/resume-template-files`,
    timeout: 60000
});

export const getHomeData = (): Promise<AxiosResponse<IHome>> => resumeTemplatesAxios.get('/home.json');
// TODO type response
export const getContactData = (): Promise<AxiosResponse<any>> => resumeTemplatesAxios.get('/contact.json');

export const getEducationData = (): Promise<AxiosResponse<IEducation>> => resumeTemplatesAxios.get('/education.json');
export const getEmploymentData = (): Promise<AxiosResponse<IEmployment>> => resumeTemplatesAxios.get('/employment.json');
export const getPrivateData = (): Promise<AxiosResponse<unknown>> => resumeTemplatesAxios.get('/private.json');


export const getData = <T>(name: string): Promise<AxiosResponse<T>> => resumeTemplatesAxios.get(`/${name}.json`);