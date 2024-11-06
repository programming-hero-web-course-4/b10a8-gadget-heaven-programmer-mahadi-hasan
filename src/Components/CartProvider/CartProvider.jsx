import React, { createContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const addToCart = (gadget) => {
        if (!cart.some(item => item.product_id === gadget.product_id)) {
            setCart(prevCart => [...prevCart, gadget])
            toast.success(`${gadget.product_title} added to cart.`)
        }
    }
    const addToWishlist = (gadget) => {
        if (!wishlist.some(item => item.product_id === gadget.product_id)) {
            setWishlist(prevWishlist => [...prevWishlist, gadget])
            toast.success(`${gadget.product_title} added to wishlist.`)
        }
    }
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.product_id !== productId))
        toast.info('Product has been removed!')
    }
    const removeFromWishlist = (productId) => {
        setWishlist(prevWishlist => prevWishlist.filter(item => item.product_id !== productId))
        toast.info('Product has been removed!')
    }
    useEffect(() => {
        const newTotalPrice = cart.reduce((total, item) => total + item.price, 0)
        setTotalPrice(newTotalPrice);
    }, [cart])
    return (
        <CartContext.Provider value={{ cart, addToCart, setCart, wishlist, addToWishlist, removeFromCart, removeFromWishlist, totalPrice, setTotalPrice }}>
            {children}
            <ToastContainer></ToastContainer>
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };