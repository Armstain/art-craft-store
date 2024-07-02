import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeItemCard from '../HomeItemCard/HomeItemCard.jsx';

const HomeItemCards = () => {

    const HomeItemProducts = useLoaderData();

    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5 mt-10'>
                {
                    HomeItemProducts.map(product => <HomeItemCard key={product._id} product={product}></HomeItemCard>)
                }
            </div>

        </div>
    );
};

export default HomeItemCards;