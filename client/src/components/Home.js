import React, { useState,useEffect } from 'react';
import './Home.css'; // Import the CSS file for styling
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    
    const categories = [
        // { name:'All Categories'},
        { name: 'Electronics', imageUrl: '/images/electronics.jpg' },
        { name: 'Clothing', imageUrl: '/images/clothing.png' },
        { name: 'Groceries', imageUrl: '/images/groceries.jpg' },
        { name: 'Home Appliances', imageUrl: '/images/home-appliances.jpg' },
        { name: 'Toys', imageUrl: '/images/toys.jpg' }
      ];
     
    //   const [businesses] = useState([
    //     {
    //         id: 1,
    //         imageUrl: '/images/TechSolutions.png',
    //         name: 'Tech Solutions',
    //         category: 'Electronics',
    //         description: 'We provide the best tech solutions for businesses.',
    //         rating: 4.5,
    //         location: 'New York'
    //     },
    //     {
    //         id: 2,
    //         imageUrl: '/images/FasionHubA.png',
    //         name: 'Fashion Hub',
    //         category: 'Clothing',
    //         description: 'Trendy and fashionable clothing for all ages.',
    //         rating: 4.8,
    //         location: 'Los Angeles, USA'
    //     },
    //     {
    //         id: 3,
    //         imageUrl: '/images/grocerymart.png',
    //         name: 'Grocery Mart',
    //         category: 'Groceries',
    //         description: 'Your one-stop shop for fresh groceries.',
    //         rating: 4.2,
    //         location: 'AndhraPradesh, India'
    //     },
    //     {
    //         id: 4,
    //         imageUrl: '/images/gadget_galaxy.png',
    //         name: 'Gadget Galaxy',
    //         category: 'Electronics',
    //         description: 'One of the best spots for the latest and greatest in tech gadgets. Specializing in high-tech accessories and devices.',
    //         rating: 4.7,
    //         location: '78 Tech Plaza, New York, USA'
    //     },
    //     {
    //         id: 5,
    //         imageUrl: '/images/Styleavenue.png',
    //         name: 'Style Avenue',
    //         category: 'Clothing',
    //         description: 'A trendy clothing store that offers stylish and affordable apparel for all ages. From casual wear to office attire',
    //         rating: 4.3,
    //         location: '321 Fashion Street, Los Angeles, California, USA'
    //     },
    //     {
    //         id: 6,
    //         imageUrl: '/images/freshmart.png',
    //         name: 'FreshMart',
    //         category: 'Groceries',
    //         description: 'Fresh produce every time! Always my go-to for organic and healthy food.',
    //         rating: 4.8,
    //         location: '12 Green Valley, Austin, Texas, USA'
    //     },
    //     {
    //         id: 7,
    //         imageUrl: '/images/homeappliances.png',
    //         name: ' HomeEase Appliances',
    //         category: 'Home Appliances',
    //         description: 'A one-stop-shop for all home appliance needs, from refrigerators to washing machines, with top-quality products and excellent customer service.',
    //         rating: 4.6,
    //         location: '45 Comfort Lane, Chicago, Illinois, USA'
    //     },
    //     {
    //         id: 8,
    //         imageUrl: '/images/greenbasket.png',
    //         name: 'Green Basket Grocers',
    //         category: 'Groceries',
    //         description: 'Offers a wide variety of organic and fresh grocery products, including locally sourced vegetables and fruits',
    //         rating: 4.4,
    //         location: '34 Farm Lane, Houston, Texas, USA'
    //     },
    //     {
    //         id: 9,
    //         imageUrl: '/images/chic.png',
    //         name: 'Chic Couture',
    //         category: 'Clothing',
    //         description: 'High-end fashion retailer providing luxurious clothing with elegant and timeless designs.',
    //         rating: 4.6,
    //         location: '89 Home Tech Road, Miami, Florida, USA'
    //     },
    //     {
    //         id: 10,
    //         imageUrl: '/images/appliance.png',
    //         category: 'Home Appliances',
    //         name: 'Appliance World',
    //         description: 'Offers a wide range of home appliances, from kitchen gadgets to larger home systems at competitive prices',
    //         rating: 4.2,
    //         location: 'Los Angeles, USA'
    //     },
    //     {
    //         id: 11,
    //         imageUrl: '/images/sparkteck.png',
    //         name: 'SparkTech Innovations',
    //         category: 'Electronics',
    //         description: 'Innovative products with good quality, but sometimes a little on the pricier side.',
    //         rating: 4.2,
    //         location: '45 Innovation Street, San Francisco, California, USA'
    //     },
    //     {
    //         id: 12,
    //         imageUrl: '/images/urbonTrend.png',
    //         name: 'Urban Trendsetters',
    //         category: 'Clothing',
    //         description: 'Affordable yet fashionable! They offer great discounts often.',
    //         rating: 4.1,
    //         location: '89 Trendy Road, San Diego, California, USA'
    //     },
    //     {
    //         id: 13,
    //         imageUrl: '/images/funzonetoys.png',
    //         category: 'Toys',
    //         name: 'FunZone Toys',
    //         description: 'A playful shop that offers a variety of toys and games that keep kids entertained and engaged.',
    //         rating: 4.5,
    //         location: '34 Toy Street, Charlotte, North Carolina, USA'
    //     },
    //     // Add more business data as needed
    // ]);

    const [businesses, setBusinesses] = useState([]);
    const [filteredBusinesses, setFilteredBusinesses] = useState(businesses);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Categories'); // FIXED: Initialized state

        // Fetch data from backend
        useEffect(() => {
            axios.get('http://localhost:5000/api/businesses')
                .then(response => {
                    setBusinesses(response.data);
                    setFilteredBusinesses(response.data);
                })
                .catch(error => console.error('Error fetching businesses:', error));
        }, []);
    
    

    // Updated handleSearch Function
    const handleSearch = () => {
        const query = searchQuery.toLowerCase(); // Normalize search query
        const filtered = businesses.filter((business) => {
            return (
                (business.location?.toLowerCase() || '').includes(query) ||
                (business.category?.toLowerCase() || '').includes(query) ||
                (business.name?.toLowerCase() || '').includes(query) ||
                (business.rating?.toString() || '').includes(query)
            );
        });
        setFilteredBusinesses(filtered);
    };
     // Handle Category Click
    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
        if (categoryName === 'All Categories') {
            setFilteredBusinesses(businesses);
        } else {
            const filtered = businesses.filter((business) => business.category === categoryName);
            setFilteredBusinesses(filtered);
        }
    };
   
    // const displayedBusinesses = handleSearch()
    return (
        <div className="homepage-container">
            <Navbar/>
            <div  className='search'>
                <div className="search-section">
                    <input
                        type="text"
                        className="search-bar"
                        value={searchQuery}
                        onChange={(e) =>setSearchQuery(e.target.value)}
                        placeholder="Search by Category, rating, Loaction"
                    />
                    <button className="search-button" onClick={handleSearch}>Search</button>
                </div>
                <div className="image-section">
                    <img
                        src="Home.png" // Replace with your desired image URL
                        alt="Placeholder"
                        className="homepage-image"
                    />
                </div>
            </div>
            <div className="category-section">
                <h2>Explore Categories</h2>
                <div className="category-grid">
                {categories.map((category, index) => (
                    <div key={index} className={`category-item ${selectedCategory === category.name ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category.name)}>
                    <img src={category.imageUrl} alt={category.name} />
                    <h3>{category.name}</h3>
                    </div>
                ))}
                </div>
            </div>
            <div className="business-cards-section">
                <div className="business-cards">
                    {filteredBusinesses.length > 0 ? (
                        filteredBusinesses.map((business) => (
                            <Link
                                to={`/business/${business._id}`}
                                key={business.id}
                                style={{ textDecoration: "none" }}
                            >
                                <div className="business-card">
                                    <img
                                        src={business.imageUrl}
                                        alt={business.name}
                                        className="business-image"
                                    />
                                    <div className="business-info">
                                        <div className='business-nr'>
                                            <h3>{business.name}</h3> 
                                            <p className="rating">
                                                <span className="filled-star">
                                                    {"★".repeat(Math.round(business.rating))}
                                                </span>
                                                <span className="empty-star">
                                                    {"☆".repeat(5 - Math.round(business.rating))}
                                                </span>
                                                <span className="numeric-rating">
                                                    ({business.rating ? business.rating.toFixed(1) : "N/A"})
                                                </span>
                                            </p>
                                        </div>
                                        <p>{business.description}</p>
                                        
                                        <p><b>Location:</b> {business.location}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="no-business-found">
                            <h2>Business Not Found</h2>
                            <p>We couldn't find any businesses matching your search. Try a different keyword.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Section */}
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

export default Home;
