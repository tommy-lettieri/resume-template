import React, { createContext, useState, useContext, useEffect } from 'react';
import { EducationPage, EducationPageProps } from '../EducationPage';
import { getEducationData } from '../../utilities/ResumeTemplatesAxios';
import { UseStateType } from '../../utilities/ReactTypes';

export const EducationContext = createContext<UseStateType<EducationPageProps | null | undefined> | null>(null);

// export const BlankEmploymentProvider: React.FC = ({
//     children
// }) => {
//   const value = useState<EmploymentPageProps | null | undefined>(undefined);
//   return <EmploymentContext.Provider value={value}>{children}</EmploymentContext.Provider>
// }

export const EducationAPIProvider: React.FC = ({
    children
}) => {
    const value = useState<EducationPageProps | null | undefined>(undefined);
    useEffect(() => {
        (async () => {
            try {
                const result = await getEducationData();
                value[1](result.data);
            } catch (e) {
                console.error('getEmploymentData', e);
                value[1](null);
            }
        })();
    // This useEffect is specifically meant to run when the component is mounted, I do not want value in deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <EducationContext.Provider value={value}>{children}</EducationContext.Provider>;
};

export const useEmployment = () => useContext(EducationContext);


export const EducationPageContextWrapper = () => {
    return <EducationContext.Consumer>
        {(stateTuple) => {
            if (stateTuple === null) {
                return <p>Not Initialized</p>;
            } else if (stateTuple[0] === null) {
                return <p>THIS IS NULL</p>;
            } else if (stateTuple[0] === undefined) {
                return <p>THIS IS UNDEFINED</p>;
            }
            return <EducationPage 
                {...stateTuple[0]}
            />;
        }}
    </EducationContext.Consumer>;
};

export const EducationAPIWrapper = () => {
    return <EducationAPIProvider>
        <EducationPageContextWrapper />
    </EducationAPIProvider>;
};
