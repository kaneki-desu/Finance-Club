import React from 'react'
import { BadgeIndianRupee } from 'lucide-react';
const TextUpDown = () => {
  return (
    <div className='relative h-screen w-screen flex-col flex ' style={{paddingLeft:"12vw", paddingTop:"15vw"}}>
        <ul className='inner-heading -z-1'>
            <div >
            Create<br/>
            Prosper<br/>
            {/* <p className='bg-red-500'>Create</p><br/>
            <p className='bg-red-100'>Innovate</p><br/> */}
            <p className='flex justify-left gap-1 items-center text-left normal-case'>INVEST <BadgeIndianRupee size={100} color='green' /></p> <br/>
            </div>
        </ul>
    </div>
  )
}

export default TextUpDown