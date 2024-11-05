import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const { product_id, product_title, product_image, price } = gadget;
    return (
        <div className="shadow-xl p-5 rounded-2xl">
            <div className='flex justify-center'>
                <img className='h-52' src={product_image} alt={product_title} />
            </div>
            <div className='mt-6 mb-4'>
                <h3 className='text-2xl font-semibold'>{product_title}</h3>
                <p className='text-xl font-medium text-gray-600'>Price:${price}</p>
            </div>
            <Link to={`/products/${product_id}`} className="btn btn-outline rounded-full text-xl font-semibold text-[#9538E2]">View Details</Link>
        </div>
    );
};

export default Gadget;