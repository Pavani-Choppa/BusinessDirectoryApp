// src/OwnerDashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OwnerDashboard.css';

function OwnerDashboard() {
    const [businesses, setBusinesses] = useState([]);
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        // Fetch business owner's businesses and reviews from the backend
        axios.get('/api/owner/businesses')
            .then(response => setBusinesses(response.data))
            .catch(error => console.error(error));
        
        axios.get('/api/owner/reviews')
            .then(response => setReviews(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="dashboard">
            <header>
                <h1>Welcome, [Owner's Name]</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/add-business">Add Business</a>
                    <a href="/profile">Profile</a>
                    <a href="/logout">Logout</a>
                </nav>
            </header>
            <div className="content">
                <aside>
                    <h2>Navigation</h2>
                    <ul>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/manage-businesses">Manage Businesses</a></li>
                        <li><a href="/reviews">Reviews</a></li>
                        <li><a href="/settings">Settings</a></li>
                        <li><a href="/support">Support</a></li>
                    </ul>
                </aside>
                <main>
                    <section className="business-summary">
                        <h2>Your Businesses</h2>
                        <ul>
                            {businesses.map(business => (
                                <li key={business._id}>
                                    <h3>{business.name}</h3>
                                    <p>Category: {business.category}</p>
                                    <p>Location: {business.location}</p>
                                    <p>Rating: {business.rating}</p>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </li>
                            ))}
                        </ul>
                        <button>Add New Business</button>
                    </section>
                    <section className="reviews">
                        <h2>Customer Reviews</h2>
                        <ul>
                            {reviews.map(review => (
                                <li key={review._id}>
                                    <h3>{review.title}</h3>
                                    <p>Rating: {review.rating}</p>
                                    <p>{review.text}</p>
                                    <p><small>By {review.user} on {new Date(review.date).toLocaleDateString()}</small></p>
                                    <button>Respond</button>
                                </li>
                            ))}
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default OwnerDashboard;
