import React, { useState } from 'react'

function AddBooks() {

   const[formData,setFormData]=useState({})

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
    }

  return (
     <>
         <form action="" onSubmit={handleSubmit}>
              <input name="title" type="text" placeholder='title' onChange={handleChange} />
              <input name="author" type="text" placeholder='author' onChange={handleChange} />
              <input name="description" type="text" placeholder='description' onChange={handleChange}/>
              <input name="description" type="text" placeholder='description' onChange={handleChange}/>
              <input type="submit" />
         </form>
     </>
  )
}

export default AddBooks