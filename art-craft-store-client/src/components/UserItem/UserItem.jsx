import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserItem = ({ product }) => {
    const { _id, imageUrl, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus } = product;


    const defaultImageUrl = "https://via.placeholder.com/300";

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://art-craft-store.vercel.app/items/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your data has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
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
                    <span className="text-gray-600 font-bold">Subcategory: {subcategoryName}</span>
                    <span className="text-gray-600 font-bold">Rating: {rating}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-bold">Price: {price}</span>
                    <span className="text-gray-600 font-bold">Customization: {customization}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-bold">Processing Time: {processingTime}</span>
                    <span className="text-gray-600 font-bold">Stock Status: {stockStatus}</span>
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={() => handleDelete(_id)} className='btn bg-red-500 text-white mr-2'>Delete</button>
                    <Link to={`/updateItem/${_id}`} className='btn bg-blue-500 text-white'>Update</Link>
                </div>
            </div>
        </div>
    );
};

export default UserItem;
