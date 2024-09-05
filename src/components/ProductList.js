import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const products = [
    {
        name: "Rocking chair",
        description: "A backrest that can be tilted back, and often a footrest extended",
        price: "€299.00",
        originalPrice: "€350.00",
        discount: "30% OFF",
        imageUrl: "https://t3.ftcdn.net/jpg/02/53/00/88/360_F_253008809_TOKoPQxqWSrwFiDIczZjNAOsfni7VRro.jpg"  // Add your image URL here
    },
    {
        name: "Timber Ride Padded",
        description: "High Back Rocking Side Pocket Portable Folding Outdoor Camping Chairs",
        price: "€59.00",
        originalPrice: "€75.00",
        discount: "30% OFF",
        imageUrl: "https://images.pexels.com/photos/106839/pexels-photo-106839.jpeg?cs=srgb&dl=pexels-mikebirdy-106839.jpg&fm=jpg"  // Add your image URL here
    },

];

const ProductList = () => {
    return (
        <Container className="mt-5">
            <Row>
                {products.map((product, index) => (
                    <Col sm={4} key={index}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Card.Text>
                                    <span className="text-muted text-decoration-line-through">{product.originalPrice}</span> {product.price} <span className="text-success">{product.discount}</span>
                                </Card.Text>
                                <Button variant="primary">Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductList;
