import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Qzone from './Qzone';
import { Link } from 'react-router-dom';


const RightNavbar = () => {
    return (
        <div>
            <h4 className='fw-bold pb-2'>Login With</h4>
            <div className='pb-5 d-grid gap-2'>
                <Button className='d-block w-full' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with github</Button>
            </div>


            <div className=''>
                <h4 className='fw-bold'>Find Us On</h4>
                <ListGroup>
                    <Link to={'https://www.facebook.com/jahidhowlader.info/'} target='_blank' className='text-decoration-none text-secondary'><ListGroup.Item >
                        <span className='text-primary me-2'><FaFacebook></FaFacebook></span> Facebook
                    </ListGroup.Item></Link>

                    <Link to={'https://twitter.com/JahidHowlader10'} target='_blank'  className='text-decoration-none text-secondary'>
                    <ListGroup.Item><span className='text-primary me-2'><FaTwitter></FaTwitter></span>  Twitter</ListGroup.Item>
                    </Link>

                    <Link to={'https://www.instagram.com/jahidhowlader.info/'} target='_blank'  className='text-decoration-none text-secondary'>
                    <ListGroup.Item><span className='text-danger me-2'><FaInstagram></FaInstagram></span>  Instagram</ListGroup.Item>
                    </Link>
                </ListGroup>
            </div>

            <Qzone></Qzone>
        </div>
    );
};

export default RightNavbar;