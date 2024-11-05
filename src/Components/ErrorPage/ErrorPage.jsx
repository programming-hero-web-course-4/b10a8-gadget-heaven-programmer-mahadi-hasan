import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen gap-y-8'>
            <h1 className='text-7xl font-extrabold text-center text-[#9538E2]'>Error 404 Not Found 🔍</h1>
            <Link to={'/'} className='btn'>Go Back</Link>
        </div>
    );
};

export default ErrorPage;