import React from 'react'


const TeamCardHolder = ({children}) => {
  return (
    <div>
          <div className='flex flex-wrap justify-center poppins-regular'>
    {/* <h1 className='text-center  font-semi-bold text-yellow-500 text-1x underline '>Team</h1> */}
         <div className='flex flex-wrap gap-20 justify-center'>
{children}
    </div>
    </div>
    </div>
  )
}

export default TeamCardHolder
