import React from 'react';
import Qzone1 from '../../public/assets/qZone1.png'
import Qzone2 from '../../public/assets/qZone2.png'
import Qzone3 from '../../public/assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='pb-5 pt-4 mt-5 pl-3 bg-light'>
            <h4 className='fw-bold ps-4'>Q-Zone</h4>

            <div className='text-center'>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;