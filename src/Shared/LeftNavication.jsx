import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavication = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))

    }, [])


    return (
        <div>
            <h4 className='fw-bold'>All Caterogy</h4>

            <div className='pt-4'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none ps-4 text-secondary fw-bold '>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNavication;