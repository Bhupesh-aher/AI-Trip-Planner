import useFetchImage from '@/Hook/useFetchImage';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserTripCardItem = ({trip}) => {

  const imageUrl = useFetchImage(trip?.userSelection?.location);
  console.log(imageUrl);

  const image = imageUrl ? imageUrl : "/placeholder.jpg";

  return (
    <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105 transition-all'>
        {/* <img src="/placeholder.jpg" className="object-cover rounded-xl h-[220px]" /> */}
        <img src={image} alt={trip?.userSelection?.location}  className='object-cover rounded-xl h-[220px]' />

        <div>
            <h2 className='font-bold text-lg'>{trip?.userSelection?.location}</h2>
            <h2 className='text-sm text-gray-500'>{trip?.userSelection?.numOfDays} Days trip with {trip?.userSelection?.budget} Budget </h2>
        </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem