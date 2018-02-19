import React from 'react';
import { Helmet } from 'react-helmet';

import '../../base-ui/_common/basic.scss';

import Layout from '../../base-ui/Layout/Layout';
import { Paragraph } from '../../base-ui/Typography';
import Button from '../../base-ui/Button/Button';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';

function MainPage (props) {
    return [
        (
            <Helmet key="meta-tags">
                <title>Main page of the Application</title>
                <meta name="description"
                      content="This is the main page of the boilerplate for side projects with client routing"/>
            </Helmet>
        ),
        (
            <Layout key="layout">
                <Layout.Header>
                    <Header/>
                </Layout.Header>
                <Layout.Content vPadded={true} hPadded={true}>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, quo!</Paragraph>
                </Layout.Content>
                <Layout.Content vPadded={true} hPadded={true}>
                    <Button text="Hello" href="/hello"/>
                </Layout.Content>
                <Layout.Footer>
                    <Footer/>
                </Layout.Footer>
            </Layout>
        )
    ];
}

export default MainPage;
