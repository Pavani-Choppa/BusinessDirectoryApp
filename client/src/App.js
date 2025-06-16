// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import BusinessDetails from './components/BusinessDetails';
import BusinessOwnerAccount from './components/BusinessOwnerAccount'; // Create this component
import './App.css'; // Optional: Your global CSS

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/business-owner" element={<BusinessOwnerAccount />} />
                <Route path="*" element={<Signup />} /> 
                <Route path="/business/:id" element={<BusinessDetails />} />
                {/* Default route */}
            </Routes>
        </Router>
        
    );
}

export default App;
