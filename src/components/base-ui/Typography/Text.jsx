import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Typography.scss';

const propTypes = {
    inline: PropTypes.bool,
    dangerous: PropTypes.bool,
    type: PropTypes.string
};

const Type = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    PARAGRAPH: 'p',
    SMALL_TEXT: 'small-text'
};

function Text (props) {
    const {
        inline,
        dangerous,
        type
    } = props;

    const classnames = {
        block: classNames({
            [ type ]: type
        })
    };

    const TagName = inline ? 'span' : 'div';

    if (dangerous) {

    } else {
        return (
            <TagName className={classnames.block}>
                {props.children}
            </TagName>
        )
    }
}

Text.propTypes = propTypes;
Text.Type = Type;

export default Text;
