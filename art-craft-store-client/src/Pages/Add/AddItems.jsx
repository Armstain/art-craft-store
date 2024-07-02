import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider.jsx';

const AddItems = () => {
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        imageUrl: '',
        itemName: '',
        subcategoryName: '',
        shortDescription: '',
        price: '',
        rating: '',
        customization: '',
        processingTime: '',
        stockStatus: '',
        userEmail: user?.email,
        userName: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        fetch('https://art-craft-store.vercel.app/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4 ">
                <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="text"
                            name="imageUrl"
                            id="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">Item Name</label>
                        <input
                            type="text"
                            name="itemName"
                            id="itemName"
                            value={formData.itemName}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="subcategoryName" className="block text-sm font-medium text-gray-700">Subcategory Name</label>
                        <input
                            type="text"
                            name="subcategoryName"
                            id="subcategoryName"
                            value={formData.subcategoryName}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">Short Description</label>
                        <textarea
                            name="shortDescription"
                            id="shortDescription"
                            value={formData.shortDescription}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                        <input
                            type="number"
                            name="rating"
                            id="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="customization" className="block text-sm font-medium text-gray-700">Customization</label>
                        <select
                            name="customization"
                            id="customization"
                            value={formData.customization}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="processingTime" className="block text-sm font-medium text-gray-700">Processing Time</label>
                        <input
                            type="text"
                            name="processingTime"
                            id="processingTime"
                            value={formData.processingTime}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="stockStatus" className="block text-sm font-medium text-gray-700">Stock Status</label>
                        <select
                            name="stockStatus"
                            id="stockStatus"
                            value={formData.stockStatus}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select</option>
                            <option value="In stock">In Stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">User Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            value={formData.userEmail}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name</label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="col-span-2">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddItems;