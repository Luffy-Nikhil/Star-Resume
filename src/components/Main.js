import React, { useState } from 'react';
import TextField from '@mui/material/TextField';


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


    return (

        <form>
            <div className="container-build" align="center">
                <div className="card">
                    <div className="card-header">
                        <TextField className='main-heading' {...nameProps} placeholder="Name" />
                        <div className="person-profile">
                            <TextField className="id-link" {...profileProps} placeholder="Phone Number"/>
                            <TextField className="id-link" {...profileProps} placeholder="Email"/>
                            <TextField className="id-link" {...profileProps} placeholder="LinkedIn"/>
                            <TextField className="id-link" {...profileProps} placeholder="GitHub"/>
                        </div>
                    </div>
                    <div className="card-details">


                        <h5 className="template-heading">EDUCATION</h5>
                        <hr className="sec-partition" />
                        <TextField
                            {...educationProps}
                            type="text"
                            placeholder="Education"
                        />


                        <h5 className="template-heading">SKILLS</h5>
                        <hr className="sec-partition" />
                        <TextField
                            {...skillProps}
                            type="text"
                            placeholder="Skill One"
                        />
                        <TextField
                            {...skillProps}
                            type="text"
                            placeholder="Skill Two"
                        />

                        <h5 className="template-heading">PROJECTS</h5>
                        <hr className="sec-partition" />
                        <TextField
                            {...projectProps}
                            type="text"
                            placeholder="Project One"
                        />
                        <TextField
                            {...projectProps}
                            type="text"
                            placeholder="Project Two"
                        />

                        <h5 className="template-heading">ACHIEVEMENTS</h5>
                        <hr className="sec-partition" />
                        <TextField
                            {...achievementProps}
                            type="text"
                            placeholder="Achivement One"
                        />
                        <TextField
                            {...achievementProps}
                            type="text"
                            placeholder="Achievement Two"
                        />

                        <h5 className="template-heading">CERTIFICATIONS</h5>
                        <hr className="sec-partition" />
                        <TextField
                            {...certificationsProps}
                            type="text"
                            placeholder="Certifications One"
                        />

                        <h5 className="template-heading">LANGUAGES</h5>
                        <hr className="sec-partition" />
                        <TextField
                            {...languagesProps}
                            type="text"
                            placeholder="Language Two"
                        />


                        <h5 className="template-heading">INTEREST</h5>
                        <hr className="sec-partition" />
                        <TextField
                            {...interestProps}
                            type="text"
                            placeholder="Interest One"
                        />

                    </div>

                </div>
            </div>
        </form>

    );
}
