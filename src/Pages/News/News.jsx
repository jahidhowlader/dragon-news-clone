import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsights from './EditorInsights';

const News = () => {

    const news = useLoaderData()
    const { _id, title, details, image_url, category_id } = news

    // console.log(news);

    return (
        <div>
            <Card className='p-2'>
                <Card.Img className='p-3' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{title}</Card.Title>
                    <Card.Text>
                        <small>
                            {details}
                        </small>
                    </Card.Text>
                    <Link to={`/catagory/${category_id}`}>
                        <Button className='btn-danger rounded-0 px-4' variant="primary"><FaArrowLeft></FaArrowLeft> All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>

            <div className='py-5'>
                <h4 className='py-3 fw-bold'>Editors Insight</h4>
                <EditorInsights></EditorInsights>
            </div>
        </div>
    );
};

export default News;