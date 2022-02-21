import React from 'react';
import { Card,Button } from 'react-bootstrap';
const News = (props) => {
    console.log(props.articl)
    const {title,description,urlToImage,content,url}=props.articl;
    return (
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> {description}</Card.Text>
                   <a href={url} target='_blank'> <Button variant="primary">Go somewhere</Button></a>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;