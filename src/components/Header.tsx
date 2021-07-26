import React from 'react';
import { Link } from 'react-scroll';
import _ from 'lodash';
import './Header.css';

export const Header = () => {
    return <div className="zrt-header">
        <div className="zrt-header-content">
            {['home','employment','education', 'skills','achievements','projects', 'contact', ].map(s =>
                <Link
                    key={s}
                    activeClass="zrt-nav-active"
                    to={`zrt-page-${s}`}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    {_.capitalize(s)}
                </Link>
            )}
        </div>
    </div>;
};
