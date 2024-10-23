import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchImage = (name) => {
  const [imageUrl, setImageUrl] = useState("/placeholder.jpg");

  useEffect(() => {
    const fetchImage = async () => {
      if (!name) return; // Skip if no name is provided

      try {
        // Step 1: Search for the place to get the photo reference
        const response = await axios.get(`https://maps.gomaps.pro/maps/api/place/textsearch/json?query=${name}&key=${import.meta.env.VITE_GOOGLE_PLACE}`);
        const data = response.data;
        console.log(data);
        

        if (data.results && data.results.length > 0) {
          const photoReference = data.results[0].photos[0]?.photo_reference;

           // Step 2: Fetch the image using the photo reference
           if (photoReference) {
            const imageUrl = `https://maps.gomaps.pro/maps/api/place/photo?photo_reference=${photoReference}&maxHeight=1000&maxwidth=1000&key=${import.meta.env.VITE_GOOGLE_PLACE}`;
            setImageUrl(imageUrl);
          } else {
            // Fallback to placeholder if no photo reference
            setImageUrl("/placeholder.jpg");
          }
        } else {
          // Fallback to placeholder if no results
          setImageUrl("/placeholder.jpg");
        }
      } catch (error) {
        console.error("Error fetching image:", error);
        // Set the placeholder image on error
        setImageUrl("/placeholder.jpg");
      }
    };

    fetchImage();
  }, [name]);

  return imageUrl;
};

export default useFetchImage;