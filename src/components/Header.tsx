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
        <style>{`
            .zrt-nav-active {
                text-decoration: underline;
            }
        `}</style>
        <div style={{margin: 'auto', display: 'flex', flexWrap: 'wrap'}}>
            {['home','employment','education', 'skills','achievements','projects', 'contact', ].map(s =>
                <Link
                    key={s}
                    activeClass="zrt-nav-active"
                    to={`zrt-page-${s}`}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    style={{
                        padding: '10px',
                        cursor: 'pointer',
                    }}
                >
                    {_.capitalize(s)}
                </Link>
            )}
        </div>
    </div>;
};
