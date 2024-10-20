import { Input } from '@/components/ui/input';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelList } from '@/constants/options';
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { chatSession } from '@/service/AIModel';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"

import { FcGoogle } from "react-icons/fc";
import { LogIn } from 'lucide-react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import { AiOutlineLoading3Quarters } from "react-icons/ai";




 const CreateTrip = () => {
  const [place, setPlace] = useState();
  const [openDailog, setOpenDailog] = useState(false);

  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInput = (name, value) => {
    setFormData({
      ...formData,
      [name]:value
    })
  }

  useEffect(() => {
    // console.log(formData);
    
  }, [formData])
  // console.log(place);


  const login = useGoogleLogin({
    onSuccess:(codeResp)=>GetUserProfile(codeResp),
    onError:(error)=>console.log(error)
    
  }) 

  

  const onGenrateTrip = async () => {

    
    const user = localStorage.getItem('user');

    if(!user){
      setOpenDailog(true)
      return ;
    }

    if(formData?.numOfDays>5 && !formData?.location || !formData?.budget || !formData?.traveler){
      toast("Please fill all details")

      return ;
    }

    setLoading(true)

    const FINAL_PROMPT = AI_PROMPT
    .replace(' {location}', formData?.location)
    .replace('{totalDays}', formData?.numOfDays)
    .replace('{traveler}', formData?.traveler)
    .replace('{budget}', formData?.budget)
    .replace('{totalDays}', formData?.numOfDays)

    // console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);

     

    setLoading(false);
    SaveAiTrip(result?.response?.text())
    
    
  }


  const SaveAiTrip = async(TripData) => {
    setLoading(true)
    const user = JSON.parse(localStorage.getItem('user'))
    const docId = Date.now().toString()
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id:docId
    })
    setLoading(false)
    navigate('/view-trip/'+docId)
  }

  const GetUserProfile=(tokenInfo)=> {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`, {
      headers:{
        Authorization:`Bearer ${tokenInfo?.access_token}`,
        Accept:'Application/json'
      }
    }).then((resp)=>{
     
      localStorage.setItem('user', JSON.stringify(resp.data))
      setOpenDailog(false)
      onGenrateTrip()
    })
  }
  
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 px-5 mt-10'>
      <p className='font-bold text-3xl '>Tell us Your travel prefernces</p>
      <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information, and our trip palnner will genrate a customized ltinerary based on your preferences</p>

      <div>
        <div className='mt-20 flex flex-col gap-10'>
          <div>
          <h2 className='text-xl my-3 font-medium'>What is destination of choice?</h2>
          {/* <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}/> */}
          {/* <input className='border border-gray-200 rounded-sm w-[43rem] p-2' type="text" placeholder='Destination' onChange={(e) =>setPlace(e.target.value)}  /> */}
          <input className='border border-gray-200 rounded-sm w-[43rem] p-2' type="text" placeholder='Destination' onChange={(e) =>handleInput('location', e.target.value)}  />

          </div>
             <div>
          <h2 className='text-xl my-3 font-medium'> How many days are you planning your trip?</h2>
          <Input placeholder={'Ex.3'} type="number" onChange={(e) =>handleInput('numOfDays', e.target.value)}/>

            </div>
        </div>

         <div>
             <h2 className='text-xl mt-12 my-3 font-medium'>What is Your Budget?</h2>
             <div className='grid grid-cols-3 gap-5 mt-5'>
              {SelectBudgetOptions.map((item, index) => (
                <div key={index} 
                onClick={() =>handleInput('budget', item.title)}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.budget==item.title&&`shadow-lg border-black`}`}>
                   <h2 className='text-4xl'>{item.icon}</h2>
                   <h2 className='font-bold text-lg'>{item.title}</h2>
                   <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                </div>
              ))}
             </div>
         </div>

         
         <div>
             <h2 className='text-xl mt-12 my-3 font-medium'>Who do you plan on traveling with on your next adventure?</h2>
             <div className='grid grid-cols-3 gap-5 mt-5'>
              {SelectTravelList.map((item, index) => (
                <div key={index} 
                onClick={() =>handleInput('traveler', item.people)}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.traveler==item.people&&`shadow-lg border-black`}`}>
                   <h2 className='text-4xl'>{item.icon}</h2>
                   <h2 className='font-bold text-lg'>{item.title}</h2>
                   <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                </div>
              ))}
             </div>
         </div>

      </div>

     <div className='my-10 flex justify-end'>
        <Button 
        disabled={loading}
        onClick={onGenrateTrip}>
          {loading? <AiOutlineLoading3Quarters className='h-7 m-7 animate-spin' /> : "Genrate Trip"

        }
          </Button>
     </div>

     <Dialog open={openDailog}>
      
      <DialogContent>
        <DialogHeader>
          
          <DialogDescription>
            <img src='/logo.svg'/>
            <h2 className='font-bold text-lg mt-7'>Sign In with Google</h2>
            <p>Sign in to the app with Google Authentication Securely</p>

            <Button
            
            onClick={login}
             className="w-full mt-5 flex gap-4 items-center">
              
              <FcGoogle className='h-7 w-7'/> 
              Sign in With Google
              
              </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
</Dialog>

    </div>
  )
}


export default CreateTrip;