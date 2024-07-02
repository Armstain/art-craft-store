import React from 'react';

const ItemCard = ({ products }) => {
    const {
        imageUrl,
        itemName,
        subcategoryName,
        shortDescription,
        price,
        rating,
        customization,
        processingTime,
        stockStatus,
        userEmail,
        userName
    } = products
    return (
        <div>
            <figure className="relative p-5">
                <img className="h-[300px] object-cover rounded-box " src="" alt={itemName} />
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 hover:opacity-100">
                    <span className="text-white z-20 text-lg font-semibold">View Details</span>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{itemName} </h2>
                <h2 className='flex items-center gap-1'> { }</h2>
                <h2>Status: { }</h2>


                <div className="card-actions">
                    <button className="btn bg-Cobalt-Blue text-white hover:bg-Orange">View Property</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;