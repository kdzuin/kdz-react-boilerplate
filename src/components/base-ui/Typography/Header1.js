import React from 'react';
import Text from './Text';

import './Typography.scss';

function Header1 (props) {
    return (
        <Text type={Text.Type.H1}>
            {props.children}
        </Text>
    )
}

export default Header1;
