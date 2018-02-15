import React from 'react';
import Text from './Text';

import './typography.scss';

function Header3 (props) {
    return (
        <Text type={Text.Type.H3}>
            {props.children}
        </Text>
    )
}

export default Header3;
