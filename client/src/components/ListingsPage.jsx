import React, { useEffect, useState } from 'react';

const ListingsPage = () => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('emptycup-kyvd.vercel.app')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch listings');
        }
        return response.json();
      })
      .then(data => setListings(data.listings)) // assuming `listings.json` wraps it inside a "listings" key
      .catch(error => {
        console.error('Error fetching listings:', error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="listings-container">
      {error && <p>Error: {error}</p>}
      {listings.map((listing, index) => (
        <div key={index} className="listing-card">
          <h3>{listing.name}</h3>
          <p><strong>Description:</strong> {listing.description}</p>
          <p><strong>Projects:</strong> {listing.projects}</p>
          <p><strong>Experience:</strong> {listing.experience_years} years</p>
          <p><strong>Price Level:</strong> {listing.price_level}</p>
          <p><strong>Contact:</strong></p>
          <ul>
            {listing.contact_numbers.map((number, i) => (
              <li key={i}>{number}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListingsPage;
