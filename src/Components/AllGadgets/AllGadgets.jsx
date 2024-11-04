import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const AllGadgets = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./gadgets.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <div>
            <h1 className='text-[40px] font-bold text-center'>Explore Cutting-Edge Gadgets</h1>
            <div>
                {/* category buttons list */}
                <div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        data.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllGadgets;