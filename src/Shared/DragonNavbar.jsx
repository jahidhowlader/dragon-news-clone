import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DragonNavbar = () => {
    return (
        < Navbar className = 'mt-3 fw-bold d-flex align-items-center' collapseOnSelect expand = "lg" bg = "transparent" variant = "light" >
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto ">
                    
                    <Nav.Link href="/">
                         Home
                    </Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Career</Nav.Link>

                </Nav>
                <Nav className='d-flex align-items-center'>
                    <Nav.Link  >
                        <FaUserCircle className='text-dark display-6'></FaUserCircle>
                    </Nav.Link>
                    <Link to="/auth/signin">
                    <Button variant="dark px-4 rounded-0">Login</Button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default DragonNavbar;