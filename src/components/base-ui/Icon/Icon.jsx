import React from 'react';
import classNames from 'classnames';

import './Icon.scss';

const propTypes = {
    /** Name of the icon is a String without '#' char, used in 'use xlinkHref' */
    name: function (props, propName, componentName) {
        if (typeof props[ propName ] !== 'string') {
            return new Error(`Icon name should be a string`);
        }
        if (props[ propName ] === '') {
            return new Error(`Icon name should not be empty`);
        }
        if (props[ propName ].indexOf('#') !== -1) {
            return new Error(`Icon name should not start with # char`);
        }
    },

    /** size: Icon.Size.SMALL */
    size: function (props, propName, componentName) {
        if (props[ propName ] && Object.values(Icon.Size).indexOf(props[ propName ]) === -1) {
            return new Error(`Incorrect value in '${propName}' prop.`);
        }
    }
};

const Size = {
    SMALL: 'icon--sm',
    MEDIUM: 'icon--md',
    LARGE: 'icon--lg',
    STRETCH: 'icon--stretch'
};

const defaultProps = {
    size: Size.SMALL
};

const getIconSymbol = function (name) {
    switch (name) {
        case 'icon-pencil':
            return (
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.35 22.33l3.18 3.12 3.27 3.22.87.07c1.82.15 4.6-.87 5.89-2.16L28.1 15.04c.87-.87.87-2.3 0-3.17L24.9 8.68 13.78 19.81l-1.6-1.59L23.33 7.1 20.14 3.9a2.25 2.25 0 0 0-3.18 0L5.42 15.46a8.87 8.87 0 0 0-2.16 5.88l.09 1zM15.37 2.32a4.5 4.5 0 0 1 6.36 0l7.96 7.96a4.5 4.5 0 0 1 0 6.35L18.15 28.17a11.03 11.03 0 0 1-7.66 2.81l-8.75-.72-.72-8.75a11.05 11.05 0 0 1 2.81-7.65L15.37 2.32z"/>
                </svg>
            );
        default:
            return (
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={16} cy={16} r={16} fill="#ccc"/>
                </svg>
            )
    }
};

function Icon (props) {
    const {
        name,
        size
    } = props;

    const classnames = {
        block: classNames({
            'icon': true,
            [ size ]: size
        }),
        svg: classNames({
            'icon__content': true
        })
    };

    return (
        <div className={classnames.block}>
            {getIconSymbol(name)}
        </div>
    );
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

Icon.Size = Size;

export default Icon;
