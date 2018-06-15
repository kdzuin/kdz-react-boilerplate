import React from 'react';
import Routes from '../../../Routes';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './Footer.scss';

function Footer (props) {

    const classnames = {
        block: classNames({
            'footer': true
        }),
        content: classNames({
            'footer__content': true
        }),
        logo: classNames({
            'footer__logo': true
        }),
        navigation: classNames({
            'footer__navigation': true
        }),
        link: classNames({
            'footer__link': true
        }),
        isActive: 'is-active'
    };

    const links = Object.values(Routes).filter(function (item) {
        return item.showInFooter;
    });

    return (
        <div className={classnames.block}>
            <div className={classnames.content}>
                <div className={classnames.logo}>
                    Footer
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

export default Footer;
