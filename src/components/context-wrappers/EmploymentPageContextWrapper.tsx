import React, { createContext, useState, useContext, useEffect } from 'react'
import _ from 'lodash';
import { EmploymentPage } from '../EmploymentPage';
import { getEmploymentData } from '../../utilities/ResumeTemplatesAxios';
{/* <S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>] */}
type UseStateType<T> = [T, React.Dispatch<React.SetStateAction<T>>];
export const EmploymentContext = createContext<UseStateType<EmploymentPageProps | null | undefined> | null>(null);

/* ***** ***** \/ TODO remove copied code \/ ***** ***** */
export interface Employment {
    startDate?: Date;
    endDate?: Date | null;
    logoURL?: string;
    website?: string;
    name: string;
    namedBlurbs?: {
        [key: string]: string;
    }
}

interface EmploymentPageProps {
    style?: React.CSSProperties;
    dateFormat?: string;
    employments: Employment[];
    logoWidth?: number;
  }  
/* ***** ***** /\ TODO remove copied code /\ ***** ***** */
export const EmploymentProvider: React.FC = ({
    children
}) => {
  const value = useState<EmploymentPageProps | null | undefined>(undefined);
  return <EmploymentContext.Provider value={value}>{children}</EmploymentContext.Provider>
}

export const EmploymentAPIProvider: React.FC = ({
    children
}) => {
  const value = useState<EmploymentPageProps | null | undefined>(undefined);
  useEffect(() => {
      (async () => {
        try {
            const result = await getEmploymentData();
            const { data } = result;
            // data.employments.forEach((employment: any) => {
            //     employment.startDate = new Date(employment.startDate);
            //     employment.endDate = new Date(employment.endDate);
            // });
            value[1](data);
        } catch (e) {
            console.error('getEmploymentData', e);
        }
      })();
  }, []);
  return <EmploymentContext.Provider value={value}>{children}</EmploymentContext.Provider>
}

export const useEmployment = () => useContext(EmploymentContext);


export const EmploymentPageContextWrapper = () => {
    return <EmploymentContext.Consumer>
        {(stateTuple) => {
            if (stateTuple === null) {
                return <p>Not Initialized</p>;
            } else if (stateTuple[0] === null) {
                return <p>THIS IS NULL</p>
            } else if (stateTuple[0] === undefined) {
                return <p>THIS IS UNDEFINED</p>
            }
            return <EmploymentPage 
                {...stateTuple[0]}
            />;
        }}
    </EmploymentContext.Consumer>
};


export const EmploymentAPIWrapper = () => {
    return <EmploymentAPIProvider>
        <EmploymentPageContextWrapper />
    </EmploymentAPIProvider>;
};