import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { _id, title, details, image_url, author, total_view, rating } = news

    return (
        <Card className=" my-3 rounded-1">
            <Card.Header className='d-flex gap-3 align-items-center py-2'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />

                <div className='flex-grow-1'>
                    <p className='fw-bold mb-0'>{author?.name}</p>
                    <small className='text-muted'>{moment(author?.published_date).format('YYYY-MM-DD')}</small>
                </div>

                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt className='ms-2'></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='fw-bold'>{title}</Card.Title>
                <Card.Img className='mb-3 mt-2' src={image_url} />
                <Card.Text>
                    {
                        details.length < 250 ? details :
                            <>
                                `${details.slice(0, 250)} ...`
                                <Link to={`/news/${_id}`} className='d-block'>Read More</Link>
                            </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar className='text-warning'></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span className='ps-2'>
                        {rating?.number}
                    </span>
                </div>
                <div>
                    <FaRegEye></FaRegEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;