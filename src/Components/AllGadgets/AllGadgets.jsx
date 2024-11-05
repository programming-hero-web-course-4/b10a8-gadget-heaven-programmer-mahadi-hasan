import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';
import { Link } from 'react-router-dom';

const AllGadgets = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./gadgets.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <div>
            <h1 className='text-[40px] font-bold text-center mb-12'>Explore Cutting-Edge Gadgets</h1>
            <div className='grid grid-cols-4 gap-6'>
                {/* category buttons list */}
                <div className='col-span-1 shadow-xl p-6 rounded-2xl flex flex-col gap-12 h-96 sticky top-0'>
                    <Link className="btn btn-outline rounded-full text-xl font-extrabold text-gray-400 bg-gray-100">All Products</Link>
                    <Link className="btn btn-outline rounded-full text-xl font-extrabold text-gray-400 bg-gray-100">Laptops</Link>
                    <Link className="btn btn-outline rounded-full text-xl font-extrabold text-gray-400 bg-gray-100">Phones</Link>
                    <Link className="btn btn-outline rounded-full text-xl font-extrabold text-gray-400 bg-gray-100">Smart Watches</Link>
                </div>
                <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        data.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllGadgets;