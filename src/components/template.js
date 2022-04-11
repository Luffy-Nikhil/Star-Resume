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

    const [projectInputList, setProjectInputList] = useState([
        { project: '', desc: '' }
    ]);

    const [achievementList, setAchievementList] = useState([
        { achievement: '' }
    ]);

    const [certificationList, setCertificationList] = useState([
        { certification: '' }
    ]);

    const [interestList, setInterestList] = useState([
        { interest: '' }
    ]);

    // edu 
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
    //skill
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
    //project
    const handleProjectChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...projectInputList];
        list[index][name] = value;
        setProjectInputList(list);
    }
    const handleProjectDeleteClick = (index) => {
        const list = [...projectInputList];
        list.splice(index, 1);
        setProjectInputList(list);
    }
    const handleProjectAddClick = () => {
        setProjectInputList([...projectInputList, { project: '', desc: '' }]);
    }

    //achievement
    const handleAchievementChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...achievementList];
        list[index][name] = value;
        setAchievementList(list);
    }
    const handleAchievementDeleteClick = (index) => {
        const list = [...achievementList];
        list.splice(index, 1);
        setAchievementList(list);
    }
    const handleAchievementAddClick = () => {
        setAchievementList([...achievementList, { achievement: '' }]);
    }
    //certification
    const handleCertificationChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...certificationList];
        list[index][name] = value;
        setCertificationList(list);
    }
    const handleCertificationDeleteClick = (index) => {
        const list = [...certificationList];
        list.splice(index, 1);
        setCertificationList(list);
    }
    const handleCertificationAddClick = () => {
        setCertificationList([...certificationList, { certification: '' }]);
    }

    //interest 
    const handleInterestChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...interestList];
        list[index][name] = value;
        setInterestList(list);
    }
    const handleInterestDeleteClick = (index) => {
        const list = [...interestList];
        list.splice(index, 1);
        setInterestList(list);
    }
    const handleInterestAddClick = () => {
        setInterestList([...interestList, { interest: '' }]);
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

                                <div key={ind} className='flex flex-row'>

                                    <input size = "47" type="text" placeholder="Edu" name='edu' value={eduInputList[ind].edu} onChange={e => handleEduChange(e, ind)} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none " />


                                    <input size = '4' type="text" placeholder='cgpa' name='cgpa' value = {eduInputList[ind].cgpa} onChange ={e => handleEduChange(e, ind)} className='px-3 py-3 bg-white placeholder-gray-600 text-gray-900 border-0 outline-none' />

                                    <input size = '4' type="text" placeholder='year' name='year' value={eduInputList[ind].year} onChange={e => handleEduChange(e, ind)} className='px-3 py-3 bg-white placeholder-gray-600 text-gray-900 border-0 outline-none' />

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
                <div className='flex flex-row grid grid-cols-2'>

                    {
                        skillInputList.map((item, ind) => {
                            return (

                                <div className='flex flex-row'>

                                    <input key={ind} size = '27' type="text" placeholder="skill" name="skill" value={skillInputList[ind].skill} onChange={e => handleSkillChange(e, ind)} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />

                                    <div className='flex flex-row justify-end'>
                                        {
                                            skillInputList.length !== 1 &&
                                            <div className='py-3 px-3'><AiFillDelete size='30' onClick={() => handleSkillDeleteClick(ind)} /></div>
                                        }

                                        {
                                            skillInputList.length - 1 === ind &&
                                            <div className='py-3 px-3'><IoIosAddCircle size="30" onClick={handleSkillAddClick} /></div>
                                        }
                                    </div>

                                </div>


                            )
                        })
                    }

                </div>



                <h5 className='text-2xl flex flex-start font-bold font-serif border-b-2 border-black pt-4'>PROJECTS</h5>
                {
                    projectInputList.map((item, ind) => {
                        return (
                            <div className='flex flex-row grid grid-cols-3'>
                                <div key={ind} className='flex flex-col col-span-2'>
                                    <input type="text" placeholder="project" name='project' value={projectInputList[ind].project} onChange={e => handleProjectChange(e, ind)} className="px-2 py-2 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                                    <textarea type="text" placeholder="desc" name='desc' value={projectInputList[ind].desc} onChange={e => handleProjectChange(e, ind)} className="px-2 py-2 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                                </div>
                                <div className='flex flex-row justify-end'>
                                    {
                                        projectInputList.length !== 1 &&
                                        <div className='py-3 px-3'><AiFillDelete size='30' onClick={() => handleProjectDeleteClick(ind)} /></div>
                                    }

                                    {
                                        projectInputList.length - 1 === ind &&
                                        <div className='py-3 px-3'><IoIosAddCircle size="30" onClick={handleProjectAddClick} /></div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }





                <h5 className='text-2xl flex flex-start font-bold font-serif border-b-2 border-black pt-4'>ACHIEVEMENTS</h5>
                {
                    achievementList.map((item, ind) => {
                        return (
                            <div className='flex flex-row grid grid-cols-3'>
                                <div key={ind} className='flex flex-col col-span-2'>
                                    <input type="text" placeholder="Achievement1" name='achievement' value={achievementList[ind].achievement} onChange={e => handleAchievementChange(e, ind)} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                                </div>
                                <div className='flex flex-row justify-end'>
                                    {
                                        achievementList.length !== 1 &&
                                        <div className='py-3 px-3'><AiFillDelete size='30' onClick={() => handleAchievementDeleteClick(ind)} /></div>
                                    }

                                    {
                                        achievementList.length - 1 === ind &&
                                        <div className='py-3 px-3'><IoIosAddCircle size="30" onClick={handleAchievementAddClick} /></div>
                                    }
                                </div>

                            </div>
                        )
                    })
                }


                <h5 className='text-2xl flex flex-start font-bold font-serif border-b-2 border-black pt-4'>CERTIFICATIONS</h5>
                {
                    certificationList.map((item, ind) => {
                        return (
                            <div key={ind} className='flex flex-row grid grid-cols-3'>
                                <div className='flex flex-col col-span-2'>
                                    <input type="text" placeholder="certification" name='certification' value={certificationList[ind].certification} onChange={e => handleCertificationChange(e, ind)} className="px-3 py-3 placeholder-gray-600 flex w-full pr-0 bg-white text-gray-900 border-0 outline-none  text-xl" />
                                </div>
                                <div className='flex flex-row justify-end'>
                                    {
                                        certificationList.length !== 1 &&
                                        <div className='py-3 px-3'><AiFillDelete size='30' onClick={() => handleCertificationDeleteClick(ind)} /></div>
                                    }

                                    {
                                        certificationList.length - 1 === ind &&
                                        <div className='py-3 px-3'><IoIosAddCircle size="30" onClick={handleCertificationAddClick} /></div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }


                <h5 className='text-2xl flex flex-start font-bold font-serif border-b-2 border-black pt-4'>INTEREST</h5>
                <div className='flex flex-col grid grid-cols-2'>
                    {
                        interestList.map((item, ind) => {
                            return (
                                <div key={ind} className='flex flex-row'>
                                    <input type="text" size = '27' placeholder="interest" name='interest' value={interestList[ind].interest} onChange={e => handleInterestChange(e, ind)} className="px-3 py-3 placeholder-gray-600 bg-white text-gray-900 border-0 outline-none  text-xl" />
                                    {
                                        interestList.length !== 1 &&
                                        <div className='py-3 px-3'><AiFillDelete size='30' onClick={() => handleInterestDeleteClick(ind)} /></div>
                                    }

                                    {
                                        interestList.length - 1 === ind &&
                                        <div className='py-3 px-3'><IoIosAddCircle size="30" onClick={handleInterestAddClick} /></div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>





            </div >

        </div >
    )
});



export default Template;