import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    vPadded: PropTypes.bool,
    hPadded: PropTypes.bool,
    wide: PropTypes.bool,
};

const defaultProps = {
    vPadded: false,
    hPadded: false,
    wide: false,
};

function LayoutContent (props) {
    const {
        children,
        vPadded,
        hPadded,
        wide,
    } = props;

    const classnames = classNames({
        'layout__content': true,
        'layout__content--vpadded': vPadded,
        'layout__content--hpadded': hPadded,
        'layout__content--wide': wide,
    });

    return (
        <div className={classnames}>
            {children}
        </div>
    )
}

LayoutContent.propTypes = propTypes;
LayoutContent.defaultProps = defaultProps;

export default LayoutContent;
