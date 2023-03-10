import React from 'react'

function Footer() {
  return (
    <div className='max-w-[1024px] w-full text-xs'>
        <div className='flex justify-between w-full mb-[50px] pt-5 ' >
            <ul className='mb-[10px] text-[#003580] cursor-pointer text-xs '>
                <li className='pb-2'>Countries</li>
                <li className='pb-2'>Regions</li>
                <li className='pb-2'>Cities</li>
                <li className='pb-2'>Districts</li>
                <li className='pb-2'>Airports</li>
                <li >Hotels</li>
            </ul>
            <ul className='mb-[10px] text-[#003580] cursor-pointer'>
                <li className='pb-2'>Homes</li>
                <li className='pb-2'>Apartments</li>
                <li className='pb-2'>Resorts</li>
                <li className='pb-2'>Villas</li>
                <li className='pb-2'>Hotels</li>
                <li>Guest houses</li>
            </ul>
            <ul className='mb-[10px] text-[#003580] cursor-pointer'>
                <li className='pb-2'>Unique places to stay</li>
                <li className='pb-2'>All destinations</li>
                <li className='pb-2'>All flight destinations</li>
                <li className='pb-2'>Discover</li>
                <li className='pb-2'>Reviews</li>
                <li >Discover monthly stays</li>
            </ul>
            <ul className='mb-[10px] text-[#003580] cursor-pointer'>
                <li className='pb-2'>Car hire</li>
                <li className='pb-2'>Flight finder</li>
                <li className='pb-2'>Restaurant reservations</li>
                <li className='pb-2'>Booking.com for Travel Agents</li>
               
            </ul>
            <ul className='mb-[10px] text-[#003580] cursor-pointer'>
                <li className='pb-2'>Coronavirus FAQs</li>
                <li className='pb-2'>About Booking.com</li>
                <li className='pb-2'>Customer Servise help</li>
                <li className='pb-2'>Partner help</li>
                <li className='pb-2'>Careers</li>
                <li>Sustainability</li>
            </ul>
            <ul className='mb-[10px] text-[#003580] cursor-pointer'>
                <li className='pb-2'>Press centre</li>
                <li className='pb-2'>Safety resourse centre</li>
                <li className='pb-2'>Investor relations</li>
                <li className='pb-2'>Terms & Conditions</li>
                <li className='pb-2'>Partner dispute</li>
                <li>How to work</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer