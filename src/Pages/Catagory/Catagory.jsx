import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard';

const Catagory = () => {

    const { id } = useParams()

    const catagoryNews = useLoaderData()

    return (
        <div>
            {
                id && <h4>This category Length: {catagoryNews.length}</h4>
            }
            {
                catagoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Catagory;