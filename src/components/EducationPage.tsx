import React from 'react';
import _ from 'lodash';
import { SchoolCard, School } from './SchoolCard';

interface EducationProps {
  style?: React.CSSProperties;
  dateFormat?: string;
  schools: School[];
  gpaPrecision?: number;
}

/**
 * Primary UI component for user interaction
 */
export const EducationPage = ({
  dateFormat = 'MMMM yyyy',
  schools,
  style = { height: '100vh' },
  gpaPrecision = 2,
}: EducationProps) => {
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
        // display: 'flex',
      }}
    >
      {schools.map((school) => <SchoolCard gpaPrecision={gpaPrecision} key={school.name} dateFormat={dateFormat} school={school} />)}
    </div>
  );
};
