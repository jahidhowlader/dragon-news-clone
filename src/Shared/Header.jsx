import React, { useContext } from 'react';
import logo from '../../public/assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Navbar } from 'react-bootstrap';
import { AuthContext } from '../Provider/AuthProvider';
import DragonNavbar from './DragonNavbar';
// import Navbar from './DragonNavbar';



const Header = () => {

    const {displayName} = useContext(AuthContext)

    return (<>
        <div className='text-center pt-5'>
            <img className='img-fluid' src={logo} alt="The Dragon News" />
            <p className='text-secondary pt-4 mb-1'><small>Journalism Without Fear or Favour</small></p>
            <p className='lead text-secondary'><span className='text-dark'>{moment().format('dddd,')}</span> {moment().format('MMMM D, YYYY')}</p>
        </div>

        <div className='d-flex bg-light p-3 align-items-center'>
            <Button variant="danger rounded-0 px-4 ">Latest</Button>
            <div className='fw-bold pt-1 text-danger'>
                <marquee behavior="" direction="">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est explicabo incidunt odit optio dolore dolor unde officia velit expedita, excepturi error veniam culpa dolorum, aliquid a. Sed molestias neque enim reiciendis tenetur doloribus explicabo quam ipsa dicta? Accusamus, architecto corporis! Ipsa quibusdam vero cum porro perferendis, vel voluptates veniam quia!
                </marquee>
            </div>
        </div>

        {/* Navbar */ }
        <DragonNavbar></DragonNavbar>
    </>
    );
};

export default Header;