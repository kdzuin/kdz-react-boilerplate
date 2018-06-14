import React from 'react';
import Text from './Text';

import './Typography.scss';

function SmallText (props) {
    return (
        <Text type={Text.Type.SMALL_TEXT}>
            {props.children}
        </Text>
    )
}

export default SmallText;
