import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div className='bg-[#1e293b]'>
        <div className='flex justify-end pr-10 pt-10'> <Link to = '/'><AiOutlineHome color = 'white' size = '25'/></Link></div>
           
            <div className='w-screen h-screen flex flex-col justify-center items-center text-2xl  text-gray-200'>
                <p className='p-4 flex flex-col sm:flex-row justify-center'>
                    This is a website for creating  <p className='text-pink-600 px-2'> resumes </p>
                </p>
                <p className='flex flex-col sm:flex-row justify-center'>
                    Tech Stack used is <p className='text-pink-600 px-2'>HTML, CSS, JS, ReactJs</p>
                </p>
                <p className='p-4 flex flex-col sm:flex-row justify-center'>
                    Members :
                    <p className='text-pink-600 px-2'>  Anurag Pandey </p>
                    <p className='text-pink-600 px-2'> Nikhil Kumar Pradhan </p>
                    <p className='text-pink-600 px-2'> Tushar Sharma </p>
                </p>
            </div>
        </div>

    )
}

export default About;