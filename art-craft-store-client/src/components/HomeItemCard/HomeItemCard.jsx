import React from 'react';
import { Link } from 'react-router-dom';

const HomeItemCard = ({ product }) => {
    const {
        _id,
        image,
        item_name,
        price,
        rating,
        customization,
        stockStatus,
    } = product;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 max-w-sm mx-auto transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <Link to={`/homeCardDetails/${_id}`} className="block h-full">
                <figure className="relative p-5">
                    <img className="h-[300px] object-cover rounded-box " src={image} alt={item_name} />
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 hover:opacity-100">
                        <span className="text-white z-20 text-lg font-semibold">View Details</span>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item_name}</h2>
                    <p className="text-gray-600">{customization}</p>
                    <p className="text-gray-600">Price: ${price}</p>
                    <p className="text-gray-600">Rating: {rating}</p>
                    <p className="text-gray-600">Stock Status: {stockStatus}</p>
                </div>
                <div className="card-actions">
                    <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View Details
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default HomeItemCard;
