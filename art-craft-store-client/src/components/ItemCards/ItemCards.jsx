import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard.jsx';

const ItemCards = () => {

    const products = useLoaderData();
    return (
        <div>
            <h1>itemCards{products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5'>
                {
                    products.map(product => <ItemCard key={product._id} products={product}></ItemCard>)
                }
            </div>

        </div>
    );
};

export default ItemCards;