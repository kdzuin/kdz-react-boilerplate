import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header (props) {

    const classnames = {
        block: classNames({
            'header': true
        }),
        content: classNames({
            'header__content': true
        }),
        logo: classNames({
            'header__logo': true
        }),
        navigation: classNames({
            'header__navigation': true
        }),
        link: classNames({
            'header__link': true
        }),
        isActive: 'is-active'
    };

    return (
        <div className={classnames.block}>
            <div className={classnames.content}>

                <div className={classnames.logo}>
                    <NavLink exact to="/" className={classnames.link} activeClassName={classnames.isActive}>
                        Header
                    </NavLink>
                </div>

                <div className={classnames.navigation}>
                    <NavLink to="/hello" className={classnames.link} activeClassName={classnames.isActive}>
                        HelloPage
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default Header;
