import React from 'react'

function FeaturedProperties() {
  return (
    <div className='max-w-[1024px] w-[100%] flex justify-between gap-5'>
        <div className='flex-1 gap-[10px] flex flex-col'>
            <img
              className='w-[100%]'
              src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"/>
           <span className="font-bold">Aparthotel Stare Miasto</span>
        <span >Madrid</span>
        <span >Starting from $120</span>
        <div >
          <button className='bg-[#003580] text-white border-none p-1 mr-2 font-bold'>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='flex-1 gap-[10px] flex flex-col'>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className='w-[100%]'
        />
        <span className="font-bold">Comfort Suites Airport</span>
        <span >Austin</span>
        <span >Starting from $140</span>
        <div >
          <button className='bg-[#003580] text-white border-none p-1 mr-2 font-bold'>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className='flex-1 gap-[10px] flex flex-col'>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className='w-[100%]'
        />
        <span className='font-bold'>Four Seasons Hotel</span>
        <span >Lisbon</span>
        <span >Starting from $99</span>
        <div >
          <button className='bg-[#003580] text-white border-none p-1 mr-2 font-bold'>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='flex-1 gap-[10px] flex flex-col'>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className='w-[100%]'
        />
        <span className="font-bold">Hilton Garden Inn</span>
        <span >Berlin</span>
        <span >Starting from $105</span>
        <div >
          <button className='bg-[#003580] text-white border-none p-1 mr-2 font-bold'>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};
export default FeaturedProperties