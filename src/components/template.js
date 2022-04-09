import React, { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { AiFillDelete } from 'react-icons/ai';


const Template = React.forwardRef((props, ref) => {
    // Changed className from 'card' to fake class 'tempcard'

    const [eduInputList, setEduInputList] = useState([
        { edu: "", cgpa: "", year: "" },
    ]);

    const [skillInputList, setSkillInputList] = useState([
        { skill: '' }
    ]);

    const handleEduChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...eduInputList];
        list[index][name] = value;
        setEduInputList(list);
    }
    const handleEduDeleteClick = (index) => {
        const list = [...eduInputList];
        list.splice(index, 1);
        setEduInputList(list);
    }
    const handleEduAddClick = () => {
        setEduInputList([...eduInputList, { edu: '', cgpa: '', year: '' }]);
    }

    const handleSkillChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...skillInputList];
        list[index][name] = value;
        setSkillInputList(list);
    }
    const handleSkillDeleteClick = (index) => {
        const list = [...skillInputList];
        list.splice(index, 1);
        setSkillInputList(list);
    }
    const handleSkillAddClick = () => {
        setSkillInputList([...skillInputList, { skill: '' }]);
    }


    return (
        <div ref={ref} className="border-4 border-slate-600 bg-[white] shadow-xl h-[1585px]">

            <div className={(props.template === 0) ? 'bg-[#506d84] text-white flex flex-col' : 'bg-[#668925] text-white flex flex-col'} >
                <div className="text-3xl py-4 px-4 flex justify-start">
                    <input type="text" placeholder="Name" {...props.name} className={(props.template === 0) ? 'bg-[#506d84] px-3 py-3 placeholder-white  text-white border-0 outline-none ' : 'bg-[#668925] px-3 py-3 placeholder-white  text-white border-0 outline-none '} />
                </div>

                <div className=' bg-slate-800 py-3 px-4 flex flex-row'>
                    <input type="text" placeholder="Phone Number" {...props.profile} className="px-3 py-3 placeholder-white bg-slate-800 text-white border-0 outline-none " />
                    <input type="text" placeholder="Email" {...props.profile2} className="px-3 py-3 placeholder-white bg-slate-800 text-white border-0 outline-none " />
                    <input type="text" placeholder="LinkedIn" {...props.profile3} className="px-3 py-3 placeholder-white bg-slate-800 text-white border-0 outline-none " />
                    <input type="text" placeholder="Github" {...props.profile4} className="px-3 py-3 placeholder-white bg-slate-800 text-white border-0 outline-none " />

                </div>
            </div>
            <div className=" py-4 px-8">


                <h5 className='text-2xl flex flex-start font-bold font-serif border-b-2 border-black pt-4'>EDUCATION</h5>

                {
                    eduInputList.map((item, ind) => {
                        return (
                            <div className='flex flex-row text-xl pt-2 pb-4'>

                                <div key={ind} className='flex flex-col grid grid-cols-3'>
                                    <input type="text" placeholder="Edu" name='edu' value={eduInputList[ind].edu} onChange={e => handleEduChange(e, ind)} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none " />
                                    <input type="text" placeholder='cgpa' name='cgpa' value={eduInputList[ind].cgpa} onChange={e => handleEduChange(e, ind)} className='px-3 py-3 bg-white placeholder-gray-600 text-gray-900 border-0 outline-none' />
                                    <input type="text" placeholder='year' name='year' value={eduInputList[ind].year} onChange={e => handleEduChange(e, ind)} className='px-3 py-3 bg-white placeholder-gray-600 text-gray-900 border-0 outline-none' />
                                </div>
                                {
                                    eduInputList.length !== 1 &&
                                    <div className='py-3 px-3'><AiFillDelete size='30' onClick={() => handleEduDeleteClick(ind)} /></div>
                                }

                                {
                                    eduInputList.length - 1 === ind &&
                                    <div className='py-3 px-3'><IoIosAddCircle size="30" onClick={handleEduAddClick} /></div>
                                }

                            </div>
                        )

                    })
                }


                <h5 className='text-2xl flex flex-start flex-row font-bold font-serif border-b-2 border-black pt-4'>SKILLS</h5>
                <div className='flex flex-row grid grid-cols-2' >
                    {
                        skillInputList.map((item, ind) => {
                            return (

                                <div className='flex flex-row'>
                                    <input key={ind} type="text" placeholder="skill" name="skill" value={skillInputList[ind].skill} onChange={e => handleSkillChange(e, ind)} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                                    {
                                        skillInputList.length !== 1 &&
                                        <div className='py-3 px-3'><AiFillDelete size='30' onClick={() => handleSkillDeleteClick(ind)} /></div>
                                    }

                                    {
                                        skillInputList.length - 1 === ind &&
                                        <div className='py-3 px-3'><IoIosAddCircle size="30" onClick={handleSkillAddClick} /></div>
                                    }
                                </div>


                            )
                        })
                    }
                </div>




                <h5 className='text-2xl flex flex-start font-bold font-serif border-b-2 border-black pt-4'>PROJECTS</h5>

                <div className='grid grid-cols-2'>
                    <div className='flex flex-col'>
                        <input type="text" placeholder="Project1" {...props.projects} className="px-2 py-2 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                        <textarea type="text" placeholder="Desc1" {...props.desc} className="px-2 py-2 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                    </div>

                </div>



                <h5 className='text-2xl flex flex-start font-bold font-serif border-b-2 border-black pt-4'>ACHIEVEMENTS</h5>
                <div className='flex flex-col items-start'>
                    <div>
                        <input type="text" placeholder="Achievement1" {...props.achievements} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                    </div>

                </div>

                <h5 className='text-2xl flex flex-start font-bold font-serif border-b-2 border-black pt-4'>CERTIFICATIONS</h5>
                <div className='flex flex-col items-start'>
                    <div>
                        <input type="text" placeholder="certification1" {...props.certifications} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                    </div>

                </div>

                <h5 className='text-2xl flex flex-start font-bold font-serif border-b-2 border-black pt-4'>INTEREST</h5>

                <div className='flex flex-col items-start pt-4'>
                    <div>
                        <input type="text" placeholder="interest1" {...props.interest} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                    </div>

                </div>


            </div >

        </div >
    )
});



export default Template;