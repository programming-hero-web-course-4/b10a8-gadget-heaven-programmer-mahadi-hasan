import React, { useContext, useState } from 'react';
import { CartContext } from '../CartProvider/CartProvider';

const AddToCart = () => {
    const { cart, setCart, removeFromCart, totalPrice } = useContext(CartContext)
    const [sortedCart, setSortedCart] = useState(cart);
    const sortByPrice = () => {
        const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
        setSortedCart(sorted)
    }
    return (
        <div className='w-10/12 mx-auto mt-12'>
            <div className='flex justify-between items-center'>
                <p className='text-2xl font-bold'>Cart</p>
                <div className='flex items-center gap-x-5'>
                    <h3 className='text-2xl font-bold'>Total Price:${totalPrice.toFixed(2)}</h3>
                    <button onClick={sortByPrice} className="btn btn-outline rounded-full btn-secondary">Sort by Price</button>
                    <button className="btn btn-active rounded-full btn-secondary">Purchase</button>
                </div>
            </div>
            {
                sortedCart.map(gadget => (
                    <div key={gadget.product_id} className='flex items-center gap-x-8 p-8 rounded-2xl shadow-xl mt-8'>
                        <div>
                            <img className='w-[200px] h-[124px] rounded-xl' src={gadget.product_image} alt="" />
                        </div>
                        <div className='space-y-4 flex-1'>
                            <h2 className='text-2xl font-semibold'>{gadget.product_title}</h2>
                            <p>{gadget.description}</p>
                            <p>Price:${gadget.price}</p>
                        </div>
                        <div className='place-items-'>
                            <button onClick={() => removeFromCart(gadget.product_id)} className="btn text-[#de21ec] btn-circle btn-outline">
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
                ))
            }
        </div>
    );
};

export default AddToCart;