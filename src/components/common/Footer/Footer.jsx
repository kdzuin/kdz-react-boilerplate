import React from 'react';
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

    return (
        <div className={classnames.block}>
            <div className={classnames.content}>
                <div className={classnames.logo}>
                    Footer
                </div>
                <div className={classnames.navigation}>
                    <NavLink exact to="/" className={classnames.link} activeClassName={classnames.isActive}>
                        MainPage
                    </NavLink>
                    <NavLink to="/hello" className={classnames.link} activeClassName={classnames.isActive}>
                        HelloPage
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default Footer;
