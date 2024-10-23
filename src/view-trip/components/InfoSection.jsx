import { Button } from '@/components/ui/button';
import useFetchImage from '@/Hook/useFetchImage';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";

const InfoSection = ({trip}) => {
  
  

  const imageUrl = useFetchImage(trip?.userSelection?.location);
 

  const image = imageUrl ? imageUrl : "/placeholder.jpg";

  
  return (
    <div>
        {/* <img src={"/placeholder.jpg"} className='h-[340px] w-full object-cover rounded-xl' /> */}
        <img src={image} className='h-[500px] w-[1200px] object-cover rounded-xl' alt={trip?.userSelection?.location || 'Placeholder image'}/>

      <div className='flex justify-between items-center'>
      
        <div className='my-5 flex flex-col gap-2'>
          <h2 className='font-bold text-2xl'>{trip?.userSelection?.location}</h2>
          <div className='flex gap-5'>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 '>📅 {trip?.userSelection?.numOfDays} Day</h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500'>💰 {trip?.userSelection?.budget} Budget</h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500'>🥂 No of Traveler: {trip?.userSelection?.traveler}</h2>
            
          </div>
        </div>

        <Button><IoIosSend /></Button>
        </div>
    </div>
  )
}

export default InfoSection