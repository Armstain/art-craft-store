import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UserItem from '../../components/UserItem/UserItem.jsx';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider.jsx';

const UserItemList = () => {
    const { user } = useContext(AuthContext); // Assuming `user` contains the current user's information
    const [products, setProducts] = useState([]);
    const [filterOption, setFilterOption] = useState('All'); // State to manage filter option

    useEffect(() => {
        const fetchUserItems = async () => {
            if (user && user.email) {
                const response = await fetch(`https://art-craft-store.vercel.app/items/${user.email}`);
                const items = await response.json();
                setProducts(items);
            }
        };

        fetchUserItems();
    }, [user]);

    // Function to filter products based on customization
    const filterByCustomization = (products) => {
        switch (filterOption) {
            case 'Yes':
                return products.filter(product => product.customization === "yes");
            case 'No':
                return products.filter(product => product.customization === "not");
            default:
                return products;
        }
    };

    const filteredProducts = filterByCustomization(products);

    return (
        <div>
            <h1 className='text-3xl text-center font-bold'>UserItemList :{filteredProducts.length}</h1>

            <div className='flex justify-center my-4'>
                <select className="select select-bordered w-full max-w-xs text-center" value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Yes">Customizable</option>
                    <option value="No">Not Customizable</option>
                </select>
            </div>
            {
                filteredProducts.map(product => <UserItem key={product._id} product={product} />)
            }
        </div>
    );
};

export default UserItemList;
