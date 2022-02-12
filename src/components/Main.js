import React, { useState } from 'react';
import Template from './template.js';

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
    return (
        <>
            <div className="container-build" align="center">
                <button onClick={handleClickLeft} className="btn slide">
                    &laquo;
                </button>
                <Template
                    name={nameProps}
                    profile={profileProps}
                    education={educationProps}
                    skills={skillProps}
                    projects={projectProps}
                    achievements={achievementProps}
                    certifications={certificationsProps}
                    languages={languagesProps}
                    interest={interestProps}
                    template = {template}
                />
                <button onClick = {handleClickRight} className="btn slide">
                    &raquo;
                </button>
            </div>
        </>

    );
}
