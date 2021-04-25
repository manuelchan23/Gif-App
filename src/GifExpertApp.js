//rafce
import React,{ useState } from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(["Goku","Gohan","krilin"]);

  const addCategory = (e) => {
    //setCategories([...categories, "Videl"]);
    setCategories(cats => [...cats, "dd"]);
  } 

  return (
    <>
      
      <h2> GifExpertApp </h2>
      <AddCategory setCategories = { setCategories}/>
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
