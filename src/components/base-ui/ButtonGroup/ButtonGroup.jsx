import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ButtonGroup.scss';

const Layout = {
    VERTICAL: 'button-group--vertical',
    HORIZONTAL: 'button-group--horizontal'
};

const Alignment = {
    CENTERED: 'button-group--centered'
};

const propTypes = {
    layout: PropTypes.any,
    alignment: PropTypes.any,
    children: PropTypes.any
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
            [ layout ]: layout,
            [ alignment ]: alignment
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
