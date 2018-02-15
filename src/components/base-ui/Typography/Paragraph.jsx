import React from 'react';
import Text from './Text';

import './typography.scss';

function Paragraph (props) {
    return (
        <Text type={Text.Type.PARAGRAPH}>
            {props.children}
        </Text>
    )
}

export default Paragraph;
