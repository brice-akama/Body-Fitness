import React from 'react'



const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <h1 className="text-4xl font-semibold mt-2 ">Admin Panel Dashboard</h1>
      <button onClick={()=>setToken('')} className="bg-blue-500 text-white px-5 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm rounded-full mt-3">
      
  Logout
</button>

    </div>
  )
}

export default Navbar
