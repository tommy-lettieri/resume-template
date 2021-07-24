import React, { createContext, useState, useContext, useEffect } from 'react';
import { SkillsPage, SkillsPageProps } from '../pages/SkillsPage';
import { getSkillsData } from '../../utilities/ResumeTemplatesAxios';
import { UseStateType } from '../../utilities/ReactTypes';
import _ from 'lodash';

export const SkillsContext = createContext<UseStateType<SkillsPageProps | null | undefined> | null>(null);

// export const BlankSkillsProvider: React.FC = ({
//     children
// }) => {
//   const value = useState<SkillsPageProps | null | undefined>(undefined);
//   return <SkillsContext.Provider value={value}>{children}</SkillsContext.Provider>
// }

export const SkillsAPIProvider: React.FC = ({
    children
}) => {
    const value = useState<SkillsPageProps | null | undefined>(null);
    useEffect(() => {
        (async () => {
            try {
                const result = await getSkillsData();
                value[1](result.data);
            } catch (e) {
                console.error('getSkillsData', e);
                value[1](undefined);
            }
        })();
    // This useEffect is specifically meant to run when the component is mounted, I do not want value in deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <SkillsContext.Provider value={value}>{children}</SkillsContext.Provider>;
};

export const useSkills = () => useContext(SkillsContext);


export const SkillsPageContextWrapper = (propOverrides: Partial<SkillsPageProps>) => {
    return <SkillsContext.Consumer>
        {(stateTuple) => {
            if (stateTuple === null) {
                return <p>Application error: Not Initialized</p>;
            } else if (stateTuple[0] === null) {
                return <p>Loading home data...</p>;
            } else if (stateTuple[0] === undefined) {
                return <p>Could not fetch home data.</p>;
            }
            
            return <SkillsPage 
                {...stateTuple[0]}
                {..._.omitBy(propOverrides, _.isUndefined)}
            />;
        }}
    </SkillsContext.Consumer>;
};

export const SkillsAPIWrapper = (propOverrides: Partial<SkillsPageProps>) => {
    return <SkillsAPIProvider>
        <SkillsPageContextWrapper {...propOverrides} />
    </SkillsAPIProvider>;
};
