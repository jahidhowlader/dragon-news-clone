import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';
import DragonNavbar from '../Shared/DragonNavbar';

const AuthLayout = () => {
    return (
        <div>
            <Container>

                <Row className='pt-5'>
                    <Col lg={3}>  </Col>

                    <Col lg={6}>
                        <DragonNavbar></DragonNavbar>
                        <Outlet></Outlet>
                    </Col>

                    <Col lg={3}>  </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AuthLayout;