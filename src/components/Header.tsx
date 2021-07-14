import React from 'react';
import { Link } from 'react-scroll';
import _ from 'lodash';

export const Header = () => {
    return <div style ={{
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        padding: '20px',
        backgroundColor: '#333',
        color: '#FFF',
    }}>
        <div style={{margin: 'auto'}}>
            {['home', 'skills','employment','education','achievements','projects',].map(s =>
                <Link
                    key={s}
                    activeClass="active"
                    to={`zrt-page-${s}`}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    style={{padding: '10px'}}
                >
                    {_.capitalize(s)}
                </Link>
            )}
        </div>
    </div>;
};
