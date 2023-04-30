import React from 'react';
import Header from '../Shared/Header';
import { Col, Container, Row } from 'react-bootstrap';
import RightNavbar from '../Shared/RightNavbar';
import LeftNavication from '../Shared/LeftNavication';
import { Outlet } from 'react-router-dom';

const Main = () => {

    return (
        <div>
            <Container>
                <Header></Header>

                <Row className='pt-5'>
                    <Col lg={3}><LeftNavication></LeftNavication></Col>

                    <Col lg={6}>

                        <Outlet></Outlet>

                        {/* <h4 className='fw-bold'>Today News</h4>

                        <div>
                            {
                                news && news.map(singleNews => (
                                    <div 
                                    key={singleNews._id}
                                    className='py-3'
                                    >
                                        <div>
                                            <h6 className='fw-bold'>{singleNews.author.name}</h6>
                                        </div>
                                        <h5 className='fw-bold'>{singleNews.title}</h5>
                                        <img className='img-fluid' src={singleNews.image_url} alt="" />
                                    </div>
                                ))
                            }
                        </div> */}
                    </Col>

                    <Col lg={3}> <RightNavbar></RightNavbar> </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;