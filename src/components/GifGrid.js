import React from 'react'

const GifGrid = ( {category} ) => {

  const getGifts = async () => {
    const url = "https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=8YpWHombRX9cNNh8OilBCCaVWk9Vnmn9"
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map(img =>{
      return {
        id: img.id,
        tittle: img.tittle,
        url: img.images?.downsized_medium.url
      }
    })

    console.log(gifs)
  }
  getGifts();
  return (
    <div>
      <h3>{category}</h3>
    </div>
  )
}

export default GifGrid
