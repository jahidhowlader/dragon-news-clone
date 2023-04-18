import React from 'react';
import logo from '../../public/assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';



const Header = () => {
    return (<>
        <div className='text-center pt-5'>
            <img src={logo} alt="The Dragon News" />
            <p className='text-secondary pt-4 mb-1'><small>Journalism Without Fear or Favour</small></p>
            <p className='lead text-secondary'><span className='text-dark'>{moment().format('dddd,')}</span> {moment().format('MMMM D, YYYY')}</p>
        </div>

        <div className='d-flex bg-light p-3 align-items-center'>
            <Button variant="danger rounded-0 px-4">Latest</Button>
            <div className='fw-bold pt-1'>
                <marquee behavior="" direction="">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est explicabo incidunt odit optio dolore dolor unde officia velit expedita, excepturi error veniam culpa dolorum, aliquid a. Sed molestias neque enim reiciendis tenetur doloribus explicabo quam ipsa dicta? Accusamus, architecto corporis! Ipsa quibusdam vero cum porro perferendis, vel voluptates veniam quia!
                </marquee>
            </div>
        </div>

        {/* Navbar */}
        <Navbar className='mt-3 fw-bold d-flex align-items-center' collapseOnSelect expand="lg" bg="transparent" variant="light">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto ">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Career</Nav.Link>

                </Nav>
                <Nav className='d-flex align-items-center'>
                    <Nav.Link className='border' href="#deets">JH</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        <Button variant="dark px-4 rounded-0">Login</Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
    );
};

export default Header;