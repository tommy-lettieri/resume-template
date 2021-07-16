import React, { createContext, useState, useContext, useEffect } from 'react';
import { ContactPage, ContactPageProps } from '../ContactPage';
import { getContactData } from '../../utilities/ResumeTemplatesAxios';
import { UseStateType } from '../../utilities/ReactTypes';

export const ContactContext = createContext<UseStateType<ContactPageProps | null | undefined> | null>(null);

export const ContactAPIProvider: React.FC = ({
    children
}) => {
    const value = useState<ContactPageProps | null | undefined>(null);
    useEffect(() => {
        (async () => {
            try {
                const result = await getContactData();
                value[1](result.data);
            } catch (e) {
                console.error('getContactData', e);
                value[1](undefined);
            }
        })();
    // This useEffect is specifically meant to run when the component is mounted, I do not want value in deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
};

export const useContact = () => useContext(ContactContext);


export const ContactPageContextWrapper = () => {
    return <ContactContext.Consumer>
        {(stateTuple) => {
            if (stateTuple === null) {
                return <p>Application error: Not Initialized</p>;
            } else if (stateTuple[0] === null) {
                return <p>Loading home data...</p>;
            } else if (stateTuple[0] === undefined) {
                return <p>Could not fetch contact data.</p>;
            }
            
            return <ContactPage 
                {...stateTuple[0]}
            />;
        }}
    </ContactContext.Consumer>;
};

export const ContactAPIWrapper = () => {
    return <ContactAPIProvider>
        <ContactPageContextWrapper />
    </ContactAPIProvider>;
};
