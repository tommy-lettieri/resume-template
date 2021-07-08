import React from 'react';
import _ from 'lodash';
import { EmploymentCard, Employment } from './EmploymentCard';

export interface EmploymentPageProps {
  style?: React.CSSProperties;
  dateFormat?: string;
  employments: Employment[];
  logoWidth?: number;
}

/**
 * Primary UI component for user interaction
 */
export const EmploymentPage = ({
  dateFormat = 'MMMM yyyy',
  employments,
  style,
  logoWidth,
}: EmploymentPageProps) => {
  if (_.isEmpty(employments)) {
    return <div
      className="zrt-employment-root"
      style={{
        ...style,
      }}
    ></div>
  }

  return (
    <div
      className="zrt-employment-root"
      style={{
        ...style,
        marginBottom:'20px'
      }}
    >
      <h1>Employment</h1>
      {employments.map((employment) => <EmploymentCard key={employment.name} logoWidth={logoWidth} dateFormat={dateFormat} employment={employment} />)}
    </div>
  );
};
