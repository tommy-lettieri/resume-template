import React from 'react';
import _ from 'lodash';
import { GenericCard, GenericCardData } from './GenericCard';

export interface GenericPageProps {
  style?: React.CSSProperties;
  dateFormat?: string;
  dataArray: GenericCardData[];
  logoWidth?: number;
  pageName: string;
}

/**
 * Primary UI component for user interaction
 */
export const GenericPage = ({
  dateFormat = 'MMMM yyyy',
  dataArray,
  style,
  logoWidth,
  pageName,
}: GenericPageProps) => {
  if (_.isEmpty(dataArray)) {
    return <div
      className="zrt-generic-root"
      style={{
        ...style,
      }}
    ></div>
  }

  return (
    <div
      className="zrt-generic-root"
      style={{
        ...style,
        marginBottom:'20px'
      }}
    >
      <h1>{_.capitalize(pageName)}</h1>
      {dataArray.map((data) => <GenericCard key={data.name} logoWidth={logoWidth} dateFormat={dateFormat} data={data} />)}
    </div>
  );
};
