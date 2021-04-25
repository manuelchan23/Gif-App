//rafce
import React,{ useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(["Goku"]);

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
            //return <li key={ category }> { category } </li>
            return <GifGrid key={ category } category = { category } />
          })
        }
      </ol>
    </>
  )
}

export default GifExpertApp
