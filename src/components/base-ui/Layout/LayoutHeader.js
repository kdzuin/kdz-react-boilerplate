import React from 'react';
import classNames from 'classnames';

function LayoutHeader (props) {
    const {
        children,
    } = props;

    const classnames = classNames({
        'layout__header': true,
    });

    return (
        <div className={classnames}>
            {children}
        </div>
    )
}

export default LayoutHeader;
