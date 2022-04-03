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

export default function Main(props) {

    const [nameProps, resetName] = useInput("");
    const [profileProps, resetProfile] = useInput("");
    const [profile2Props, reset2Profile] = useInput("");
    const [profile3Props, reset3Profile] = useInput("");
    const [profile4Props, reset4Profile] = useInput("");
    const [educationProps, resetEducation] = useInput("");
    const [cgpaProps, resetCgpa] = useInput("");
    const [yearProps, resetYear] = useInput("");
    const [education1Props, resetEducation1] = useInput("");
    const [cgpa1Props, resetCgpa1] = useInput("");
    const [year1Props, resetYear1] = useInput("");
    const [education2Props, resetEducation2] = useInput("");
    const [cgpa2Props, resetCgpa2] = useInput("");
    const [year2Props, resetYear2] = useInput("");
    const [skillProps, resetSkill] = useInput("");
    const [skill1Props, resetSkill1] = useInput("");
    const [skill2Props, resetSkill2] = useInput("");
    const [skill3Props, resetSkill3] = useInput("");
    const [skill4Props, resetSkill4] = useInput("");
    const [skill5Props, resetSkill5] = useInput("");
    const [projectProps, resetProject] = useInput("");
    const [project2Props, reset2Project] = useInput("");
    const [achievementProps, resetAchievement] = useInput("");
    const [achievement2Props, reset2Achievement] = useInput("");
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
        resetEducation1();
        resetCgpa1();
        resetYear1();
        resetEducation2();
        resetCgpa2();
        resetYear2();
        resetSkill();
        resetSkill1();
        resetSkill2();
        resetSkill3();
        resetSkill4();
        resetSkill5();
        resetProject();
        reset2Project();
        resetAchievement();
        reset2Achievement();
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
        <div className='bg-[#eeeeee] flex flex-row'>

            
            <div className="container-build" align="center">
                
                <button onClick = {handleClickLeft} className='flex items-center mr-8 px-8 py-2 my-auto border-4 border-[#1e293b] hover:bg-gray-600 hover:text-white'>
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
                    education1={education1Props}
                    cgpa1={cgpa1Props}
                    year1={year1Props}
                    education2={education2Props}
                    cgpa2={cgpa2Props}
                    year2={year2Props}
                    skills={skillProps}
                    skills1={skill1Props}
                    skills2={skill2Props}
                    skills3={skill3Props}
                    skills4={skill4Props}
                    skills5={skill5Props}
                    projects={projectProps}
                    projects2={project2Props}
                    achievements={achievementProps}
                    achievements2={achievement2Props}
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
