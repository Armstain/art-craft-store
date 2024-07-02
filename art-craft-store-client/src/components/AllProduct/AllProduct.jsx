import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProduct = ({ item }) => {
    const { imageUrl, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus } = item;
    const defaultImageUrl = "https://via.placeholder.com/300";

    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch items from your backend
        fetch('/allItems')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching items:', error));
    }, []);


    return (
        <Link to={`/updateProduct/${item._id}`}>
            <div className="flex flex-col lg:flex-row gap-4 p-2 border-solid-2 border-2 rounded-box sm:text-sm">
                <div className="w-full lg:w-1/2">
                    <figure>
                        <img className='w-full h-64 object-cover rounded-box' src={imageUrl || defaultImageUrl} alt={itemName} />
                    </figure>
                </div>
                <div className="w-full lg:w-1/2 p-4">
                    <h2 className="text-2xl font-bold">{itemName}</h2>
                    <p className="text-lg">{shortDescription}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-600">Subcategory: {subcategoryName}</span>
                        <span className="text-gray-600">Rating: {rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-600">Price: {price}</span>
                        <span className="text-gray-600">Customization: {customization}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-600">Processing Time: {processingTime}</span>
                        <span className="text-gray-600">Stock Status: {stockStatus}</span>
                    </div>

                </div>
            </div></Link>
    );
};

export default AllProduct;