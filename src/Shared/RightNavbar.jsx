import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Qzone from './Qzone';
import { Link } from 'react-router-dom';
import bg from '../../public/assets/bg.png'
import './RightNavbar.css'


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

                    <Link to={'https://twitter.com/JahidHowlader10'} target='_blank' className='text-decoration-none text-secondary'>
                        <ListGroup.Item><span className='text-primary me-2'><FaTwitter></FaTwitter></span>  Twitter</ListGroup.Item>
                    </Link>

                    <Link to={'https://www.instagram.com/jahidhowlader.info/'} target='_blank' className='text-decoration-none text-secondary'>
                        <ListGroup.Item><span className='text-danger me-2'><FaInstagram></FaInstagram></span>  Instagram</ListGroup.Item>
                    </Link>
                </ListGroup>
            </div>

            <Qzone></Qzone>

            <div className='bg-rightnav text-light d-flex justify-content-center align-items-center text-center px-5 mt-3'>
                <div>
                    <h3>Create an Amazing Newspaper</h3>
                    <p className='py-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='btn btn-danger rounded-0 py-3'>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default RightNavbar;