import React from 'react'
import { styled } from 'styled-components';
import './Navbar.css'
const Li= styled.li`
    padding: 20px 40px;
    border: 1px;
    cursor:pointer;

    &:hover{
        background-color: yellowgreen;
    }
`

const Navbar = () => {
  return (
    <>
    <div id="current-event"></div>
    <div className="navbar w-full absolute left-0 z-50 " >
      <div className="nav-extend mx-40 ">
        {/* <Logo/> */}
        <ul className='flex justify-between '>
          <Li>Home</Li>
          <Li>Events</Li>
          <Li>About</Li>
          <Li>Sponsors</Li>
          <Li>Blogs</Li>
          <Li>Team</Li>
        </ul>
        
      </div>
    </div>
    </>
  )
}

export default Navbar