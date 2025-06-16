// src/components/BusinessOwnerAccount.js
import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import "./BusinessOwnerAccount.css";
// import './BusinessOwnerAccount.css'; 
// Optional: CSS for this component

const BusinessOwnerAccount = ( businessId) => {
    const [ownerProfile, setOwnerProfile] = useState({
        name: "Pavani Choppa",
        email: "pavani@gmail.com",
        businessName: "FreshMart",
        businessDescription: "Fresh produce every time! Always my go-to for organic and healthy food.",
        businessLocation: "Kadapa,Andrapradesh,India",
        businessImage: "./images/Business_Women.png",
    });
    const [reviews, setReviews] = useState([
        {
            id: 1,
            customerName: "Alice Smith",
            rating: 4.5,
            comment: "Great quality products and friendly staff!",
        },
        {
            id: 2,
            customerName: "Bob Johnson",
            rating: 3.0,
            comment: "Good products but the waiting time was long.",
        },
        {
            id: 3,
            customerName: "Charlie Brown",
            rating: 5.0,
            comment: "Absolutely loved the organic options available!",
        },
    ]);

    // Example of fetching reviews dynamically
    useEffect(() => {
        // Fetch data here if needed
        // Example: fetch('/api/reviews').then(response => response.json()).then(data => setReviews(data));
    }, []);

    return (
        <div className="business-owner">
            <Navbar />
            <div className="business-owner-account-container">
                {/* Owner Profile Section */}
                <div className="owner-profile-section">
                    <div className="profile-details">
                        <h1>Welcome, {ownerProfile.name}</h1>
                        <p>Email: {ownerProfile.email}</p>
                        <h2>Business Details</h2>
                        <div className="business-details">
                            <img
                                src={ownerProfile.businessImage}
                                alt={ownerProfile.businessName}
                                className="business-image"
                            />
                            <div>
                                <h3>{ownerProfile.businessName}</h3>
                                <p>{ownerProfile.businessDescription}</p>
                                <p>Location: {ownerProfile.businessLocation}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="reviews-section">
                    <h2>Customer Reviews</h2>
                    {reviews.length > 0 ? (
                        <div className="reviews-list">
                            {reviews.map((review) => (
                                <div key={review.id} className="review-card">
                                    <h4>{review.customerName}</h4>
                                    <p className="rating">
                                        <span className="filled-stars">
                                            {"★".repeat(Math.floor(review.rating))}
                                        </span>
                                        <span className="empty-stars">
                                            {"☆".repeat(5 - Math.floor(review.rating))}
                                        </span>
                                        <span className="numeric-rating">({review.rating.toFixed(1)})</span>
                                    </p>
                                    <p>{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
            </div>
            <footer className="footer">
                <h3>Connect With Us</h3>
                <p>
                    Your one-stop solution for all business needs. We help you find and connect with businesses
                    across various categories. Whether you're looking for services or products, we have it all.
                </p>
                <p>
                    © 2024 Business Directory. All Rights Reserved. | 
                    {/* <a href="/contact-us">Contact Us</a> | 
                    <a href="/about-us">About Us</a> */}
                </p>
            </footer>
        </div>
    );
};

export default BusinessOwnerAccount;
