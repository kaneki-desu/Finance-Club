import React from 'react'
import '../css/cube.css'
const THECUBE = () => {
  return (
    <div className='cube container'>
        <div className='top face'>Top</div>
        <div className='right side'>RIGHT</div>
        <div className='back face'>bACK</div>
        <div className='front face'>FRONT</div>
        <div className='left side'>LEFT</div>
        <div className='bottom face '>BOTTOM</div>
    </div>
  )
}

export default THECUBE