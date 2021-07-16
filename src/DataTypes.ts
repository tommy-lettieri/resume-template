import _ from 'lodash';
import { DataArrayTransformerType } from './components/context-wrappers/GenericPageContextWrapper';
import { GenericCardData } from './components/GenericCard';

export interface School extends GenericCardData {
    gpa: number;
    major?: string;
    awards?: string;
}

export interface Employment extends GenericCardData {
    title?: string;
}

export type EducationPageProps = {
    gpaPrecision?: number;
} | undefined;

export const educationDataTransformer: DataArrayTransformerType<School, EducationPageProps> = (resp) => {
    const gpaPrecision = resp.additionalProps?.gpaPrecision ?? 2;
    resp.dataArray.forEach(school => {
        let awardsLine = '';
        if (school.awards) {
            awardsLine += school.awards;
            if (school.gpa) {
                awardsLine += ' with a ';
            }
        }
        if (school.gpa) {
            awardsLine += `cumulative GPA of ${school.gpa.toFixed(gpaPrecision)}`;
        }
        awardsLine = _.upperFirst(awardsLine);
    
        school.bullets = school.bullets ?? [];
        awardsLine && school.bullets.unshift(awardsLine);
        school.major && school.bullets.unshift(school.major);                
    });
};

export const employmentDataTransformer: DataArrayTransformerType<Employment> = (resp) => {
    resp.dataArray.forEach(employment => {
        if (!employment.title) {
            return;
        }

        employment.bullets = employment.bullets ?? [];
        employment.bullets.unshift(`### ${employment.title}`);
    });
};