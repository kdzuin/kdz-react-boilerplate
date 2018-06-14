import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
};

function CtaBoxContent(props) {
    const {
        children,
        isCompact,
    } = props;

    const classnames = classNames({
        'cta-box__content': true,
        'cta-box__content--is-compact': isCompact,
    });

    return (
        <div className={classnames}>
            {children}
        </div>
    );
}

CtaBoxContent.propTypes = propTypes;

export default CtaBoxContent;
