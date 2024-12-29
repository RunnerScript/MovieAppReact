import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.webp';
function Navbar() {
    return (
        <>
            <div className="flex space-x-10 items-center text-blue-500 font-bold text-3xl">
                <Link className='hover:no-underline' to='/'><img className='w-[80px]' src={logo} /></Link>
                <Link className='hover:no-underline' to='/' >Home</Link>
                <Link className='hover:no-underline' to='/watchlist'>WatchList</Link>
            </div>
        </>
    )
}
export default Navbar;