import React, { useState, useRef } from 'react';
import Template from './template.js';
import {useReactToPrint} from 'react-to-print';
import { FcPrint } from "react-icons/fc";
import { AiOutlineDoubleRight , AiOutlineDoubleLeft } from "react-icons/ai";


const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return [
        { value, onChange: e => setValue(e.target.value) },
        () => setValue(initialValue)
    ];
};

export default function Main() {

    const [nameProps, resetName] = useInput("");

    const [profileProps, resetProfile] = useInput("");
    const [profile2Props, reset2Profile] = useInput("");
    const [profile3Props, reset3Profile] = useInput("");
    const [profile4Props, reset4Profile] = useInput("");

    const [educationProps, resetEducation] = useInput("");
    const [cgpaProps, resetCgpa] = useInput("");
    const [yearProps, resetYear] = useInput("");
   
    const [skillProps, resetSkill] = useInput("");
   
    const [projectProps, resetProject] = useInput("");
   
    const [achievementProps, resetAchievement] = useInput("");
   
    const [certificationsProps, resetCertifications] = useInput("");

    const [languagesProps, resetLanugages] = useInput("");

    const [interestProps, resetInterest] = useInput("");


    const submit = event => {
        event.preventDefault();

        resetName();

        resetProfile();
        reset2Profile();
        reset3Profile();
        reset4Profile();

        resetEducation();
        resetCgpa();
        resetYear();
       
        resetSkill();
        
        resetProject();
       
        resetAchievement();
       
        resetCertifications();

        resetLanugages();

        resetInterest();
    };
    const [template, setTemplate] = useState(0);
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

    return (
        <div className='bg-[#eeeeee] flex flex-row h-full'>

            
            <div className='border-t-[#1e293b] border-r-[#1e293b] border-l-[#1e293b] bg-[#eeeeee] flex flex-row py-8' align="center">
                
                <button onClick = {handleClickLeft} className='flex items-center mr-8 px-8 py-2 my-auto border-4 border-[#1e293b]  hover:bg-gray-600 hover:text-white'>
                    <AiOutlineDoubleLeft size='30' />
                </button>
                   

                <Template
                    ref={componentRef}

                    name={nameProps}

                    profile={profileProps}
                    profile2={profile2Props}
                    profile3={profile3Props}
                    profile4={profile4Props}

                    education={educationProps}
                    cgpa={cgpaProps}
                    year={yearProps}
                    
                    skills={skillProps}
                   
                    projects={projectProps}
                   
                    achievements={achievementProps}
                    
                    certifications={certificationsProps}

                    languages={languagesProps}

                    interest={interestProps}

                    template={template}
                    
                />
                <button onClick = {handleClickRight} className='flex items-center px-8 py-2 my-auto border-4 border-[#1e293b] ml-8 hover:bg-gray-600 hover:text-white'>
                    <AiOutlineDoubleRight size='30' />
                </button>    
            </div>
            <div className='flex flex-col justify-center mx-auto bg-[#eeeeee]'>
                <p className='text-xl text-[#1e293b]'>Print it!</p>
                <button onClick={handlePrint} className='flex items-center mx-auto border-4 border-[#1e293b] px-8 py-2 hover:bg-gray-600'><FcPrint size = '40'/></button>
            </div>
    
        </div>

    );
}
