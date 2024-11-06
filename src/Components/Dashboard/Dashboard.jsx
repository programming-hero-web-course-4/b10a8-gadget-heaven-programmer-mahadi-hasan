import React, { useState } from 'react';
import useTabTitle from '../../Hooks/useTabTitle';

const Dashboard = () => {
    useTabTitle('Gadget Heaven | Dashboard');
    const [isActive, setIsActive] = useState('cart');
    const handleActiveBtn = (btn) => {
        setIsActive(btn);
    }
    return (
        <div>
            <div className='bg-[#9538E2] h-[375px] p-8'>
                <h1 className='text-3xl font-bold text-white text-center'>Dashboard</h1>
                <p className='text-white text-center mt-4 mb-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className='flex justify-center gap-6'>
                    <button onClick={() => handleActiveBtn('cart')} className={`btn ${isActive === 'cart' ? 'text-[#9538E2]' : 'btn-outline text-white bg-[#9538E2] '} rounded-full text-xl font-bold py-3 px-16`}>Cart</button>
                    <button onClick={() => handleActiveBtn('wishlist')} className={`btn ${isActive === 'wishlist' ? 'text-[#9538E2]' : 'btn-outline text-white bg-[#9538E2] '} rounded-full text-xl font-bold py-3 px-16`}>Wishlist</button>
                </div>
            </div>
            <div className='w-10/12 mx-auto mt-12'>
                <div className='flex justify-between items-center'>
                    <p className='text-2xl font-bold'>Cart</p>
                    <div className='flex items-center gap-x-5'>
                        <h3 className='text-2xl font-bold'>Price:$999.9</h3>
                        <button className="btn btn-outline rounded-full btn-secondary">Sort by Price</button>
                        <button className="btn btn-active rounded-full btn-secondary">Purchase</button>
                    </div>
                </div>
                <div className='flex items-center gap-x-8 p-8 rounded-2xl shadow-xl mt-8'>
                    <div className='w-[200px] h-[124px] bg-gray-600 rounded-xl'></div>
                    <div className='space-y-4 flex-1'>
                        <h2 className='text-2xl font-semibold'>Samsung Galaxy S23 Ultra</h2>
                        <p>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                        <p>Price: $ 999.99</p>
                    </div>
                    <div className='place-items-'>
                        <button className="btn text-[#de21ec] btn-circle btn-outline">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;