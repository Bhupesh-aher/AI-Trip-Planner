
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useFetchImage from '@/Hook/useFetchImage';


const HotelCardItem = ({hotel}) => {

  const imageUrl = useFetchImage(hotel?.name);
  

  const image = imageUrl ? imageUrl : "/placeholder.jpg";

    
  return (
    
         <Link  to={'https://www.google.com/maps/search/?api=1&query='+hotel.name+","+ hotel?.address} target='_blank'>
                <div className='hover:scale-105 transition-all cursor-pointer'>
                <img src={image} className='rounded-xl h-[180px] w-full object-cover' alt={hotel?.name}/>
                
                    <div className='my-2 flex flex-col gap-2'>
                        <h2 className='font-medium'>{hotel?.name}</h2>
                        <h2 className='text-xs text-gray-500'>📍 {hotel?.address}</h2>
                        <h2 className='text-sm'>💰 {hotel.price}</h2>
                        <h2 className='text-sm'>⭐ {hotel.rating}</h2>
                    </div>
                </div>
                </Link>
   
  )
}

export default HotelCardItem;