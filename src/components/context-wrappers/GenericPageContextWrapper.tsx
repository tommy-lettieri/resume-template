import React, { useState, useContext, useEffect } from 'react';
import { GenericPage, GenericPageCommons } from '../pages/GenericPage';
import { getData } from '../../utilities/ResumeTemplatesAxios';
import { UseStateType } from '../../utilities/ReactTypes';
import { GenericCardData } from '../GenericCard';

type DataContextType<DataType extends GenericCardData = GenericCardData, AdditionalPropsType = never> = GenericPageCommons<DataType, AdditionalPropsType>;
interface GenericConsumerProps<DataType extends GenericCardData = GenericCardData, AdditionalPropsType = never> {
    name: string;
    DataContext: React.Context<UseStateType<DataContextType<DataType, AdditionalPropsType> | null | undefined> | null>;
}

export type DataArrayTransformerType<DataType extends GenericCardData = GenericCardData, AdditionalPropsType = never> = (resp: GenericPageCommons<DataType, AdditionalPropsType>) => void;

interface GenericAPIWrapperProps<DataType extends GenericCardData, AdditionalPropsType = never> extends GenericConsumerProps<DataType, AdditionalPropsType> {
    dataArrayTransformer?: DataArrayTransformerType<DataType, AdditionalPropsType>;
}

interface GenericProviderProps<DataType extends GenericCardData = GenericCardData, AdditionalPropsType = never> extends GenericAPIWrapperProps<DataType, AdditionalPropsType> {
    children: React.ReactNode;
}


export const GenericAPIProvider = <DataType extends GenericCardData = GenericCardData, AdditionalPropsType = never>({
    name,
    DataContext,
    children,
    dataArrayTransformer
}: GenericProviderProps<DataType, AdditionalPropsType>) => {
    const value = useState<DataContextType<DataType, AdditionalPropsType> | null | undefined>(null);
    useEffect(() => {
        (async () => {
            try {
                const result = await getData<GenericPageCommons<DataType, AdditionalPropsType>>(name);
                await dataArrayTransformer?.(result.data);
                value[1](result.data);
            } catch (e) {
                console.error('getGenericData', e);
                value[1](undefined);
            }
        })();
    // This useEffect is specifically meant to run when the component is mounted, I do not want value in deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useGeneric = <DataType extends GenericCardData = GenericCardData, AdditionalPropsType = never>(DataContext: React.Context<UseStateType<DataContextType<DataType, AdditionalPropsType> | null | undefined> | null>) => useContext(DataContext);


export const GenericPageContextWrapper = <DataType extends GenericCardData = GenericCardData, AdditionalPropsType = never>({
    DataContext,
    name
}: GenericConsumerProps<DataType, AdditionalPropsType>) => {
    return <DataContext.Consumer>
        {(stateTuple) => {
            if (stateTuple === null) {
                return <p>Application error: Not Initialized</p>;
            } else if (stateTuple[0] === null) {
                return <p>Loading {name} data...</p>;
            } else if (stateTuple[0] === undefined) {
                return <p>Could not fetch {name} data.</p>;
            }
            return <GenericPage 
                pageName={name}
                {...stateTuple[0]}
            />;
        }}
    </DataContext.Consumer>;
};

export const GenericAPIWrapper = <DataType extends GenericCardData = GenericCardData, AdditionalPropsType = never>(props: GenericAPIWrapperProps<DataType, AdditionalPropsType>) => {
    const {
        dataArrayTransformer,
        ...contextProps
    } = props;
    return <GenericAPIProvider {...props}>
        <GenericPageContextWrapper  {...contextProps}/>
    </GenericAPIProvider>;
};
