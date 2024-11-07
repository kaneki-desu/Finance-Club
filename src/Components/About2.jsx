import React from 'react'
import pic1 from "../assets/finance-pic-1.jpg"
import { HovImage } from './hovImage'
const About = ({inView}) => {
    console.log(inView)
  return (
    <div className={`about-us flex justify-center about-us  ${inView?(`appear-up fade-in`):null}`}>
        <div className='Typography w-1/2   p-16 flex flex-col fle '>
            <div className="heading   flex  mb-10">
        <h1 >{inView}</h1>
            <span className="KG-Happy">About Us</span>
            </div>
            <div  className="Content   flex-col text-left border-red-700 text-3xl break-words">
                <p > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam totam consectetur exercitationem fuga officiis ab sit harum, itaque nostrum, distinctio, molestias possimus esse obcaecati natus asperiores accusamus nam repellat. Ad quia quis odio non suscipit harum qui blanditiis, voluptatem magni, ipsa sint minima ipsum laboriosam pariatur inventore quos autem quidem.</p>
                </div>
        </div>
        <div className='Pics w-1/2 relative Content  p-32  flex flex-col justify-center items-center '>

            <HovImage/>
        </div>
        
    </div>
  )
}

export default About