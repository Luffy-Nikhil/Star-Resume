import React from "react";
import { Link } from 'react-router-dom';

const BuildHeader = () => {

    return (
        <nav className='h-[80px] bg-[#1e293b] mx-0 flex flex-row grid grid-cols-2'>
            <div className="text-xl flex flex-row justify-start pl-8 py-4 text-white">
                Star Resume
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