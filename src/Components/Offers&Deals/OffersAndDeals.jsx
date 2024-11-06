import React from 'react';
import { Link } from 'react-router-dom';
import laptop1 from '../../assets/comfortableLaptop.webp';
import laptop2 from '../../assets/gamingLaptop.jpeg';
import phone1 from '../../assets/s24_ultra_black.png';
import smartWatch from '../../assets/smartWatch1.jpg';
const OffersAndDeals = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center text-purple-800'>Offers and Deals.</h1>
            <div className='w-10/12 mx-auto mt-8'>
                <h2 className='text-2xl font-semibold text-center'>Special Offers </h2>
                <p className='text-xl font-semibold text-center mt-2'>Explore our Exclusive offers on the latest Gadgets!</p>
                <div className='grid grid-cols-3 gap-6 mt-8 bg-white shadow-xl p-6 rounded-xl'>
                    <div className='space-y-8'>
                        <div className='p-6 rounded-3xl border'>
                            <img className='h-52 w-full rounded-2xl' src={laptop1} alt="" />
                        </div>
                        <h2 className='text-4xl font-bold'>34% Off</h2>
                        <Link to={'/'} className='btn text-3xl'>GRAB IT NOW!</Link>
                    </div>
                    <div className='space-y-8'>
                        <div className='p-6 rounded-3xl border'>
                            <img className='h-52 w-full rounded-2xl' src={phone1} alt="" />
                        </div>
                        <h2 className='text-4xl font-bold'>17% Off</h2>
                        <Link to={'/'} className='btn text-3xl'>GRAB IT NOW!</Link>
                    </div>
                    <div className='space-y-8'>
                        <div className='p-6 rounded-3xl border'>
                            <img className='h-52 w-full rounded-2xl' src={laptop2} alt="" />
                        </div>
                        <h2 className='text-4xl font-bold'>24% Off</h2>
                        <Link to={'/'} className='btn text-3xl'>GRAB IT NOW!</Link>
                    </div>
                </div>
                <div className='p-8 mt-8 border rounded-3xl bg-white shadow-xl'>
                    <div className='flex justify-center gap-4 mb-4'>
                        <div>
                            <img className='h-52 w-full rounded-2xl' src={smartWatch} alt="" />
                        </div>
                        <p className='text-2xl font-bold rounded-2xl'>+</p>
                        <div>
                            <img className='h-52 w-full' src={smartWatch} alt="" />
                        </div>
                    </div>
                    <h2 className='text-5xl font-bold text-center text-pink-800'>Buy 1 Get 1 Free!!!!!</h2>
                    <div className='flex justify-center mt-6'>
                        <Link to={'/'} className='btn text-3xl'>Buy NOW!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffersAndDeals;