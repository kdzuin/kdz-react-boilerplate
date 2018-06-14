import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Header1, Header2 } from '../Typography';

const propTypes = {
    /**
     * The text or the elements to be inserted in the header block
     */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    isLight: PropTypes.bool,
    isCompact: PropTypes.bool,
};

function CtaBoxHeader(props) {
    const {
        text,
        isLight,
        isCompact
    } = props;

    const classnames = classNames({
        'cta-box__header': true,
        'cta-box__header--is-light': isLight,
        'cta-box__header--is-compact': isCompact
    });

    return (
        <div className={classnames}>
            {isCompact ? (
                <Header2>{text}</Header2>
            ) : (
                <Header1>{text}</Header1>
            )}
        </div>
    )
}

CtaBoxHeader.propTypes = propTypes;

export default CtaBoxHeader;
