import React, { useState, useRef } from 'react';
import Template from './template.js';
import { useReactToPrint } from 'react-to-print';
import { FcPrint } from "react-icons/fc";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import BuildHeader from './BuildHeader.js'



export default function Main() {

    const [template, setTemplate] = useState(0);
    const [icon, setIcon] = useState(true);

    const handleClickLeft = () => {
        setTemplate(0);
    }

    const handleClickRight = () => {
        setTemplate(1);
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const handleClick = () => {
        setIcon(false);
    }

    return (
        <div className='flex flex-col h-full'>

            <BuildHeader />

            <div className='bg-[#eeeeee] flex flex-row py-8' align='center'>

                <button onClick={handleClickLeft} className='flex items-center mr-8 px-8 py-2 my-auto border-4 border-[#1e293b]  hover:bg-gray-600 hover:text-white'>
                    <AiOutlineDoubleLeft size='30' />
                </button>
                <Template
                    ref={componentRef}
                    template={template}
                    icon={icon}
                />
                <button onClick={handleClickRight} className='flex items-center px-8 py-2 my-auto border-4 border-[#1e293b] bg-[#eeeeee] ml-8 hover:bg-gray-600 hover:text-white'>
                    <AiOutlineDoubleRight size='30' />
                </button>
                <button onClick={handleClick} className='flex items-center text-xl px-8 py-2 my-auto border-4 border-[#1e293b] bg-[#eeeeee] ml-8 hover:bg-gray-600 hover:text-white'>
                    Save
                </button>
                <div className='flex flex-col justify-center mx-auto'>
                    <p className='text-xl text-[#1e293b]'>Print it!</p>
                    <button onClick={handlePrint} className='flex items-center mx-auto border-4 border-[#1e293b] px-8 py-2 hover:bg-gray-600'><FcPrint size='40' /></button>
                </div>
            </div>


        </div>

    );
}
