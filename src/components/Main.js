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
    const [profile2Props, reset2Profile] = useInput("");
    const [profile3Props, reset3Profile] = useInput("");
    const [profile4Props, reset4Profile] = useInput("");
    const [educationProps, resetEducation] = useInput("");
    const [skillProps, resetSkill] = useInput("");
    const [skill2Props, reset2Skill] = useInput("");
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
        resetSkill();
        reset2Skill();
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
        <>
            <div className="container-build" align="center">
                <button onClick={handleClickLeft} className="btn slide">
                    &laquo;
                </button>

                <Template
                    ref={componentRef}
                    name={nameProps}
                    profile={profileProps}
                    profile2={profile2Props}
                    profile3={profile3Props}
                    profile4={profile4Props}
                    education={educationProps}
                    skills={skillProps}
                    skills2={skill2Props}
                    projects={projectProps}
                    projects2={project2Props}
                    achievements={achievementProps}
                    achievements2={achievement2Props}
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
