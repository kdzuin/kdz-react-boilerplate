import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    vPadded: PropTypes.bool,
    hPadded: PropTypes.bool,
};

const defaultProps = {
    vPadded: false,
    hPadded: false,
};

function LayoutFooter (props) {
    const {
        children,
    } = props;

    const classnames = classNames({
        'layout__footer': true,
    });

    return (
        <div className={classnames}>
            {children}
        </div>
    )
}

LayoutFooter.propTypes = propTypes;
LayoutFooter.defaultProps = defaultProps;

export default LayoutFooter;
