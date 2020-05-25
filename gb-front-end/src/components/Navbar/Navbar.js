import React from 'react'

const Navbar =({routeChange})=>{
  return(
    <div className='Navbar'>
      <h1>Guest Book App</h1>
      <div className='NavLinks'>
        <p>Home</p>
        <p>Add New Post</p>
        <p>Signout</p>
      </div>
    </div>
  )
}

export default Navbar