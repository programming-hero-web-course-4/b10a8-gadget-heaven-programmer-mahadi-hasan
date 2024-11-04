import React from 'react';
import BannerImg from "../../assets/banner.jpg";

const Banner = () => {
    return (
        <>
            <div className='bg-[#9538E2] rounded-b-xl'>
                <div className='text-white flex justify-center items-center flex-col text-center space-y-8 pt-12 pb-64'>
                    <h1 className='text-6xl font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <p className='font-normal'>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className='text-[#9538E2] bg-white px-8 py-4 rounded-full text-xl font-bold'>Shop Now</button>
                </div>
            </div>
            <div className='w-[1110px] mx-auto border-2 rounded-3xl p-6 bg-transparent relative bottom-60'>
                <img className='h-[563px] w-full rounded-3xl' src={BannerImg} alt="Banner-Image" />
            </div>

        </>
    );
};

export default Banner;