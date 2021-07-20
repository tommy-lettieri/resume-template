import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { PUBLIC_URL } from '../environment';
import moment from 'moment';
import _ from 'lodash';

export const axiosInstance = axios.create({
    baseURL: PUBLIC_URL,
    timeout: 60000
});

export const getBuildTime = (): Promise<AxiosResponse<string>> => axiosInstance.get('/buildTime.txt');
// Want to add a resume version... but this is a module
// TODO Maybe I could use a version context...

interface BuildTimeProps {
    buildTime: string | null | undefined;
    shortThreshold?: number | null;
}
const BuildTime = ({ buildTime, shortThreshold }: BuildTimeProps) => {
    const [format, setFormat] = useState<'LLLL' | 'M/D/YY'>('LLLL');

    useEffect(() => {
        const resizeHandler = _.throttle(() => {
            if (shortThreshold && window.innerWidth < shortThreshold) {
                setFormat('M/D/YY');
            } else {
                setFormat('LLLL');
            }
        }, 1000, {
            leading: true,
            trailing: true,
        });
        resizeHandler();
        if (!shortThreshold) return;
        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, [shortThreshold]);

    let message: string;
    if (buildTime === null) {
        message = 'Loading last updated...';
    } else if (buildTime === undefined) {
        message = 'Failed to fetch last updated.';
    } else {
        message = `Last updated: ${moment(buildTime).format(format)}`;
    }
    return <div style={{
        float: 'right'
    }}>{message}</div>;
};

interface VersionProps {
    version: string | null;
}
const Version = ({ version}: VersionProps) => {
    if (!version) return null;
    return <div style={{
        float: 'left'
    }}>Version: {version}</div>;
};

interface FooterProps {
    buildTime: string | null | undefined;
    version?: string;
}
export const Footer = ({ buildTime, version: versionProp }: FooterProps) => {
    // The reason for using an environment variable here is so that it can passed in from the build
    // That way you can use git describe -- which makes it easier to differentiate versions on stage
    const version = versionProp ?? process.env.REACT_APP_RESUME_VERSION ?? process.env.STORYBOOK_RESUME_VERSION ?? null;
    return <div style ={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        padding: '20px',
        backgroundColor: '#333',
        color: '#FFF',
    }}>
        <Version version={version} />
        <BuildTime buildTime={buildTime} shortThreshold={version ? 500 : 375 } />
    </div>;
};

export const FooterAPIWrapper = () => {
    const [buildTime, setBuildTime] = useState<string | null | undefined>(null);
    useEffect(() => {
        (async () => {
            try {
                const resp = await getBuildTime();
                const buildMoment = moment(resp.data);
                if (buildMoment.isValid()) {
                    setBuildTime(resp.data);
                } else {
                    throw new Error(`Invalid date: ${resp.data}`);
                }
            } catch (e) {
                console.error('Failed to fetch build time', e);
                setBuildTime(undefined);
            }
        })();
    }, []);

    return <Footer buildTime={buildTime} />;
};
