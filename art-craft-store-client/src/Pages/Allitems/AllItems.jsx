import React, { useEffect, useState } from 'react';
import AllProduct from '../../components/AllProduct/AllProduct.jsx';

const AllItems = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        const fetchAllItems = async () => {
            const response = await fetch('https://art-craft-store.vercel.app/allItems');
            const allItems = await response.json();
            setItems(allItems);
        };

        fetchAllItems();
    }, []);
    return (
        <div>
            <h1 className='text-3xl text-center font-bold'>All Items</h1>
            {
                items.map(item => <AllProduct key={item._id} item={item} ></AllProduct>)
            }
        </div>
    );
};

export default AllItems;