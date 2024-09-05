import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Container className="mt-5">
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="Jordan"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="lastName" className="mt-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Ken"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="email" className="mt-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="jordan@email.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="password" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="*********"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="terms" className="mt-3">
                    <Form.Check type="checkbox" label="I agree to the Terms & Policy" />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Sign Up
                </Button>
            </Form>
        </Container>
    );
}

export default SignUp;