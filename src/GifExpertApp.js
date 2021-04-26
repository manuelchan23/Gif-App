//rafce
import React,{ useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(["league of legends"]);

  // const addCategory = (e) => {
  //   //setCategories([...categories, "Videl"]);
  //   setCategories(cats => [...cats, "dd"]);
  // } 

  return (
    <>
      
      <h2> GifExpertApp </h2>
      <AddCategory setCategories = { setCategories }/>
      <hr />
      
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
