import React, { useState, useEffect } from 'react'
import { getGifts } from '../helpers/getGifts'
import GifGridItem from './GifGridItem'

const GifGrid = ( {category} ) => {

  const [images, setImages] = useState([])
  
  useEffect( () => {
    getGifts(category).then(imgs => setImages(imgs))
  },[category])


  // getGifts();
  return (
    <>
    <h3> { category } </h3>
    <div className= "card-grid">
      
        { 
          images.map( img => 
             <GifGridItem 
              key = { img.id }
              { ...img }
            />
           ) 
        }
    </div>
    </>
  )
}

export default GifGrid
