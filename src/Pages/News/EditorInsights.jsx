import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import FirstPic from '../../../public/assets/1.png'
import SecondPic from '../../../public/assets/2.png'
import ThirdPic from '../../../public/assets/3.png'
import { FaRegCalendar } from 'react-icons/fa';

const EditorInsights = () => {

    const picture = [FirstPic, SecondPic, ThirdPic]


    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {picture.map((pic, idx) => (
                <Col key={idx}>
                    <Card className='border-0'>
                        <Card.Img variant="top" src={pic} />
                        <Card.Body className='ps-0'>
                            <Card.Title className='fw-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <span className='text-muted d-flex align-items-center'>
                                <FaRegCalendar className='me-2'></FaRegCalendar> <small>Jan 4, 2023</small>
                            </span>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default EditorInsights;