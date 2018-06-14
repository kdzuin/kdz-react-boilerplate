import React from 'react';
import classNames from 'classnames';
import Helpers from '../../common/Helpers.js';

import LayoutHeader from './LayoutHeader';
import LayoutContent from './LayoutContent';
import LayoutFooter from './LayoutFooter';

import './Layout.scss';

const LayoutAlignment = {
    STRETCHED_CONTENT: 'layout--stretched-content',
    CENTERED_CONTENT: 'layout--centered-content'
};

const propTypes = {
    alignment: (props, propName, componentName) => Helpers.validateSpecification(props, propName, componentName, Layout.Alignment, 'Layout.Alignment'),
};

function Layout (props) {
    const {
        children,
        alignment,
    } = props;

    const classnames = classNames({
        'layout': true,
        [ alignment ]: alignment
    });

    return (
        <div className={classnames}>
            {children}
        </div>
    );
}

Layout.propTypes = propTypes;
Layout.Alignment = LayoutAlignment;

Layout.Header = LayoutHeader;
Layout.Content = LayoutContent;
Layout.Footer = LayoutFooter;

export default Layout;
