import React from "react";
import { Link } from 'react-router-dom';
import Logo from './images/LogoMakr-8IrTLl.png';

const BuildHeader = () => {

    return (
        <nav className='h-[80px] bg-[#1e293b] mx-0 flex flex-row grid grid-cols-2'>
            <div className="flex flex-row">
                <div className="px-2 my-auto">
                    <img src={Logo} alt="logo" style={{ width: '50px' }}></img>
                </div>
                <div className="text-xl flex flex-row justify-start pl-2 py-6 text-white">
                    Star Resume
                </div>
            </div>

            <div className="text-xl text-white flex flex-row justify-end  p-6 pr-10">
                <div className='pr-8'>
                    <Link to='/'>Home</Link>
                </div>
                <div>
                    <Link to='/about'>About</Link>
                </div>
            </div>
        </nav>
    )
}

export default BuildHeader;