import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../contexts/theme';
import '../css/Messages.css'
const Message = () => {
  const {themeMode}=useContext(ThemeContext)
  return (
    <div>
        <div className="flex  flex-wrap items-center justify-end gap-10 md:gap-20 pc:mt-28 pc:w-7/12 mobile:w-full  pc:ml-20 pc:h-[400px] mobile:h-full" style={{marginBottom:'200px'}}>
        <div className="messageBox w-full h-full p-5   ">
            <div className={`${themeMode==='dark'?'glassMorphD':'glassMorphL'} h-full w-full`}>

          <div className="messageText">
            <p className="text-2xl">Our Mission</p>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
          </div>
          </div>

          </div>
        </div>
    </div>
  )
}

export default Message