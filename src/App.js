import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './components/SignUp';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/checkout" element={<Checkout />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;