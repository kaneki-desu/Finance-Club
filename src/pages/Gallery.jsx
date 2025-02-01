import React from 'react'
import { BentoFocusCards } from '../Components/Gallery/Bento-focus-cards'

const Gallery = () => {
    const cards = [
        {
          title: "Finance Club Farewell",
          src: "https://i.postimg.cc/X7bV6fzb/Fin-farewell.jpg",
          className: "md:col-span-2 md:row-span-2",
        },
        {
          title: "Valley of Life",
          src: "https://i.postimg.cc/prDRnry4/Fin-horizontal.jpg",
          className: "md:col-span-2",
        },
        {
          title: "Sala Behta Hi Jayega",
          src: "https://i.postimg.cc/CMDF2PJ7/Fin-Orientation.jpg",
        },
        {
          title: "Camping is for Pros",
          src: "https://i.postimg.cc/prDRnry4/Fin-horizontal.jpg",
          className: "md:row-span-2",
        },
        {
          title: "The Road Not Taken",
          src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          className: "md:col-span-2",
        },
        {
          title: "The First Rule",
          src: "https://assets.aceternity.com/the-first-rule.png",
          className: "md:col-span-2",
        },
      ]
  return (
    <div><BentoFocusCards cards={cards}/></div>
  )
}

export default Gallery