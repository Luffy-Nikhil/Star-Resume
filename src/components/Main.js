import React, { useState, useRef } from 'react';
import Template from './template.js';
import {useReactToPrint} from 'react-to-print';



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
    const [educationProps, resetEducation] = useInput("");
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
        resetEducation();
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
        <>
            <div className="container-build" align="center">
                <button onClick={handleClickLeft} className="btn slide">
                    &laquo;
                </button>

                <Template
                    ref={componentRef}
                    name={nameProps}
                    profile={profileProps}
                    education={educationProps}
                    skills={skillProps}
                    projects={projectProps}
                    achievements={achievementProps}
                    certifications={certificationsProps}
                    languages={languagesProps}
                    interest={interestProps}
                    template={template}
                    
                />
                <button onClick={handleClickRight} className="btn slide">
                    &raquo;
                </button>
                <button onClick={handlePrint}>Print this out!</button>
            </div>
        </>

    );
}
