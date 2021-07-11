import React, { createContext, useState, useContext, useEffect } from 'react';
import { EmploymentPage, EmploymentPageProps } from '../EmploymentPage';
import { getEmploymentData } from '../../utilities/ResumeTemplatesAxios';
import { UseStateType } from '../../utilities/ReactTypes';

export const EmploymentContext = createContext<UseStateType<EmploymentPageProps | null | undefined> | null>(null);

// export const BlankEmploymentProvider: React.FC = ({
//     children
// }) => {
//   const value = useState<EmploymentPageProps | null | undefined>(undefined);
//   return <EmploymentContext.Provider value={value}>{children}</EmploymentContext.Provider>
// }

export const EmploymentAPIProvider: React.FC = ({
    children
}) => {
    const value = useState<EmploymentPageProps | null | undefined>(undefined);
    useEffect(() => {
        (async () => {
            try {
                const result = await getEmploymentData();
                value[1](result.data);
            } catch (e) {
                console.error('getEmploymentData', e);
                value[1](null);
            }
        })();
    // This useEffect is specifically meant to run when the component is mounted, I do not want value in deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <EmploymentContext.Provider value={value}>{children}</EmploymentContext.Provider>;
};

export const useEmployment = () => useContext(EmploymentContext);


export const EmploymentPageContextWrapper = () => {
    return <EmploymentContext.Consumer>
        {(stateTuple) => {
            if (stateTuple === null) {
                return <p>Not Initialized</p>;
            } else if (stateTuple[0] === null) {
                return <p>THIS IS NULL</p>;
            } else if (stateTuple[0] === undefined) {
                return <p>THIS IS UNDEFINED</p>;
            }
            return <EmploymentPage 
                {...stateTuple[0]}
            />;
        }}
    </EmploymentContext.Consumer>;
};

export const EmploymentAPIWrapper = () => {
    return <EmploymentAPIProvider>
        <EmploymentPageContextWrapper />
    </EmploymentAPIProvider>;
};
