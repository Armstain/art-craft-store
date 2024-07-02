import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100">
                <img src={require('./lost_astronaut.svg')} alt="Lost in Space" className="w-1/2 mb-8" />
                <h1 className="text-3xl font-bold mb-4">Oops! Page Not Found (404)</h1>
                <p className="text-lg mb-6">The page you're looking for might have been moved or deleted.</p>
                <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;