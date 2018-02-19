import React from 'react';
import { Helmet } from 'react-helmet';

import '../../base-ui/_common/basic.scss';

import Layout from '../../base-ui/Layout/Layout';
import { Paragraph } from '../../base-ui/Typography';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';

function HelloPage (props) {
    return [
        (
            <Helmet key="meta-tags">
                <title>Hello page of the Application</title>
                <meta name="description"
                      content="This is the hello page of the boilerplate for side projects with client routing"/>
            </Helmet>
        ),
        (
            <Layout key="layout">
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
        )
    ];
}

export default HelloPage;
