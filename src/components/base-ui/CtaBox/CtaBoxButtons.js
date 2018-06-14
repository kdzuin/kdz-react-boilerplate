import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import ButtonGroup from '../ButtonGroup/ButtonGroup';

const propTypes = {
    children: PropTypes.node.isRequired,
};

function CtaBoxButtons(props) {
    const {
        children,
        isCompact,
    } = props;

    const classnames = classNames({
        'cta-box__buttons': true,
        'cta-box__buttons--is-compact': isCompact,
    });

    return (
        <div className={classnames}>
            <ButtonGroup alignment={ButtonGroup.Alignment.CENTERED}>
                {children}
            </ButtonGroup>
        </div>
    );
}

CtaBoxButtons.propTypes = propTypes;

export default CtaBoxButtons;
