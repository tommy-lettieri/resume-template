import React, { createContext, useState, useContext, useEffect } from 'react';
import { HomePage, HomePageProps } from '../HomePage';
import { getHomeData } from '../../utilities/ResumeTemplatesAxios';
import { UseStateType } from '../../utilities/ReactTypes';

export const HomeContext = createContext<UseStateType<HomePageProps | null | undefined> | null>(null);

// export const BlankHomeProvider: React.FC = ({
//     children
// }) => {
//   const value = useState<HomePageProps | null | undefined>(undefined);
//   return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>
// }

export const HomeAPIProvider: React.FC = ({
    children
}) => {
    const value = useState<HomePageProps | null | undefined>(null);
    useEffect(() => {
        (async () => {
            try {
                const result = await getHomeData();
                value[1](result.data);
            } catch (e) {
                console.error('getHomeData', e);
                value[1](undefined);
            }
        })();
    // This useEffect is specifically meant to run when the component is mounted, I do not want value in deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export const useHome = () => useContext(HomeContext);


export const HomePageContextWrapper = () => {
    return <HomeContext.Consumer>
        {(stateTuple) => {
            if (stateTuple === null) {
                return <p>Application error: Not Initialized</p>;
            } else if (stateTuple[0] === null) {
                return <p>Loading home data...</p>;
            } else if (stateTuple[0] === undefined) {
                return <p>Could not fetch home data.</p>;
            }
            
            return <HomePage 
                {...stateTuple[0]}
            />;
        }}
    </HomeContext.Consumer>;
};

export const HomeAPIWrapper = () => {
    return <HomeAPIProvider>
        <HomePageContextWrapper />
    </HomeAPIProvider>;
};
