import React from 'react';
import Layout from '../../base-ui/Layout/Layout';

import '../../base-ui/_common/basic.scss';

import { Paragraph } from '../../base-ui/Typography';
import ButtonGroup from '../../base-ui/ButtonGroup/ButtonGroup';
import Button from '../../base-ui/Button/Button';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';

function MainPage (props) {
    return (
        <Layout>
            <Layout.Header>
                <Header/>
            </Layout.Header>
            <Layout.Content vPadded={true} hPadded={true}>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, quo!</Paragraph>
            </Layout.Content>
            <Layout.Content vPadded={true} hPadded={true}>
                <ButtonGroup>
                    <Button text="Hello" href="/hello"/>
                    <Button text="Привет!"/>
                </ButtonGroup>
            </Layout.Content>
            <Layout.Footer>
                <Footer/>
            </Layout.Footer>
        </Layout>
    );
}

export default MainPage;
