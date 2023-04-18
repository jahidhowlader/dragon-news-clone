import React from 'react';
import Header from '../Shared/Header';
import { Col, Container, Row } from 'react-bootstrap';
import RightNavbar from '../Shared/RightNavbar';
import LeftNavication from '../Shared/LeftNavication';

const Main = () => {
    return (
        <div>
            <Container>
                <Header></Header>

                <Row className='pt-5'>
                    <Col lg={3}><LeftNavication></LeftNavication></Col>
                    <Col lg={6}>Dragon News Home</Col>
                    <Col lg={3}> <RightNavbar></RightNavbar> </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Main;