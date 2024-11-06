import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect } from "react";
import { CartContext } from "../CartProvider/CartProvider";

const Header = () => {
    const location = useLocation();
    const { cart, wishlist } = useContext(CartContext)
    useEffect(() => {
        if (location.pathname === '/dashboard' || location.pathname === '/offers-deals' || location.pathname === '/statistics' || location.pathname.includes('/products/')) {
            document.getElementById('navBar').style.backgroundColor = "white";
            document.getElementById('navBar').style.color = "black";
        }
        else {
            document.getElementById('navBar').style.backgroundColor = "#9538E2";
            document.getElementById('navBar').style.color = "white";
        }
    }, [location])
    const Links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
        <li><NavLink to={'/offers-deals'}>Offers & Deals</NavLink></li>
    </>
    return (
        <div id="navBar" className="navbar rounded-t-xl w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-4">
                    <div className="btn text-black bg-white rounded-full p-3 flex justify-center items-center border">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <div className="badge badge-secondary">{cart.length}</div>
                    </div>
                    <div className="btn text-black bg-white rounded-full p-3 flex justify-center items-center border">
                        <FontAwesomeIcon icon={faHeart} />
                        <div className="badge badge-secondary">{wishlist.length}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;