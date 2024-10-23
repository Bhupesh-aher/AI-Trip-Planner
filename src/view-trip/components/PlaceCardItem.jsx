import { Button } from '@/components/ui/button'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ImLocation } from "react-icons/im";
import { Link } from 'react-router-dom';
import useFetchImage from '@/Hook/useFetchImage';

const PlaceCardItem = ({place}) => {

  const imageUrl = useFetchImage(place.placeName);
  const image = imageUrl ? imageUrl : "/placeholder.jpg";
  
  
  





    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query='+place.placeName} target='_blank'>
        <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
        <img src={image} className='w-[130px] h-[130px] rounded-xl object-cover' />
            <div>
                <h2 className='font-bold text-lg'>{place.placeName}</h2>
                <p className='text-sm text-gray-400'>{place.placeDetails}</p>
                <h2 className='mt-1'>🕐 {place.timeTravel}</h2>
                <h2>{place.ticketPricing}</h2> 
                {/* <Button size="sm"><ImLocation /></Button> */}
               
            </div>
        </div>
        </Link>
    )
}

export default PlaceCardItem 