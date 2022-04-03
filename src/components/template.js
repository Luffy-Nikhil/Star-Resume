import React from 'react';
import TextField from '@mui/material/TextField';

const Template = React.forwardRef((props, ref) => {
    // Changed className from 'card' to fake class 'tempcard'
    return (
        <div ref={ref} className="tempcard">

            <div className={(props.template === 0) ? "card-header1" : "card-header2"} >
                <TextField className='main-heading' {...props.name} placeholder="Name" />
                <div className="person-profile">
                    <TextField className="id-link" {...props.profile} placeholder="Phone Number" />
                    <TextField className="id-link" {...props.profile2} placeholder="Email" />
                    <TextField className="id-link" {...props.profile3} placeholder="LinkedIn" />
                    <TextField className="id-link" {...props.profile4} placeholder="GitHub" />
                </div>
            </div>
            <div className="card-details">


                <h5 className="template-heading">EDUCATION</h5>
                <hr className="sec-partition" />
                <TextField
                    {...props.education}
                    type="text"
                    placeholder="Education"
                />


                <h5 className="template-heading">SKILLS</h5>
                <hr className="sec-partition" />
                <TextField
                    {...props.skills}
                    type="text"
                    placeholder="Skill One"
                />
                <TextField
                    {...props.skills2}
                    type="text"
                    placeholder="Skill Two"
                />

                <h5 className="template-heading">PROJECTS</h5>
                <hr className="sec-partition" />
                <TextField
                    {...props.projects}
                    type="text"
                    placeholder="Project One"
                />
                <TextField
                    {...props.projects2}
                    type="text"
                    placeholder="Project Two"
                />

                <h5 className="template-heading">ACHIEVEMENTS</h5>
                <hr className="sec-partition" />
                <TextField
                    {...props.achievements}
                    type="text"
                    placeholder="Achivement One"
                />
                <TextField
                    {...props.achievements2}
                    type="text"
                    placeholder="Achievement Two"
                />

                <h5 className="template-heading">CERTIFICATIONS</h5>
                <hr className="sec-partition" />
                <TextField
                    {...props.certifications}
                    type="text"
                    placeholder="Certifications One"
                />

                <h5 className="template-heading">LANGUAGES</h5>
                <hr className="sec-partition" />
                <TextField
                    {...props.languages}
                    type="text"
                    placeholder="Language Two"
                />


                <h5 className="template-heading">INTEREST</h5>
                <hr className="sec-partition" />
                <TextField
                    {...props.interest}
                    type="text"
                    placeholder="Interest One"
                />

            </div>

        </div>
    )
});



export default Template;