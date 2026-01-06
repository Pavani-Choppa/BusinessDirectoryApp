import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './BusinessDetails.css'
import Navbar from './Navbar';

const BusinessDetails = () => {
    const { id } = useParams();

    // Example data; replace with an API call or state management
    // const businesses = [
    //     {
    //         id: 1,
    //         imageUrl: '/images/TechSolutions.png',
    //         name: 'Tech Solutions',
    //         description: 'We provide the best tech solutions for businesses.',
    //         rating: 4.5,
    //         location: 'New York, USA'
    //     },
    //     {
    //         id: 2,
    //         imageUrl: '/images/FasionHubA.png',
    //         name: 'Fashion Hub',
    //         description: 'Trendy and fashionable clothing for all ages.',
    //         rating: 4.8,
    //         location: 'Los Angeles, USA'
    //     },
    //     {
    //         id: 3,
    //         imageUrl: '/images/grocerymart.png',
    //         name: 'Grocery Mart',
    //         description: 'Your one-stop shop for fresh groceries.',
    //         rating: 4.2,
    //         location: 'AndhraPradesh, India'
    //     },
    //     {
    //         id: 4,
    //         imageUrl: '/images/gadget_galaxy.png',
    //         name: 'Gadget Galaxy',
    //         description: 'One of the best spots for the latest and greatest in tech gadgets. Specializing in high-tech accessories and devices.',
    //         rating: 4.7,
    //         location: '78 Tech Plaza, New York, USA'
    //     },
    //     {
    //         id: 5,
    //         imageUrl: '/images/Styleavenue.png',
    //         name: 'Style Avenue',
    //         description: 'A trendy clothing store that offers stylish and affordable apparel for all ages. From casual wear to office attire',
    //         rating: 4.3,
    //         location: '321 Fashion Street, Los Angeles, California, USA'
    //     },
    //     {
    //         id: 6,
    //         imageUrl: '/images/freshmart.png',
    //         name: 'FreshMart',
    //         description: 'Fresh produce every time! Always my go-to for organic and healthy food.',
    //         rating: 4.8,
    //         location: '12 Green Valley, Austin, Texas, USA'
    //     },
    //     {
    //         id: 7,
    //         imageUrl: '/images/homeappliances.png',
    //         name: ' HomeEase Appliances',
    //         description: 'A one-stop-shop for all home appliance needs, from refrigerators to washing machines, with top-quality products and excellent customer service.',
    //         rating: 4.6,
    //         location: '45 Comfort Lane, Chicago, Illinois, USA'
    //     },
    //     {
    //         id: 8,
    //         imageUrl: '/images/greenbasket.png',
    //         name: 'Green Basket Grocers',
    //         description: 'Offers a wide variety of organic and fresh grocery products, including locally sourced vegetables and fruits',
    //         rating: 4.4,
    //         location: '34 Farm Lane, Houston, Texas, USA'
    //     },
    //     {
    //         id: 9,
    //         imageUrl: '/images/chic.png',
    //         name: 'Chic Couture',
    //         description: 'High-end fashion retailer providing luxurious clothing with elegant and timeless designs.',
    //         rating: 4.6,
    //         location: '89 Home Tech Road, Miami, Florida, USA'
    //     },
    //     {
    //         id: 10,
    //         imageUrl: '/images/appliance.png',
    //         name: 'Appliance World',
    //         description: 'Offers a wide range of home appliances, from kitchen gadgets to larger home systems at competitive prices',
    //         rating: 4.2,
    //         location: 'Los Angeles, USA'
    //     },
    //     {
    //         id: 11,
    //         imageUrl: '/images/sparkteck.png',
    //         name: 'SparkTech Innovations',
    //         description: 'Innovative products with good quality, but sometimes a little on the pricier side.',
    //         rating: 4.2,
    //         location: '45 Innovation Street, San Francisco, California, USA'
    //     },
    //     {
    //         id: 12,
    //         imageUrl: '/images/urbonTrend.png',
    //         name: 'Urban Trendsetters',
    //         description: 'Affordable yet fashionable! They offer great discounts often.',
    //         rating: 4.1,
    //         location: '89 Trendy Road, San Diego, California, USA'
    //     },
    //     {
    //         id: 13,
    //         imageUrl: '/images/funzonetoys.png',
    //         name: 'FunZone Toys',
    //         description: 'A playful shop that offers a variety of toys and games that keep kids entertained and engaged.',
    //         rating: 4.5,
    //         location: '34 Toy Street, Charlotte, North Carolina, USA'
    //     },
    //     // Add more business data as needed
    // ];

    
    // const business = businesses.find((b) => b.id === parseInt(id));
    const [business, setBusiness] = useState(null);
    const [loading, setLoading] = useState(true);
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState("");
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://business-directory-app-backend.onrender.com/api/businesses/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setBusiness(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching business details:', error);
            setLoading(false);
          });

        fetch(`https://business-directory-app-backend.onrender.com/api/reviews?businessId=${id}`)
            .then((response) => response.json())
            .then((data) => {
                setReviews(data);
            })
            .catch((error) => {
                console.error('Error fetching reviews:', error);
            });
 
      }, [id]);


    // const handleSubmit = (e) => {
    //         e.preventDefault();

    //         const reviewData = {
    //             businessName: business.name,
    //             userName: username || "Pavani Choppa", // Replace with the logged-in user's name
    //             rating: document.getElementById("star-rating").value,
    //             review: document.getElementById("review").value,
    //         };

    //         fetch('http://localhost:5000/api/reviews', {

    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(reviewData),
    //         })
    //              .then((response) => {
    //                 if (!response.ok) {
    //                     throw new Error(`HTTP error! status: ${response.status}`);
    //                 }
    //                 if (response.ok) {
    //                     alert("Review successfully submitted!");
    //                     // Clear the form fields after successful submission
                        
    //                     setRating(0);
    //                     setReview("");
    //                 } else {
    //                     setMessage("Failed to submit review. Please try again.");
    //                 }
    //                 return response.json();
    //             })
    //             .then((data) => {
    //                 console.log('Review submitted successfully:', data);
                    
    //             })
    //             .catch((error) => {
    //                 console.error('Error submitting review:', error);
    //                 alert('Failed to submit review. Please try again.');
    //             });
    //     };

    const fetchReviews = (businessName) => {
        fetch(`https://business-directory-app-backend.onrender.com/api/reviews?businessName=${encodeURIComponent(businessName)}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Fetched reviews:", data);
            // Assuming you have a state variable to hold reviews
            setReviews(data); // Set reviews in the state
          })
          .catch((error) => {
            console.error("Error fetching reviews:", error);
          });
      };
      

    const handleSubmit = (e) => {
        e.preventDefault();
      
        // Collecting review data
        const reviewData = {
          businessName: business.name, // Ensure `business.name` is available
          userName: username || "Pavani Choppa", // Replace with logged-in user's name or default
          rating: document.getElementById("star-rating").value,
          review: document.getElementById("review").value,
        };
      
        // API call to submit the review
        fetch("https://business-directory-app-backend.onrender.com/api/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Review submitted successfully:", data);
      
            // Display success message
            alert("Review successfully submitted!");
      
            // Clear the form fields and reset state variables
            document.getElementById("star-rating").value = "";
            document.getElementById("review").value = "";
            
            // If you're using state to manage rating and review
            setRating(0); // Reset the rating (if a state variable is used)
            setReview(""); // Reset the review text (if a state variable is used)
      
            // Optionally, you can trigger a reload of reviews for the respective business
            if (typeof fetchReviews === "function") {
              fetchReviews(business.name);
            }
            fetchReviews();
          })
          .catch((error) => {
            console.error("Error submitting review:", error);
      
            // Display error message to the user
            alert("Failed to submit review. Please try again.");
          });
      };
      

    
      if (loading) return <div>Loading...</div>;
      if (!business) return <div>Business not found.</div>;
    
    // const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(business.location)}`;


    return (
        <div className='businessDetails'>
            <Navbar/>
            <div className="business-details-container">
                {/* Left section for business details */}
                <div className="business-details-left">
                    <h1>{business.name}</h1>
                    <img
                        src={business.imageUrl}
                        alt={business.name}
                        className="business-image"
                    />
                    <p><strong>Description:</strong> {business.description}</p>
                    <p className="rating"><strong>Rating:</strong>
                        <span className="filled-star">
                            {'★'.repeat(Math.round(business.rating))}
                        </span>
                        <span className="empty-star">
                            {'☆'.repeat(5 - Math.round(business.rating))}
                        </span>
                        <span className="numeric-rating">({business.rating ? business.rating.toFixed(1) : 'No Rating Available'})</span>
                    </p>
                    <p><strong>Location:</strong> {business.location}</p>
                </div>

                {/* Right section for live location */}
                {/* <div className="business-details-right">
                    <h2>Live Location</h2>
                    <iframe
                        src={mapUrl}
                        width="100%"
                        height="300"
                        allowFullScreen
                        loading="lazy"
                        title={`${business.name} business.Location`}
                    ></iframe>
                </div> */}
                <div className="business-details-right">
                    <h2>Live Location</h2>
                    <iframe
                        title="Live Location"
                        // src="https://www.google.com/maps?q=12%20Green%20Valley,%20Austin,%20Texas,%20USA&output=embed"
                        src={`https://www.google.com/maps?q=${business.latitude},${business.longitude}&output=embed`}
                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: '10px' }}
                        allowFullScreen
                    ></iframe>
                </div>
                
            </div>

             {/* Display reviews section */}
             {/* <div className="reviews-section">
                <h2>Customer Reviews</h2>
                {reviews.length === 0 ? (
                    <p>No reviews yet. Be the first to leave a review!</p>
                ) : (
                    reviews.map((review, index) => (
                        <div key={index} className="review-item">
                            <p><strong>{review.userName}</strong></p>
                            <p>
                                <span className="filled-star">
                                     {'★'.repeat(review.rating)}
                                 </span>
                                 <span className="empty-star">{'☆'.repeat(5 - review.rating)}</span>
                                <span className="numeric-rating">({review.rating})</span>
                            </p>
                            <p>{review.review}</p>
                        </div>
                    ))
                )}
            </div> */}

            <div class="review-section">
                    <h2>We'd Love to Hear Your Feedback!</h2>
                    <p>If you've already visited, please give your review.</p>
                    <form class="review-form" onSubmit={handleSubmit}>
                        <div class="rating-input">
                        <label for="star-rating">Rating:</label>
                        <select 
                            id="star-rating" 
                            name="rating"
                            value={rating}
                            onChange={(e) => setRating(Number(e.target.value))}
                        >
                            <option value="5">★★★★★</option>
                            <option value="4">★★★★☆</option>
                            <option value="3">★★★☆☆</option>
                            <option value="2">★★☆☆☆</option>
                            <option value="1">★☆☆☆☆</option>
                        </select>
                        </div>
                        
                        <div class="review-text">
                        <label htmlFor="review">Your Review:</label>
                        <textarea 
                            id="review" 
                            name="review" 
                            rows="5"
                            value={review}
                            onChange={(e) => setReview(e.target.value)} 
                            placeholder="Write your review here..."
                        ></textarea>
                        </div>
                        
                        <button type="submit">Submit Review</button>
                    </form>
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

export default BusinessDetails;
