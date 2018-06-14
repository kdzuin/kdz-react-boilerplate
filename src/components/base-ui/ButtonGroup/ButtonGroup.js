import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ButtonGroup.scss';

const Layout = {
    VERTICAL: 'vertical',
    HORIZONTAL: 'horizontal'
};

const Alignment = {
    CENTERED: 'centered'
};

const propTypes = {
    /**
     * Layout model for the Button Group: horizontal or vertical
     */
    layout: PropTypes.oneOf(Object.values(Layout)),
    /**
     * Horizontal alignment in the group
     */
    alignment: PropTypes.oneOf(Object.values(Alignment)),
    /**
     * Expecting `<Button />` elements
     */
    children: PropTypes.node.isRequired,
};

const defaultProps = {
    layout: Layout.HORIZONTAL
};

function ButtonGroup (props) {
    const {
        layout,
        alignment,
        children
    } = props;

    const classnames = {
        block: classNames({
            'button-group': true,
            [ `button-group--layout-${layout}` ]: layout,
            [ `button-group--alignment-${alignment}` ]: alignment,
        }),
        item: classNames({
            'button-group__item': true
        })
    };

    return (
        <div className={classnames.block}>
            {React.Children.map(children, function (item, key) {
                if (item) {
                    return (
                        <div className={classnames.item} key={key}>
                            {item}
                        </div>
                    )
                }
            })}
        </div>
    );
}

ButtonGroup.Layout = Layout;
ButtonGroup.Alignment = Alignment;

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
