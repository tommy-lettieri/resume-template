import React from 'react';
import _ from 'lodash';
import { SchoolCard, School } from './SchoolCard';

export interface EducationPageProps {
  style?: React.CSSProperties;
  dateFormat?: string;
  schools: School[];
  gpaPrecision?: number;
  logoWidth?: number;
}

/**
 * Primary UI component for user interaction
 */
export const EducationPage = ({
  dateFormat = 'MMMM yyyy',
  schools,
  style,
  gpaPrecision = 2,
  logoWidth,
}: EducationPageProps) => {
  if (_.isEmpty(schools)) {
    return <div
      className="zrt-education-root"
      style={{
        ...style,
        // display: 'flex',
      }}
    ></div>
  }

  return (
    <div
      className="zrt-education-root"
      style={{
        ...style,
        marginBottom:'20px'
      }}
    >
      <h1>Education</h1>
      {schools.map((school) => <SchoolCard logoWidth={logoWidth} gpaPrecision={gpaPrecision} key={school.name} dateFormat={dateFormat} school={school} />)}
    </div>
  );
};
