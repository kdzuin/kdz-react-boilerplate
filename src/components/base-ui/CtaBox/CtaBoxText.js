import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const { Paragraph } = require('../Typography');

const propTypes = {
    /**
     * The text or the elements to be inserted in the content block
     * @notice if is text then automatically is set as "dangerous" and rendered via dangerouslySetInnerHTML
     */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onClick: PropTypes.func
};

function CtaBoxText(props) {
    const {
        text,
        isLight,
        isCompact,
        onClick
    } = props;

    const isText = typeof text === 'string';
    const classnames = classNames({
        'cta-box__text': true,
        'cta-box__text--is-light': isLight,
        'cta-box__text--is-compact': isCompact,
    });

    return (
        <div className={classnames} onClick={onClick}>
            <Paragraph dangerous={isText}>{text}</Paragraph>
        </div>
    );
}

CtaBoxText.propTypes = propTypes;

export default CtaBoxText;
