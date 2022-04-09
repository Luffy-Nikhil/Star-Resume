import React from 'react'

const Contact = () => {
  return (
    <div name = 'contact' className = 'w-full h-screen bg-[#1e293b] text-white flex justify-center items-center'>
        <form method = 'post' action="https://getform.io/f/06448426-291b-436a-b3aa-d07b8987217a" className='flex flex-col  max-w-[600px] w-full text-[#1e293b]'>
            <div className = 'pb-8'>
                <p className='text-5xl font-bold inline border-b-4 border-pink-600 text-white'>Contact</p>
                <p className='py-4'>// Have any queries ? Post your queries in the below form.</p>
            </div>
            <div className='flex flex-col'>
                <input className='p-2 my-3' type="text" placeholder='Name' name = 'name'/>
                <input className='p-2' type="text" placeholder='Email' name = 'email'/>
                <textarea className = 'p-2 my-3 text-[#1e293b]'name="message" id="" cols="30" rows="10"></textarea>
                <button className='border-2 border-gray-300 py-2 my-8 mx-auto px-6 text-white hover:border-pink-600 hover:bg-pink-600'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Contact;