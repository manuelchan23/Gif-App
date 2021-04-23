//rafce
import React,{ useState } from 'react'

const GifExpertApp = () => {

  const [categories, setCategories] = useState(["Goku","Gohan","krilin"]);

  const addCategory = (e) => {
    //setCategories([...categories, "Videl"]);
    setCategories(cats => [...cats, "Bulma"]);
  } 

  return (
    <>
      
      <h2> GifExpertApp </h2>
      <hr />
      <button onClick={ addCategory }>Agergar</button>
      <ol>
        {
          categories.map( category => {
            return <li key={ category }> { category } </li>
          })
        }
      </ol>
    </>
  )
}

export default GifExpertApp
