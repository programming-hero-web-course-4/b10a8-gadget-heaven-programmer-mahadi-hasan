import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';
import { Link } from 'react-router-dom';

const AllGadgets = () => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState('All Products');
    const [activeCategory, setActiveCategory] = useState('All Products');
    useEffect(() => {
        fetch('./gadgets.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    const handleCategoryBtn = (category) => {
        setCategory(category);
    }
    const filteredData = category === 'All Products' ? data : data.filter(gadget => gadget.category === category);
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    }
    return (
        <div>
            <h1 className='text-[40px] font-bold text-center mb-12'>Explore Cutting-Edge Gadgets</h1>
            <div className='grid grid-cols-4 gap-6'>
                {/* category buttons list */}
                <div className='col-span-1 shadow-xl p-6 rounded-2xl flex flex-col gap-y-6 h-96 sticky top-0'>
                    <Link onClick={() => { handleCategoryBtn('All Products'); handleCategoryClick('All Products') }} className={`btn btn-outline rounded-full text-xl font-extrabold ${activeCategory === 'All Products' ? 'text-white bg-[#9538E2]' : 'text-gray-400 bg-gray-100'}`}>All Products</Link>

                    <Link onClick={() => { handleCategoryBtn('laptops'); handleCategoryClick('laptops') }} className={`btn btn-outline rounded-full text-xl font-extrabold ${activeCategory === 'laptops' ? 'text-white bg-[#9538E2]' : 'text-gray-400 bg-gray-100'}`}>Laptops</Link>

                    <Link onClick={() => { handleCategoryBtn('phones'); handleCategoryClick('phones') }} className={`btn btn-outline rounded-full text-xl font-extrabold ${activeCategory === 'phones' ? 'text-white bg-[#9538E2]' : 'text-gray-400 bg-gray-100'}`}>Phones</Link>

                    <Link onClick={() => { handleCategoryBtn('smart watches'); handleCategoryClick('smart watches') }} className={`btn btn-outline rounded-full text-xl font-extrabold ${activeCategory === 'smart watches' ? 'text-white bg-[#9538E2]' : 'text-gray-400 bg-gray-100'}`}>Smart Watches</Link>

                    <Link onClick={() => { handleCategoryBtn('chargers'); handleCategoryClick('chargers') }} className={`btn btn-outline rounded-full text-xl font-extrabold ${activeCategory === 'chargers' ? 'text-white bg-[#9538E2]' : 'text-gray-400 bg-gray-100'}`}>Chargers</Link>
                </div>
                <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        filteredData.length === 0 ? <h1 className='col-span-3 text-6xl font-bold text-violet-800 text-center'>No Data Here</h1> : filteredData.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllGadgets;