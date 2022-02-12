import React from 'react';
import TextField from '@mui/material/TextField';

const Template = (props) => {
    return (
        <div className="card">

            <div className = { (props.template === 0) ? "card-header1" : "card-header2" } >
                <TextField className='main-heading' value={props.name} placeholder="Name" />
                <div className="person-profile">
                    <TextField className="id-link" value={props.profile} placeholder="Phone Number" />
                    <TextField className="id-link" value={props.profile} placeholder="Email" />
                    <TextField className="id-link" value={props.profile} placeholder="LinkedIn" />
                    <TextField className="id-link" value={props.profile} placeholder="GitHub" />
                </div>
            </div>
            <div className="card-details">


                <h5 className="template-heading">EDUCATION</h5>
                <hr className="sec-partition" />
                <TextField
                    value={props.education}
                    type="text"
                    placeholder="Education"
                />


                <h5 className="template-heading">SKILLS</h5>
                <hr className="sec-partition" />
                <TextField
                    value={props.skills}
                    type="text"
                    placeholder="Skill One"
                />
                <TextField
                    value={props.skills}
                    type="text"
                    placeholder="Skill Two"
                />

                <h5 className="template-heading">PROJECTS</h5>
                <hr className="sec-partition" />
                <TextField
                    value={props.projects}
                    type="text"
                    placeholder="Project One"
                />
                <TextField
                    value={props.projects}
                    type="text"
                    placeholder="Project Two"
                />

                <h5 className="template-heading">ACHIEVEMENTS</h5>
                <hr className="sec-partition" />
                <TextField
                    value={props.achievements}
                    type="text"
                    placeholder="Achivement One"
                />
                <TextField
                    value={props.achievements}
                    type="text"
                    placeholder="Achievement Two"
                />

                <h5 className="template-heading">CERTIFICATIONS</h5>
                <hr className="sec-partition" />
                <TextField
                    value={props.certifications}
                    type="text"
                    placeholder="Certifications One"
                />

                <h5 className="template-heading">LANGUAGES</h5>
                <hr className="sec-partition" />
                <TextField
                    value={props.languages}
                    type="text"
                    placeholder="Language Two"
                />


                <h5 className="template-heading">INTEREST</h5>
                <hr className="sec-partition" />
                <TextField
                    value={props.interest}
                    type="text"
                    placeholder="Interest One"
                />

            </div>

        </div>
    )
}

export default Template;