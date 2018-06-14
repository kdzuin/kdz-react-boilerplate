import React from 'react';
import Text from './Text';

import './Typography.scss';

function Header2 (props) {
    return (
        <Text type={Text.Type.H2}>
            {props.children}
        </Text>
    )
}

export default Header2;
