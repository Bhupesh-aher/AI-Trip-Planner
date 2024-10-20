import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserTripCardItem = ({trip}) => {

  const [images, setImages] = useState([]);

  const API_URL = 'https://api.unsplash.com/search/photos';
  const IMAGES_PER_PAGE = 10;

  useEffect(() => {
    const getImages = async () => {
      try{
        //  const {data} = await axios.get(`${API_URL}?query=${trip?.userSelection?.location}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`)
        const {data} = await axios.get(`${API_URL}?query=${trip?.userSelection?.location}&page=1&per_page=${IMAGES_PER_PAGE}&order_by=latest&client_id=${import.meta.env.VITE_API_KEY}`)

         
         setImages(data.results)
      }
      catch(error){
        
        setImages([]);
        
      }
      
    }

    getImages();
  }, [trip]);

  
  const imageUrl = images.length > 0 ? images[2]?.urls?.regular : "/placeholder.jpg";
  const altText = images.length > 0 ? `Image related to ${trip?.userSelection?.location}` : 'Placeholder image';

  return (
    <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105 transition-all'>
        {/* <img src="/placeholder.jpg" className="object-cover rounded-xl h-[220px]" /> */}
        <img src={imageUrl} alt={altText}  className='object-cover rounded-xl h-[220px]' />

        <div>
            <h2 className='font-bold text-lg'>{trip?.userSelection?.location}</h2>
            <h2 className='text-sm text-gray-500'>{trip?.userSelection?.numOfDays} Days trip with {trip?.userSelection?.budget} Budget </h2>
        </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem