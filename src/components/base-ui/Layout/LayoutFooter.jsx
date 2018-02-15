import React from 'react';
import classNames from 'classnames';

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

export default LayoutFooter;
