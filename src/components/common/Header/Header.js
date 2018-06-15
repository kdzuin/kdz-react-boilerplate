import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import Routes from '../../../Routes';

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

    const links = Object.values(Routes).filter(function (item) {
        return item.showInHeader;
    });

    return (
        <div className={classnames.block}>
            <div className={classnames.content}>

                <div className={classnames.logo}>
                    <NavLink
                        exact to="/"
                        className={classnames.link}
                        activeClassName={classnames.isActive}
                    >
                        Header
                    </NavLink>
                </div>

                <div className={classnames.navigation}>
                    {links.map(function (item, key) {
                        return (
                            <NavLink
                                exact={item.exact}
                                to={item.url}
                                className={classnames.link}
                                activeClassName={classnames.isActive}
                                key={key}
                            >
                                {item.label}
                            </NavLink>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Header;
