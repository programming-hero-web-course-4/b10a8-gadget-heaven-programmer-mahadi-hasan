import React, { useState } from 'react';
import useTabTitle from '../../Hooks/useTabTitle';
import AddToCart from '../AddToCart/AddToCart';
import AddToWishlist from '../AddToWishlist/AddToWishlist';

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
            <div className={`${isActive === 'cart' ? 'block' : 'hidden'}`}>
                <AddToCart></AddToCart>
            </div>
            <div className={`${isActive === 'wishlist' ? 'block' : 'hidden'}`}>
                <AddToWishlist></AddToWishlist>
            </div>
        </div>
    );
};

export default Dashboard;