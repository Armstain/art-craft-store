import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const HomeCardDetails = () => {
    const cards = useLoaderData();
    const { item_name, image, short_description, price, rating, customization, processing_time, stock_status } = cards;

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-2">
                <div className="w-full px-2">
                    <div className="rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-cover bg-center h-64 w-full" style={{ backgroundImage: `url(${image})` }} title="Cover image">
                            <div className="bg-black bg-opacity-50 flex items-center justify-center h-full">
                                <Fade>
                                    <div className="text-white text-2xl">{item_name}</div>
                                </Fade>
                            </div>
                        </div>
                        <div className="p-4">
                            <h2 className="text-2xl font-bold text-center">{item_name}</h2>
                            <p className="text-gray-700 text-base font-bold">{short_description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600 font-bold">Price: {price}</span>
                                <span className="text-gray-600 font-bold">Rating: {rating}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600 font-bold">Customization: {customization}</span>
                                <span className="text-gray-600 font-bold">Processing Time: {processing_time}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600 font-bold">Stock Status: {stock_status}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCardDetails;
