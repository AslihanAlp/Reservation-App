import React from 'react'

function MailList() {
  return (
    <div className='w-full mt-[50px] bg-[#003580] text-white flex flex-col items-center gap-5 p-[50px]'>
        <h1>Save time, save money</h1>
        <span>Sign up and we'll send the best deals to you</span>
        <div>
          <input className='w-[300px] h-[30px] p-[10px] border-none mr-[10px]'
          type="text" 
          placeholder='Your Email'></input>
          <button className='h-[40px] bg-[#0071c2] text-white text-md px-2 border-r-4 border-none cursor-pointer'>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList
