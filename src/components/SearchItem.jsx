import React from 'react'

function SearchItem() {
  return (
    <div 
    className='border border-solid border-gray-400 flex justify-between gap-5 mb-5 p-[10px] rounded-md'>
      <img
      className='w-[200px] h-[200px] object-contain'
      src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
      />
         <div 
         className="flex flex-col gap-[10px] w-2/3">
        <h1 className="text-[20px] text-[#0071c2] ">Tower Street Apartments</h1>
        <span className="text-sm">500m from center</span>
        <span className="text-sm bg-[#008009] text-white max-w-max p-[3px] rounded-sm">Free airport taxi</span>
        <span className="text-sm font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-sm">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="text-sm text-bold text-[#008009] font-bold ">Free cancellation </span>
        <span className="text-sm text-[#008009]">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='w-1/3 flex flex-col justify-between'>
        <div className='flex justify-between'>
          <span className='text-l'>Excellent</span>
          <button className='bg-[#003580] text-white p-[5px] font-bold border-none'>8.9</button>
        </div>
        <div className='flex text-right flex-col gap-[5]'>
          <span className='text-[24px]'>$123</span>
          <span className='text-sm text-gray'>Includes taxes and fees</span>
          <button className='bg-[#0071c2] text-white px-[10px] py-[10px] font-bold border-none cursor-pointer  rounded-md'>See avaibility</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem