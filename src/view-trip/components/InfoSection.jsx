import { Button } from '@/components/ui/button';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";

const InfoSection = ({trip}) => {
  
  

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
        
        setImages([])
        
      }
      
    }

     getImages();
  }, [trip]);
  
  
  
  
  const imageUrl = images.length > 4 ? images[4]?.urls?.regular : '/placeholder.jpg';

  
  return (
    <div>
        {/* <img src={"/placeholder.jpg"} className='h-[340px] w-full object-cover rounded-xl' /> */}
        <img src={imageUrl} className='h-[400px] w-[1000px] object-cover rounded-xl' alt={trip?.userSelection?.location || 'Placeholder image'}/>

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