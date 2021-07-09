import React, { createContext, useState, useContext, useEffect } from 'react'
import { GenericPage, GenericPageProps } from '../GenericPage';
import { getData } from '../../utilities/ResumeTemplatesAxios';
import { UseStateType } from '../../utilities/ReactTypes';

type DataContextType = Omit<GenericPageProps, 'pageName'>;
interface GenericConsumerProps {
    name: string;
    DataContext: React.Context<UseStateType<DataContextType | null | undefined> | null>;
}

interface GenericProviderProps extends GenericConsumerProps {
    children: React.ReactNode;
}

export const GenericAPIProvider = ({
    name,
    DataContext,
    children
}: GenericProviderProps) => {
  const value = useState<DataContextType | null | undefined>(undefined);
  useEffect(() => {
      (async () => {
        try {
            const result = await getData<DataContextType>(name);
            value[1](result.data);
        } catch (e) {
            console.error('getGenericData', e);
            value[1](null);
        }
      })();
  }, []);
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export const useGeneric = (DataContext: React.Context<UseStateType<DataContextType | null | undefined> | null>) => useContext(DataContext);


export const GenericPageContextWrapper = ({
    DataContext,
    name
}: GenericConsumerProps) => {
    return <DataContext.Consumer>
        {(stateTuple) => {
            if (stateTuple === null) {
                return <p>Not Initialized</p>;
            } else if (stateTuple[0] === null) {
                return <p>THIS IS NULL</p>
            } else if (stateTuple[0] === undefined) {
                return <p>THIS IS UNDEFINED</p>
            }
            return <GenericPage 
                pageName={name}
                {...stateTuple[0]}
            />;
        }}
    </DataContext.Consumer>
};

export const GenericAPIWrapper = (props: GenericConsumerProps) => {
    return <GenericAPIProvider {...props}>
        <GenericPageContextWrapper  {...props}/>
    </GenericAPIProvider>;
};
