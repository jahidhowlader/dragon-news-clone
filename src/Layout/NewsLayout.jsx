import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header';
import { Col, Container, Row } from 'react-bootstrap';
import RightNavbar from '../Shared/RightNavbar';
import LeftNavication from '../Shared/LeftNavication';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Container>
                <Header></Header>

                <Row className='pt-5'>

                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>

                    <Col lg={3}> <RightNavbar></RightNavbar> </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLayout;