import React from 'react';
import TextField from '@mui/material/TextField';

const Template = React.forwardRef((props, ref) => {
    // Changed className from 'card' to fake class 'tempcard'
    // bg-[#FC4F4F] 
    return (
        <div ref={ref} className="border-4 border-slate-600 shadow-xl h-[1585px]">

            <div className={(props.template === 0) ? 'bg-[#506d84] text-white flex flex-col' : 'bg-[#668925] text-white flex flex-col'} >
                {/* <div>
                    <TextField className='main-heading' {...props.name} placeholder="Name" />
                </div> */}
                <div className="text-3xl py-4 px-4 flex justify-start">
                    <input type="text" placeholder="Name" {...props.name} className={(props.template === 0) ? 'bg-[#506d84] px-3 py-3 placeholder-white  text-white border-0 outline-none ' : 'bg-[#668925] px-3 py-3 placeholder-white  text-white border-0 outline-none '} />
                </div>

                <div className=' bg-slate-800 py-3 px-4 flex flex-row'>
                    {/* <TextField text-color='white' {...props.profile} placeholder="Phone Number" />
                    <TextField text-color='white' {...props.profile2} placeholder="Email" />
                    <TextField text-color='white' {...props.profile3} placeholder="LinkedIn" />
                    <TextField text-color='white' {...props.profile4} placeholder="GitHub" /> */}
                    <input type="text" placeholder="Phone Number" {...props.profile} className="px-3 py-3 placeholder-white bg-slate-800 text-white border-0 outline-none " />
                    <input type="text" placeholder="Email" {...props.profile2} className="px-3 py-3 placeholder-white bg-slate-800 text-white border-0 outline-none " />
                    <input type="text" placeholder="LinkedIn" {...props.profile3} className="px-3 py-3 placeholder-white bg-slate-800 text-white border-0 outline-none " />
                    <input type="text" placeholder="Github" {...props.profile4} className="px-3 py-3 placeholder-white bg-slate-800 text-white border-0 outline-none " />

                </div>
            </div>
            <div className="bg-white py-4 px-8">


                <h5 className='text-2xl flex flex-start font-bold font-serif border-b-2 border-black pt-4'>EDUCATION</h5>

                <div className='flex flex-col text-xl pt-2 pb-4'>
                    <div className='flex flex-row grid grid-cols-3'>
                        <input type="text" placeholder="Edu1" {...props.education} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none " />
                        <input type="text" placeholder='cgpa' {...props.cgpa} className='px-3 py-3 bg-white placeholder-gray-600 text-gray-900 border-0 outline-none' />
                        <input type="text" placeholder='year' {...props.year} className='px-3 py-3 bg-white placeholder-gray-600 text-gray-900 border-0 outline-none' />
                    </div>
                    <div className='flex flex-row grid grid-cols-3'>
                        <input type="text" placeholder="Edu2" {...props.education1} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none " />
                        <input type="text" placeholder='cgpa/%' {...props.cgpa1} className='px-3 py-3 bg-white placeholder-gray-600 text-gray-900 border-0 outline-none' />
                        <input type="text" placeholder='year' {...props.year1} className='px-3 py-3 bg-white placeholder-gray-600 text-gray-900 border-0 outline-none' />
                    </div>
                    <div className='flex flex-row grid grid-cols-3'>
                        <input type="text" placeholder="Edu3" {...props.education2} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none " />
                        <input type="text" placeholder='cgpa/%' {...props.cgpa2} className='px-3 py-3 bg-white placeholder-gray-600 text-gray-900 border-0 outline-none' />
                        <input type="text" placeholder='year' {...props.yea2r} className='px-3 py-3 bg-white placeholder-gray-600 text-gray-900 border-0 outline-none' />
                    </div>
                </div>

                <h5 className='text-2xl flex flex-start font-bold font-serif border-b-2 border-black pt-4'>SKILLS</h5>
                <div className='grid grid-cols-3'>
                    <input type="text" placeholder="skill1" {...props.skills} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                    <input type="text" placeholder="skill2" {...props.skills1} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none text-xl " />
                    <input type="text" placeholder="skill3" {...props.skills2} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none text-xl " />
                    <input type="text" placeholder="skill4" {...props.skills3} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none text-xl " />
                    <input type="text" placeholder="skill5" {...props.skills4} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none text-xl " />
                    <input type="text" placeholder="skill6" {...props.skills5} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none text-xl " />
                </div>


                <h5 className='text-2xl flex flex-start font-bold font-serif border-b-2 border-black pt-4'>PROJECTS</h5>

                <div className='grid grid-cols-2'>
                    <div className='flex flex-col'>
                        <input type="text" placeholder="Project1" {...props.projects} className="px-2 py-2 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                        <textarea type="text" placeholder="Desc1" {...props.desc} className="px-2 py-2 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                    </div>
                    <div className='flex flex-col'>
                        <input type="text" placeholder="Project2" {...props.projects1} className="px-2 py-2 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                        <textarea type="text" placeholder="Desc2" {...props.desc1} className="px-2 py-2 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                    </div>
                    <div className='flex flex-col'>
                        <input type="text" placeholder="Project3" {...props.projects2} className="px-2 py-2 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                        <textarea type="text" placeholder="Desc3" {...props.desc2} className="px-2 py-2 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                    </div>
                </div>

               

                <h5 className='text-2xl flex flex-start font-bold font-serif border-b-2 border-black pt-4'>ACHIEVEMENTS</h5>
                <div className='flex flex-col items-start'>
                    <div>
                        <input type="text" placeholder="Achievement1" {...props.achievements} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                    </div>
                    <div>
                        <input type="text" placeholder="Achievement2" {...props.achievements2} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                    </div>
                    <div>
                        <input type="text" placeholder="Achievement2" {...props.achievements2} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                    </div>
                </div>

                <h5 className='text-2xl flex flex-start font-bold font-serif border-b-2 border-black pt-4'>CERTIFICATIONS</h5>
                <div className='flex flex-col items-start'>
                    <div>
                        <input type="text" placeholder="certification1" {...props.certifications} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                    </div>
                    <div>
                        <input type="text" placeholder="certification2" {...props.certifications2} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                    </div>
                </div>
            
                <h5 className='text-2xl flex flex-start font-bold font-serif border-b-2 border-black pt-4'>INTEREST</h5>
                
                <div className='flex flex-col items-start pt-4'>
                    <div>
                        <input type="text" placeholder="interest1" {...props.interest} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                    </div>
                    <div>
                        <input type="text" placeholder="interest2" {...props.interest2} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                    </div>
                </div>
             

            </div>

        </div>
    )
});



export default Template;