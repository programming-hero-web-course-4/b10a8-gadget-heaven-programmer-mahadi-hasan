import React, { useContext } from 'react';
import { CartContext } from '../CartProvider/CartProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const AddToWishlist = () => {
    const { cart, addToCart, wishlist, removeFromWishlist } = useContext(CartContext);
    const handleAddToCart = (gadget) => {
        addToCart(gadget);
    }
    return (
        <div className='w-10/12 mx-auto'>
            {
                wishlist.map(gadget => (
                    <div key={gadget.product_id} className='flex items-center gap-x-8 p-8 rounded-2xl shadow-xl mt-8'>
                        <div>
                            <img className='w-[200px] h-[124px] rounded-xl' src={gadget.product_image} alt="" />
                        </div>
                        <div className='space-y-4 flex-1'>
                            <h2 className='text-2xl font-semibold'>{gadget.product_title}</h2>
                            <p>{gadget.description}</p>
                            <p>Price:${gadget.price}</p>
                            <button onClick={() => handleAddToCart(gadget)} className='btn text-white rounded-full bg-[#9538E2]' disabled={cart.some(item => item.product_id === gadget.product_id)}>
                                Add To Card
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>
                        </div>
                        <div className='place-gadgets-'>
                            <button onClick={() => removeFromWishlist(gadget.product_id)} className="btn text-[#de21ec] btn-circle btn-outline">
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

export default AddToWishlist;