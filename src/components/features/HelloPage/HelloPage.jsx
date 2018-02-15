import React from 'react';
import Layout from '../../base-ui/Layout/Layout';

import '../../base-ui/_common/basic.scss';

import { Paragraph } from '../../base-ui/Typography';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';

function HelloPage (props) {
    return (
        <Layout>
            <Layout.Header>
                <Header/>
            </Layout.Header>
            <Layout.Content vPadded={true} hPadded={true}>
                <Paragraph>Hello is a key word.</Paragraph>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, quo!</Paragraph>
            </Layout.Content>
            <Layout.Footer>
                <Footer/>
            </Layout.Footer>
        </Layout>
    );
}

export default HelloPage;
