import React, { useState } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './Navbar.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const cart = useSelector((state) => state.cart);
    const car = cart.length;
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='bg-green-500 h-[100px] text-white max-w-[100%] mx-auto flex justify-between items-center px-4'>
            {/* Logo */}
            <h1 className='text-3xl font-bold primary-color'>Prakash</h1>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                <li className='p-5 text-2xl'><Link to="/">Home</Link></li>
                
                <li className='p-5 text-2xl'>
                    <Link to="/cart">
                        <span className='text-green-200 text-3xl flex'>
                            <CgShoppingCart className='text-white' /> &nbsp;
                            <b className='text-white'>{car}</b>
                        </span>
                    </Link>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                {nav ? <AiOutlineClose size={30} /> : <><div className='d-flex gap-4'>  <Link to="/cart" className='no-underline link'>
    <span className="text-green-200 top-2 right-4 text-3xl flex">
        <CgShoppingCart className="text-white" /> &nbsp;
        <b className="text-white no-underline">{car}</b> {/* Applied fix here */}
    </span>
</Link>
<AiOutlineMenu size={30} /> </div></>}
            </div>

            {/* Mobile Navigation Sidebar */}
            <div className={nav ? 'fixed h-full left-0 top-0 w-full bg-[#202121] ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
                <h1 className='text-3xl text-green-500 m-4'>Prakash</h1>
                <AiOutlineClose className="absolute top-2 right-2 text-green-600 text-3xl cursor-pointer" onClick={handleNav} />
               

                <ul className='p-8 text-2xl'>
                    <li className='p-2'><Link to="/" onClick={handleNav}>Home</Link></li>
                  
                    <li className='p-2'><Link to="/cart" onClick={handleNav}>Cart</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
