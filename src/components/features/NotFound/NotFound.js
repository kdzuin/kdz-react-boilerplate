import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import '../../base-ui/_common/basic.scss';

import Layout from '../../base-ui/Layout/Layout';
import { Paragraph, Header2 } from '../../base-ui/Typography';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';

function NotFound (props) {
    return [
        (
            <Helmet key="meta-tags">
                <title>Not Found</title>
            </Helmet>
        ),
        (
            <Layout key="layout">
                <Layout.Header>
                    <Header/>
                </Layout.Header>
                <Layout.Content vPadded={true} hPadded={true}>
                    <Header2>This page is not found</Header2>
                    <Paragraph>Please <Link to="/">head to the main page</Link> to explore the website.</Paragraph>
                </Layout.Content>
                <Layout.Footer>
                    <Footer/>
                </Layout.Footer>
            </Layout>
        )
    ];
}

export default NotFound;
