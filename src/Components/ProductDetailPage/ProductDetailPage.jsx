import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';


const ProductDetailPage = () => {
    const { productId } = useParams();
    const id = Number(productId);
    const data = useLoaderData();
    const gadget = data.find(gadget => gadget.product_id === id);
    const { product_title, product_image, price, description, Specification, rating } = gadget;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    return (
        <div>
            {/* Heading */}
            <div className='bg-[#9538E2] h-[375px] p-8'>
                <h1 className='text-3xl font-bold text-white text-center'>Product Details</h1>
                <p className='text-white text-center mt-4 mb-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl flex items-center gap-x-[4rem] mb-16 p-8 relative bottom-56">
                <div>
                    <img className='w-[424px]'
                        src={product_image}
                        alt="Product Image" />
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-semibold">{product_title}</h2>
                    <p className='text-xl font-semibold'>Price:${price}</p>
                    <div className="badge badge-accent badge-outline">In Stock</div>
                    <p>{description}</p>
                    <p className='text-xl font-bold'>Specification:</p>
                    <ol>
                        {
                            Specification.map((list, i) => <li key={i} className='text-gray-500'>1. {list}</li>)
                        }
                    </ol>
                    <p>Rating ⭐ </p>
                    <div className='flex
                    gap-12 items-center'><div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-7"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="badge badge-lg">{rating}</div>
                    </div>
                    <div className='flex gap-6 items-center mt-6'>
                        <button className='btn text-white rounded-full bg-[#9538E2]'>
                            Add To Card
                            <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                        <button className='btn btn-outline bg-white rounded-full'>
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
