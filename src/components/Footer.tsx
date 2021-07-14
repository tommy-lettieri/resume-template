import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { PUBLIC_URL } from '../environment';
import moment from 'moment';

export const axiosInstance = axios.create({
    baseURL: PUBLIC_URL,
    timeout: 60000
});

export const getBuildTime = (): Promise<AxiosResponse<string>> => axiosInstance.get('/buildTime.txt');
// Want to add a resume version... but this is a module
// TODO Maybe I could use a version context...

interface BuildTimeProps {
    buildTime: string | null | undefined;
}
const BuildTime = ({ buildTime }: BuildTimeProps) => {
    let message: string;
    if (buildTime === null) {
        message = 'Loading last updated...';
    } else if (buildTime === undefined) {
        message = 'Failed to fetch last updated.';
    } else {
        message = `Last updated: ${buildTime}`;
    }
    return <div style={{
        float: 'right'
    }}>{message}</div>;
};

export const Footer = () => {
    const [buildTime, setBuildTime] = useState<string | null | undefined>(null);
    useEffect(() => {
        (async () => {
            try {
                const resp = await getBuildTime();
                const buildMoment = moment(resp.data);
                if (buildMoment.isValid()) {
                    setBuildTime(buildMoment.format('LLLL'));
                } else {
                    throw new Error(`Invalid date: ${resp.data}`);
                }
            } catch (e) {
                console.error('Failed to fetch build time', e);
                setBuildTime(undefined);
            }
        })();
    }, []);
    return <div style ={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        padding: '20px',
        backgroundColor: '#333',
        color: '#FFF',
    }}>
        <BuildTime buildTime={buildTime} />
    </div>;
};
