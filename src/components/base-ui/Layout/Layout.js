import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import LayoutHeader from './LayoutHeader';
import LayoutContent from './LayoutContent';
import LayoutFooter from './LayoutFooter';

import './Layout.scss';

const Alignment = {
    STRETCHED_CONTENT: 'layout--stretched-content',
    CENTERED_CONTENT: 'layout--centered-content'
};

const propTypes = {
    alignment: PropTypes.oneOf(Object.values(Alignment)),
    backgroundInherited: PropTypes.bool,
};

const defaultProps = {
    backgroundInherited: false,
};

function Layout (props) {
    const {
        children,
        alignment,
        backgroundInherited,
    } = props;

    const classnames = classNames({
        'layout': true,
        'layout--background-inherited': backgroundInherited,
        [ alignment ]: alignment
    });

    return (
        <div className={classnames}>
            {children}
        </div>
    );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

Layout.Alignment = Alignment;

Layout.Header = LayoutHeader;
Layout.Content = LayoutContent;
Layout.Footer = LayoutFooter;

export default Layout;
