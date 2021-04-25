import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ( { setCategories } ) => {

  const [inputValue, setInputValue] = useState("")

  const inputChange = (e)  => {
    setInputValue (e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim().length > 0){
      setCategories(cats => [...cats, inputValue]);
      setInputValue ("")
    }else{
      alert("no hay valor");
    }

    
  }
  return (
    <form onSubmit={handleSubmit}>
    <h1>{inputValue}</h1>
    <input 
    type = "text"
    value = {inputValue}
    onChange = { inputChange }
    />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories : PropTypes.func.isRequired
}

export default AddCategory
