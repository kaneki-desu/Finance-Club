import React from 'react'
import About from '../Components/About'
import { useInView } from "react-intersection-observer";
import Navbar from '../Components/Navbar';

const Home = () => {
const { ref, inView, entry } = useInView({ threshold: 0,});
  console.log(inView, entry);
  return (
    <>
    <div className="hero w-screen h-screen relative ">
            <svg xmlns="http://www.w3.org/2000/svg" className='appear-up absolute bottom-0 left-0 -z-10' viewBox="0 -10 1440 319"><path fill="#152f41" fill-opacity="1" d="M0,256L1440,96L1440,320L0,320Z" className='appear-triangle'></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 left-0' viewBox="0 0 1440 319"><path fill="#0b121f" fill-opacity="1" d="M0,288L1440,192L1440,320L0,320Z"></path></svg>
       
    </div>
    <section className='Content-Homepage text-center  ' style={{backgroundColor:"#0b121f"}}>
        <About ref={ref} inview={inView}/>
    </section>
    </>
  )
}

export default Home