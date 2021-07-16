import React from 'react';
import _ from 'lodash';
import { GenericCard, GenericCardData } from './GenericCard';

export interface GenericPageCustomizations {
    style?: React.CSSProperties;
    backgroundColor?: string;
    dateFormat?: string;
    logoWidth?: number;
}

export interface GenericPageSpecifics {
    pageName: string;
}

export type GenericPageCommons<DataType extends GenericCardData = GenericCardData, AdditionalPropsType = never> = GenericPageCustomizations & {
  dataArray: DataType[];
  additionalProps: AdditionalPropsType;
}

export type GenericPageProps<DataType extends GenericCardData = GenericCardData, AdditionalPropsType = never> = GenericPageCommons<DataType, AdditionalPropsType> & GenericPageSpecifics;

/**
 * Primary UI component for user interaction
 */
export const GenericPage = <DataType extends GenericCardData = GenericCardData, AdditionalPropsType = never>({
    dateFormat = 'MMMM yyyy',
    dataArray,
    style,
    backgroundColor = '#EEEEEE',
    logoWidth,
    pageName,
}: GenericPageProps<DataType, AdditionalPropsType>) => {
    const rootStyle = {
        ...style,
        marginBottom:'20px',
        backgroundColor: backgroundColor,
        padding: '20px',
    };
    if (_.isEmpty(dataArray)) {
        return <div
            className="zrt-generic-root"
            style={rootStyle}
        ></div>;
    }

    return (
        <div
            className="zrt-generic-root"
            id={`zrt-page-${pageName}`}
            style={rootStyle}
        >
            <h1>{_.capitalize(pageName)}</h1>
            {dataArray.map((data) => <GenericCard key={data.name} logoWidth={logoWidth} dateFormat={dateFormat} data={data} />)}
        </div>
    );
};
