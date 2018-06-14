import React from 'react';
import PropTypes from 'prop-types';

import CtaBoxHeader from './CtaBoxHeader';
import CtaBoxText from './CtaBoxText';

import './CtaBox.scss';
import CtaBoxContent from './CtaBoxContent';
import CtaBoxButtons from './CtaBoxButtons';

const propTypes = {
    /**
     * The children elements - We expect `<CtaBox.Media>` `<CtaBox.Header>`, `<CtaBox.Text>`,
     * `<CtaBox.Buttons>` and `<CtaBox.Additional>` nodes
     */
    children: PropTypes.node.isRequired,
    /**
     * Shows if we use light theme, or dark by default
     */
    isLight: PropTypes.bool,
    /**
     * Reduces the vertical space after the media element and the size of the header text
     */
    isCompact: PropTypes.bool
};

const defaultProps = {
    isCompact: false,
    isLight: false,
};

function CtaBox(props) {
    const {
        children,
        isLight,
        isCompact
    } = props;

    const items = React.Children.toArray(children)
        .filter(Boolean) // we may be receiving "null" as child (see ZeroBox or PeopleNearbyBanner for example)
        .map((child) =>
            React.cloneElement(child, {
                isLight,
                isCompact
            })
        );

    return (
        <div className="cta-box">
            {items}
        </div>
    )
}

CtaBox.propTypes = propTypes;
CtaBox.defaultProps = defaultProps;

CtaBox.Header = CtaBoxHeader;
CtaBox.Text = CtaBoxText;
CtaBox.Content = CtaBoxContent;
CtaBox.Buttons = CtaBoxButtons;

export default CtaBox;
