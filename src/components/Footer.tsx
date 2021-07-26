import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { PUBLIC_URL, RESUME_VERSION } from '../environment';
import moment from 'moment';
import _ from 'lodash';
import './Footer.css';

export const axiosInstance = axios.create({
    baseURL: PUBLIC_URL,
    timeout: 60000
});

export const getBuildTime = (): Promise<AxiosResponse<string>> => axiosInstance.get('/buildTime.txt');
export const getVersion = (): Promise<AxiosResponse<string>> => axiosInstance.get('/version.txt', {
    params: {
        cache_buster: new Date().getTime()
    }
});
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
    return <div className="footer-build-time">{message}</div>;
};

interface VersionCheckProps {
    version: string;
    interval?: number;
}

const VersionCheck = ({
    // Default interval - 1 hour
    interval = 3600000,
    version
}: VersionCheckProps) => {
    const [ lastVersion, setLastVersion ] = useState<string>(version);
    useEffect(() => {
        let running = true;
        let timeout: NodeJS.Timeout | null = null;
        const intervalHandler = async () => {
            if (!running) return;
            const versionResp = await getVersion();
            setLastVersion(versionResp.data);
            // This isn't true because cleanup function sets running to false
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (!running) return;
            timeout = setTimeout(intervalHandler, interval);
        };
        intervalHandler();

        return () => {
            running = false;
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
        };
    }, [interval]);

    if (lastVersion === version) {
        return null;
    }
    const onUpdateClick = () => {
        window.location.reload();
    };
    return <div className="footer-version-update-available" title="Please refresh your browser" onClick={onUpdateClick} onKeyDown={onUpdateClick} role="button" tabIndex={-1}>
        Update Available
    </div>;
};

interface VersionProps {
    version: string | null;
    useCacheCheck?: boolean;
}
const Version = ({ version, useCacheCheck = true }: VersionProps) => {
    if (!version) return null;
    return <div className="footer-version">
        Version: {version}
        {useCacheCheck && <VersionCheck version={version} />}
    </div>;
};

interface FooterProps {
    buildTime: string | null | undefined;
    version?: string;
}
export const Footer = ({ buildTime, version: versionProp }: FooterProps) => {
    // Use a prop if passed
    // Otherwise check if the version was attached to the window
    // If that's not the case check if it was part of the react build process (env variable)
    // For testing check storybook env variable next
    const version = versionProp ?? RESUME_VERSION;
    return <div className="footer">
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
