import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const cartItems = [
    { name: "Recliner Chair Steel", price: "€299.00" },
    { name: "Gaming Chair", price: "€249.00" },
    { name: "Timber Ride Padded", price: "€59.00" },
    // Add more items here...
];

const Checkout = () => {
    const subtotal = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('€', '')), 0);
    const shipping = 0; 
    const tax = 0; 
    const total = subtotal + shipping + tax;

    return (
        <Container className="mt-5">
            <h2>An overview of your order</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                    <tr>
                        <td><strong>Subtotal</strong></td>
                        <td>€{subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td><strong>Shipping</strong></td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td>€{total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </Table>
            <Button variant="primary">Go to Checkout</Button>
        </Container>
    );
}

export default Checkout;
